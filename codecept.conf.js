exports.config = {
  tests: './tests/**/**_test.js',
  timeout: 10000,
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost'
    },
    REST: {
      endpoint: 'http://documentation.lvh.me:3000',
      defaultHeaders: {
        Authorization: `Token token=${process.env.API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  include: {},
  bootstrap: false,
  mocha: {},
  name: 'nearme-documentation'
};
