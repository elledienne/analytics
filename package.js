Package.describe({
  name: 'okgrow:analytics',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles([
    'lib/server/config/browser-policy.js'
  ], 'server');
  api.addFiles([
    'lib/config.js',
    'lib/analytics.min.js',
    'lib/meteor-analytics.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('okgrow:analytics');
  // api.addFiles('okgrow:analytics-tests.js');
});
