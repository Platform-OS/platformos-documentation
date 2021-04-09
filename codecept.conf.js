const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

setWindowSize(1440, 900);

exports.config = {
  tests: './tests/codecept/*_test.js',
  output: './tmp',
  helpers: {
    Playwright: {
      url: process.env.MPKIT_URL,
      show: false,
      browser: 'chromium'
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
