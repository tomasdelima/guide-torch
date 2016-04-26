app.controller('searchController', function ($scope, $http) {
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
})
