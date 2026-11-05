const assert = require('assert');

Feature('Agent Playbook downloads');

// Runs in the browser. `pos-cli ai init` reads /agent-playbook.json, downloads each archive from the
// link it gives, and refuses one whose SHA-256 differs from platformos-agent-playbook-checksums.json.
// So a deploy with a missing archive, or with zips and checksums from different Kit builds, would
// break every install; this lists those problems instead.
const checkDownloads = async (indexPath) => {
  const problems = [];
  const indexResponse = await fetch(indexPath, { cache: 'no-store' });
  if (!indexResponse.ok) return [`${indexPath}: HTTP ${indexResponse.status}`];
  const index = await indexResponse.json();
  const files = index.files || {};
  const checksumsUrl = files['platformos-agent-playbook-checksums.json'];
  if (!checksumsUrl) return ['the index has no link to platformos-agent-playbook-checksums.json'];

  const checksums = await (await fetch(checksumsUrl, { cache: 'no-store' })).json();
  const archives = Object.keys(checksums);
  if (archives.length === 0) problems.push('the checksum file lists no archives');

  for (const name of archives) {
    const url = files[name];
    if (!url) { problems.push(`${name}: not in the index`); continue; }
    if (!/^https:\/\/.+[?&]updated=\d+/.test(url)) problems.push(`${name}: link has no deploy cache buster: ${url}`);
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) { problems.push(`${name}: HTTP ${response.status}`); continue; }
    const digest = await crypto.subtle.digest('SHA-256', await response.arrayBuffer());
    const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
    if (hex !== checksums[name]) problems.push(`${name}: SHA-256 ${hex} does not match the checksum file`);
  }
  return problems;
};

Scenario('every archive in the index downloads and matches its checksum', async ({ I }) => {
  I.amOnPage('/agent-playbook.json');
  const problems = await I.executeScript(checkDownloads, '/agent-playbook.json');
  assert.deepStrictEqual(problems, []);
});
