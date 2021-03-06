require('./layout.less');
angular.module('rc')
  .directive('rcPage', () => ({
    transclude: true,
    replace: true,
    scope: {
      vertical: '=',
      left: '=',
      centered: '='
    },
    template: `
      <div class="rc-app">
        <rc-header></rc-header>
        <div class="rc-page"
             ng-class="{
               'rc-page-vertical': vertical,
               'rc-page-left': left,
               'rc-page-centered': centered
             }"
             ng-transclude></div>
      </div>
    `,
    controller: () => {}
  }))
  .directive('rcPanel', () => ({
    transclude: {
      'header': '?rcPanelHeader',
      'body': 'rcPanelBody'
    },
    replace: true,
    scope: {
      rcTitle: '@'
    },
    template: `
      <div class="rc-panel">
        <div class="rc-panel-header">
          <span class="rc-panel-header-tabs">
            <span class="rc-panel-header-tabs-tab rc-panel-header-tabs-tab-selected" ng-bind="rcTitle"></span>
          </span>
          <span class="rc-panel-header-content" ng-transclude="header"></span>
        </div>
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
          <span class="rc-panel-header-tabs">
            <span class="rc-panel-header-tabs-tab"
                  ng-class="{'rc-panel-header-tabs-tab-selected': tab.selected}"
                  ng-repeat="tab in tabs"
                  ng-click="select(tab)"
                  ng-bind="tab.rcTitle"></span>
            </span>
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
      rcTitle: '@',
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
