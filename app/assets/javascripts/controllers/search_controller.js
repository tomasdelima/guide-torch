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
  $scope.toggleDocument = function (doc) {
    var originalValue = doc.expanded
    $scope.documents.forEach(function (d, index) {
      $scope.documents[index].expanded = false
    })
    doc.expanded = !originalValue
    if (doc.expanded) {
      setTimeout(function () {
        window.scrollTo(0, document.getElementsByClassName("expanded")[0].offsetTop + 200)
      }, 50)
    }
  }
}])
