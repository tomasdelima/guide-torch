app = angular.module('guideTorch', ['ngSanitize', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
                    .primaryPalette('yellow')
                    .dark()
}])
