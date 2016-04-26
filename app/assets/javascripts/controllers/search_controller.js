app.controller('searchController', function ($scope, $http) {
  $scope.executeQuery = function () {
    $http({
      method: 'GET',
      url: '/search',
      params: {query: $scope.query}
    }).then(function (response) {
      console.log(response.data)
      $scope.documents = response.data.documents
    }, function (response) {
    });
  }
})

