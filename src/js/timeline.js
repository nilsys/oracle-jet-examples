'use strict';

requirejs.config({
  baseUrl: 'js',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
  //injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.4.2.debug',
    'jquery': 'libs/jquery/jquery-3.3.1',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
    'promise': 'libs/es6-promise/es6-promise',
    'hammerjs': 'libs/hammer/hammer-2.0.8',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v6.0.0/debug',
    'ojL10n': 'libs/oj/v6.0.0/ojL10n',
    'ojtranslations': 'libs/oj/v6.0.0/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals',
    'customElements': 'libs/webcomponents/custom-elements.min',
    'proj4': 'libs/proj4js/dist/proj4-src',
    'css': 'libs/require-css/css',
    'touchr': 'libs/touchr/touchr'
  }
    //endinjector
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojlistview'],
  function(oj, ko, $, ArrayDataProvider) {

    function ViewModel() {
      var self = this;

        var data = [
          { name: 'Pascal' },
          { name: 'Sherly', action: 'approved', datetime: 'Jan 16, 2019 13:25' },
          { name: 'donghai', action: 'approved', datetime: 'Jan 10, 2019 10:00' },
          { name: 'xuebin', action: 'submitted report', datetime: 'Jan 1, 2019 9:30' }
        ];

        this.dataProvider = new ArrayDataProvider(data);
    }

    $(function() {

      ko.applyBindings(new ViewModel());

    });

});
