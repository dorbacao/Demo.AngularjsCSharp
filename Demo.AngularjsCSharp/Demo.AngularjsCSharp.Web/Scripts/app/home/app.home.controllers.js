
$app_home.controller('loginController', function ($scope, $http, $routeParams, $location) {

    $scope.usuario = { login: '', senha: '' };

    $scope.logar = function () {
        if ($scope.usuario.login == 'dorba' && $scope.usuario.senha == '123456')
            $location.path('/Congregacao/Lista');
        else
            alert('Usuário ou Senha inválido');
    }

});


$app_home.controller('congregacaoController', function ($scope, $http, $routeParams, $location) {

  


});