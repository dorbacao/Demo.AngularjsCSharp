
//registranbdo modulo root
var $app = angular.module('app', ['app.home']);

$app.factory('messager', function () {
    return {
        sucesso: function (text) {
            toastr.success(text, "Woooll");
        },
        fracasso: function (text) {
            toastr.error(text, "Ops...");
        }
    };
});
