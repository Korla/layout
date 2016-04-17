require('./app.less')
angular.module('rc', [])
  .controller('layoutController', ($scope) => {
  })
  .directive('rcHeader', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-header" ng-transclude></div>`
  }))
  .directive('rcPage', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-page" ng-transclude></div>`
  }))
  .directive('rcContainer', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-container" ng-transclude></div>`
  }))
;
