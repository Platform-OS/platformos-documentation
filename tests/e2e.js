const createTestCafe = require('testcafe');

let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
  .then(tc => {
    testcafe = tc;
    runner = testcafe.createRunner();

    return runner
      .src(['tests/e2e/Layout.js', 'tests/e2e/Homepage.js', 'tests/e2e/Search.js'])
      .browsers(['chrome:headless'])
      .reporter('list')
      .run();
  })
  .then(failedCount => {
    testcafe.close();
    failedCount === 0 ? process.exit(0) : process.exit(1);
  });
