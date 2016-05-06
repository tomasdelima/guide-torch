app = angular.module('guideTorch', ['angular-clipboard', 'ngSanitize', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
                    .primaryPalette('yellow')
                    .dark()
}])
