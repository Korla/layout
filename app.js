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
    template: `<div class="rc-page" ng-transclude></div>`,
    controller: () => {}
  }))
  .directive('rcPanel', () => ({
    require: 'rcPage',
    transclude: {
      'header': '?rcPanelHeader',
      'body': 'rcPanelBody'
    },
    replace: true,
    template: `
      <div class="rc-panel">
        <div ng-transclude="header" class="rc-panel-header">Fallback header</div>
        <div ng-transclude="body" class="rc-panel-body"></div>
      </div>
    `
  }))
  .directive('rcContent', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-content" ng-transclude></div>`
  }))
;
