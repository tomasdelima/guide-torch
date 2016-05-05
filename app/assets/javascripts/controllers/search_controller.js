app.controller('searchController', ['$scope', '$http', function ($scope, $http) {
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
}])
