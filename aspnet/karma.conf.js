// Karma configuration
// Generated on Thu Jan 29 2015 04:26:29 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "./AtTheMovies/scripts/angular.js",
        "./AtTheMovies/scripts/angular-route.js",
        "./AtTheMovies/scripts/angular-messages.js",
        "./AtTheMovies/scripts/angular-sanitize.js",
        "./AtTheMovies/scripts/angular-mocks.js",
        "./AtTheMovies/scripts/angular-animate.js",
        "./AtTheMovies/apps/common/module.js",
        "./AtTheMovies/apps/common/**/*.js",
        "./AtTheMovies/apps/moviesApp/module.js",
        "./AtTheMovies/apps/moviesApp/js/**/*.js",
        "./AtTheMovies/apps/moviesApp/specs/**/*.js",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
