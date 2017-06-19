/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'lib/ui/app/styles/ui.less'
      ]
    }
  });

  return app.toTree();
};
