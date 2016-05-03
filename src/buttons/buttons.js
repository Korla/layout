require('./buttons.less');
angular.module('rc')
  .directive('rcButtonList', () => ({
    transclude: true,
    replace: true,
    template: `
      <div class="rc-button-list" ng-transclude></div>
    `
  }))
  .directive('rcButton', () => ({
    transclude: true,
    replace: true,
    template: `
      <span class="rc-button" ng-transclude></span>
    `
  }))
;
