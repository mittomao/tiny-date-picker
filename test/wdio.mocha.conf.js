global.assert = require('chai').assert;

exports.config = {
  host: '0.0.0.0',
  port: 4444,
  specs: [
    './test/tiny-date-picker.test.js'
  ],

  capabilities: [{
    browserName: 'chrome'
  }],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'shots',
  baseUrl: 'http://localhost:8080/test',
  waitforTimeout: 1000,
  framework: 'mocha',

  reporters: ['dot', 'spec'],
  reporterOptions: {
    outputDir: './'
  },

  mochaOpts: {
    ui: 'bdd',
  },

  onPrepare: function() {
    console.log('Running specs. Be sure to `npm run selenium` first.');
  }
};
