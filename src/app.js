require('./app.less');
var rc = angular.module('rc', ['ui.router']);
require('./layout/layout.js');
require('./header/header.js');
require('./buttons/buttons.js');
require('./rc-select/rc-select.js');
import SelectViewModel from './rc-select/rc-select-view-model.js';

rc
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    ['home', 'treatment', 'patients']
      .forEach(r =>
        $stateProvider.state(r, { url: `/${r}`, templateUrl: `src/pages/${r}.html`}));

    $stateProvider.state('booking', {
      url: '/booking',
      templateUrl: `src/pages/booking.html`,
      controller: $scope => {
        var options = [
          'Initial appointments',
          'Treatment fractions',
        ]
        $scope.pa = options[0];
        $scope.selectPAVm = new SelectViewModel({options});
        $scope.calendarTitle = '9 - 16 May, 2016';
      }
    })
  });
;
