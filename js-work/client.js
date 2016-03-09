(function ($) {
    $(document).ready(function () {
        var height = $(window).height();
        
        //scroll magic
        var controller = new ScrollMagic.Controller();
        // build scene
        var scene = new ScrollMagic.Scene({triggerHook: "onCenter", duration: height/4})
                        .setPin("#logo")
                        .addTo(controller);
        
        $(window).scroll(function(){
            // menu appear
            var scroll = $(window).scrollTop();
            var ratio = scroll / height;
            
            if(scroll >= (height - 100)){
                $("#navbar").addClass("appear");
            } else {
                $("#navbar").removeClass("appear");
            }
            // down-arrwo disappear
            if(scroll > 50){
                $("#down-arrow").addClass("hide");
            } else {
                $("#down-arrow").removeClass("hide");
            }
            
        });
        
        //smooth scroll
        $("#down-arrow").click(function(e){
            $(window).scrollTo($("#main"), 800); 
        });
        
    })
})(jQuery);

var app = angular.module("app", ["ngResource", "ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: myLocalized.partials + 'posts.html',
            controller: "mainViewController"
        })
        .when("/page/:id", {
            templateUrl: myLocalized.partials + 'page.html',
            controller: "singlePage"
        })
        .when("/main", {
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
    });

    $http.get('api/get_posts/').success(function (res) {
        $scope.posts = res.posts;
    });

}]);

app.controller("singlePage", ["$scope", "$http", "$sce", "$routeParams", function ($scope, $http, $sce, $routeParams) {

    $scope.TrustDangerousSnippet = function (snippet) {
        return $sce.trustAsHtml(snippet);
    };

    $http({
    url: 'api/get_page/',
    method: 'GET',
    params: {
        slug: $routeParams.id
    }
    }).success(function (res) {
        $scope.page = res.page;
        console.log("______");
        console.log($scope.page);
    });

}]);