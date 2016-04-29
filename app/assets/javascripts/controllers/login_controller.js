app.controller('loginController', ['$scope', '$http', '$mdDialog', '$mdMedia', function ($scope, $http, $mdDialog, $mdMedia) {
  $scope.showLoginDialog = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))
    $mdDialog.show({
      templateUrl: '/templates/login.html',
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".'
    }, function() {
      $scope.status = 'You cancelled the dialog.'
    })
  }

  $scope.login = function () {
    $scope.warningMessage = undefined

    $http({
      method: 'POST',
      url: '/login',
      data: $scope.user
    }).then(function (response) {
      if(response.data.status == '200') {
        window.location = '/admin'
      } else {
        $scope.warningMessage = 'Erro de autenticação, tente novamente'
      }
    }, function (response) {
    })
  }
}])
