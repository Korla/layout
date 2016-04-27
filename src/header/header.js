require('./header.less');
angular.module('rc')
  .directive('rcHeader', () => ({
    replace: true,
    templateUrl: 'src/header/header.html'
  }))
;
