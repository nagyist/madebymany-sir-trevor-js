// Karma configuration
//
module.exports = function(config) {
  var enableBrowserStack = !!(process.env.BROWSERSTACK_USER && process.env.BROWSERSTACK_AUTHKEY);

  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'spec/',

    // frameworks to use
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      'javascripts/**/*.js',
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_ERROR,
    // logLevel: config.LOG_INFO,
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: enableBrowserStack ? ['BrowserStackChrome'] : ['Chrome'],

    customLaunchers: {
      BrowserStackChrome: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Yosemite'
      },
    },

    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_AUTHKEY,
    },

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // Browserify config (all optional)
    browserify: {
      debug: true,
      transform: [['deamdify', {global: true}]]
    },

    browserNoActivityTimeout: 60000,

    // Add browserify to preprocessors
    preprocessors: {
      "javascripts/**/*.js": "browserify"
    }
  });
}
