angular.module('rc')
  .directive('rcHeader', () => ({
    replace: true,
    template: `
    <div class="rc-header">
      <span>
        <span class="rc-header-logo">RayCare</span>
        <span class="rc-header-tabs">
          <span class="rc-header-tabs-selected">
            <span class="fa fa-fw fa-th-large"></span>
            Today
          </span>
          <span>
            <span class="fa fa-fw fa-calendar"></span>
            Booking
          </span>
          <span>
            <span class="fa fa-fw fa-hospital-o"></span>
            Treatment
          </span>
          <span>
            <span class="fa fa-fw fa-user"></span>
            Patients
          </span>
        </span>
      </span>
      <span class="rc-header-menu">
        <span class="rc-header-menu-name">John Smith</span>
        <span class="rc-header-menu-role">Booking admin</span>
      </span>
    </div>`
  }))
;
