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
    }, function() {
    })
  }

  $scope.login = function () {
    $scope.warningMessage = undefined

    $http({
      method: 'POST',
      url: '/login',
      data: $scope.user
    }).then(function (response) {
      location.reload()
    }, function (response) {
      if(response.data.status == '401') {
        $scope.warningMessage = 'Erro de autenticação, tente novamente'
      }
    })
  }

  $scope.logout = function () {
    $http.delete('/users/sign_out')
    .then(function (response) {
      location.reload()
    }, function (response) {
      location.reload()
    })
  }
}])
