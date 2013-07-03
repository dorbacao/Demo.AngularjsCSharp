
//Registrando Modulos
var $app_home = angular.module('app.home', []);

$app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: '/Home/Login',
            controller: 'loginController',
        });

        $routeProvider.when('/Home/Login', {
            templateUrl: '/Home/Login',
            controller: 'loginController',
        });

        $routeProvider.when('/Congregacao/Lista', {
            templateUrl: '/Congregacao/Lista',
            controller: 'congregacaoController',
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        // Specify HTML5 mode (using the History APIs) or HashBang syntax.
        $locationProvider.html5Mode(false).hashPrefix('!');

    }]);
