angular.module('morgan')
    .factory('morganFactory', ['$http', function($http) {

    var urlSource = "/sources.json";
    var dataFactory = {};

    dataFactory.getSource = function () {
        return $http.get(urlSource);
    };

    return dataFactory;
}]);
