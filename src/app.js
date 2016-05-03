require('./app.less');
angular.module('rc', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    ['home', 'booking', 'treatment', 'patients']
      .forEach(r =>
        $stateProvider.state(r, { url: `/${r}`, templateUrl: `src/pages/${r}.html`}));
  });
;

require('./layout/layout.js');
require('./header/header.js');
require('./buttons/buttons.js');
