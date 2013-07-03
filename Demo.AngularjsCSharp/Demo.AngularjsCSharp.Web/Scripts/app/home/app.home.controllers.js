
$app_home.controller('congregacaoController', function ($scope, $http, $routeParams, $location) {
        $scope.usuario = { login: '', senha: '' };

    });




$app.factory('congregacaoFactory', function ($http) {
    var url = 'api/congregacao/';
    return {
        getCongregacao: function () {
            return $http.get(url);
        }
    };
});



$app.factory('usuarioFactory', function ($http) {
    var url = 'api/usuario/';
    return {
        autenticar: function (usuario) {
            return $http.post(url, usuario);
        }
    };
});



$app_home.controller('loginController', function ($scope, $http, $routeParams, $location, messager, usuarioFactory) {

    var getCongregacaoSuccessCallback = function (data, status) {
        messager.sucesso(data);
    };

    var errorCallback = function (data, status, headers, config) {
        messager.fracasso(data.ExceptionMessage);
    };

    $scope.logar = function () {

        usuarioFactory.autenticar($scope.usuario)
            .success(getCongregacaoSuccessCallback)
            .error(errorCallback);            
        }

    });
