angular.module('rc')
  .directive('rcHeader', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-header" ng-transclude></div>`
  }))
;
