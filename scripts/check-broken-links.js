const blc = require('broken-link-checker');
const fs = require('fs');

const siteUrl = process.env.MP_URL || 'https://documentation.platformos.com';

console.log(`CI mode: ${process.env.CI}`);

const options = {
  filterLevel: 0,
  honorRobotExclusions: false,
  excludedKeywords: ['localhost', '*tablesgenerator.com*', '*sendgrid.api-docs.io*'],
  maxSocketsPerHost: 20,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
};

const results = { failed: [], succeeded: [] };

const siteChecker = new blc.SiteChecker(options, {
  link: function(result, results) {
    if (result.broken) {
      if (process.env.CI) {
        console.log(`[BAD] ${result.url.original} @ ${result.base.resolved}`);
      }
      results.failed.push(result);
    }

    if (!result.broken && !result.http.cached) {
      results.succeeded.push(result);
    }
  },
  end: () => {
    let report = `All links are OK at ${siteUrl}`;

    if (results.failed.length) {
      report = `Found ${results.failed.length} bad links.`;
    }

    fs.writeFileSync('/tmp/test-summary.txt', report);
    process.exit(0);
  }
});

siteChecker.enqueue(siteUrl, results);
