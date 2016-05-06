app.controller('searchController', ['$scope', '$http', '$mdToast', 'clipboard', function ($scope, $http, $mdToast, clipboard) {
  $scope.executeQuery = function () {
    $scope.expanded = false

    if ($scope.query) {
      $http({
        method: 'GET',
        url: '/search',
        params: {query: $scope.query}
      }).then(function (response) {
        $scope.documents = response.data.documents
      }, function (response) {
      })
    } else {
      $scope.documents = []
    }
  }

  $scope.toggleDocument = function (doc) {
    var originalValue = doc.expanded
    $scope.documents.forEach(function (d, index) {
      $scope.documents[index].expanded = false
    })
    $scope.expanded = doc.expanded = !originalValue
  }

  $scope.copyToClipboard = function ($event) {
    clipboard.copyText($event.currentTarget.parentElement.innerText.slice(7));
    $mdToast.show(
      $mdToast.simple().textContent('Copiado').hideDelay(3000)
    )
    $event.stopPropagation()
  }
}])
