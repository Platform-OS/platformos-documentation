const nav = performance.getEntriesByType('navigation')[0];
const DELAY = 100;

const report = (data) => {
  fetch('/__performance-report', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(console.log);
};

// Make sure it gets readings after the is ready by pushing it out of main thread
setTimeout(() => {
  const perf = {
    instantpage: !!window.instantpage,
    // slug: nav.name.split('.com').pop(),
    // ttfb: nav.responseStart - nav.requestStart,
    // processing: nav.domInteractive - nav.responseEnd,
    everything: nav.domInteractive - nav.requestStart,
  };

  if (nav.type === 'navigate') {
    report(perf);
  }
}, DELAY);
