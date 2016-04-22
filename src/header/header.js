angular.module('rc')
  .directive('rcHeader', () => ({
    replace: true,
    template: `
    <div class="rc-header">
      <span>
        <span class="rc-header-logo">RayCare</span>
        <span class="rc-header-tabs">
          <span class="rc-header-tabs-selected">Today</span>
          <span>Booking</span>
          <span>Treatment</span>
          <span>Patients</span>
        </span>
      </span>
      <span class="rc-header-menu">
        <span class="rc-header-menu-name">John Smith</span>
        <span class="rc-header-menu-role">Booking admin</span>
      </span>
    </div>`
  }))
;
