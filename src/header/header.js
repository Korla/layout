require('./header.less');
angular.module('rc')
  .directive('rcHeader', () => ({
    replace: true,
    templateUrl: 'src/header/header.html',
    controller: ($scope, $state, sharedState) => {
      $scope.patients = [
        {
          name: 'B. Gates',
          imgUrl: 'src/img/bill.jpg'
        },
        {
          name: 'J. Bengtsson',
          imgUrl: 'src/img/johannes.jpg'
        },
      ]
      $scope.patient = sharedState.patient;
      $scope.tasks = [
        {
          title: 'Book initial appointments',
          patient: 'B. Gates',
          url: 'booking'
        },
        {
          title: 'Book treatment fractions',
          patient: 'B. Gates',
          url: 'booking'
        },
        {
          title: 'Book initial appointments',
          patient: 'J. Bengtsson',
          url: 'booking'
        },
        {
          title: 'Set diagnosis',
          patient: 'B. Gates',
          url: 'patients'
        },
      ];

      $scope.click = task => {
        sharedState.patient = $scope.patients.filter(p => p.name === task.patient)[0];
        $scope.patient = sharedState.patient;
        $state.go(task.url);
      }
    }
  }))
  .constant('sharedState', {
    patient: {
      name: 'B. Gates',
      imgUrl: 'src/img/bill.jpg'
    }
  })
;
