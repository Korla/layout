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
    scope: {
      vertical: '='
    },
    template: `<div class="rc-page"
                    ng-class="{'rc-page-vertical': vertical}"
                    ng-transclude></div>`,
    controller: () => {}
  }))
  .directive('rcPanel', () => ({
    transclude: {
      'header': '?rcPanelHeader',
      'body': 'rcPanelBody'
    },
    replace: true,
    template: `
      <div class="rc-panel">
        <div class="rc-panel-header" ng-transclude="header">Fallback header</div>
        <div class="rc-panel-body" ng-transclude="body"></div>
      </div>
    `
  }))
  .directive('rcPanelTabs', () => ({
    transclude: true,
    scope: {},
    replace: true,
    template: `
      <div class="rc-panel">
        <div class="rc-panel-header">
          <span class="rc-panel-header-tab"
                ng-class="{'rc-panel-header-tab-selected': tab.selected}"
                ng-repeat="tab in tabs"
                ng-click="select(tab)"
                ng-bind="tab.title"></span>
        </div>
        <div class="rc-panel-body" ng-transclude></div>
      </div>
    `,
    controller: function($scope) {
      $scope.tabs = [];
      $scope.select = tabToSelect =>
        $scope.tabs.forEach(tab => tab.selected = tab === tabToSelect);
      this.addTab = tab => $scope.tabs.push(tab);
    }
  }))
  .directive('rcPanelTab', () => ({
    require: '^^rcPanelTabs',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      selected: '@'
    },
    template: `<div ng-show="selected" ng-transclude></div>`,
    link: (scope, element, attrs, tabsController) => tabsController.addTab(scope)
  }))
  .directive('rcContent', () => ({
    transclude: true,
    replace: true,
    template: `<div class="rc-content" ng-transclude></div>`
  }))
;
