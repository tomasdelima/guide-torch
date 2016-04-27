app = angular.module('guideTorch', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
                    .primaryPalette('yellow')
                    .dark()
}])
