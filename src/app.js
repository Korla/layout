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
          'Book initial appointments, Bill gates',
          'Book treatment fractions, Bill gates',
        ]
        $scope.pa = options[0];
        $scope.selectPAVm = new SelectViewModel({options});
        console.log($scope.selectPAVm);
      }
    })
  });
;
