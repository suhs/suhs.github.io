//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/views/*.js',
      'app/services/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
