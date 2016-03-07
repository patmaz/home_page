(function ($) {
    $(document).ready(function () {
        console.log(myLocalized.partials);
    })
})(jQuery);

var app = angular.module("app", ["ngResource", "ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: myLocalized.partials + 'main.html',
            controller: "mainViewController"
        });
}]);

app.controller("mainViewController", ["$scope", "$http", "$sce", "$routeParams", function ($scope, $http, $sce, $routeParams) {

    $scope.TrustDangerousSnippet = function (snippet) {
        return $sce.trustAsHtml(snippet);
    };

    $http.get('api/get_page_index/').success(function (res) {
        $scope.pages = res.pages;
        console.log($scope.pages);
    });
    
    $http.get('api/get_posts/').success(function (res) {
        $scope.posts = res.posts;
        console.log($scope.posts);
    });

}]);