app.controller('searchController', ['$scope', '$http', function ($scope, $http) {
  $scope.executeQuery = function () {
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
  $scope.toggleDocument = function (document) {
    var originalValue = document.expanded
    $scope.documents.forEach(function (doc, index) {
      $scope.documents[index].expanded = false
    })
    document.expanded = !originalValue
  }
}])
