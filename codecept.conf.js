const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

setWindowSize(1440, 900);

exports.config = {
  tests: './tests/codecept/*_test.js',
  output: './tmp',
  helpers: {
    Puppeteer: {
      url: process.env.MPKIT_URL,
      restart: false, // restart browser between Scenarios
      show: false // show Chromium browser while running tests
    }
  },
  include: {
    I: './tests/codecept/helpers/steps_helper.js',
    LiquidErrors: './tests/codecept/helpers/liquidErrors_helper.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'nearme-documentation',
  rerun: {
    minSuccess: 1,
    maxReruns: 3,
  },
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      attribute: 'data-test'
    }
  }
}
