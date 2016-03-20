(function ($) {

    var height = $(window).height();

    //refresh on resize
    $(window).resize(function () {
        //        setTimeout(
        //            function () {
        //                window.location.reload();
        //            },
        //            1);
    });

    function scrollToThis(target, speed) {
        $(window).scrollTo($(target), speed);
    }

    $(window).load(function () {

        (function () {
            setTimeout(displayContent, 500);
        })();

        function displayContent() {
            console.log("window loaded");
            $("#loading").css("display", "none");
            $("#wrapper").css("visibility", "visible");

            //scroll magic
            var controller = new ScrollMagic.Controller();
            // build scene
            var scene = new ScrollMagic.Scene({
                    triggerHook: "onCenter",
                    duration: height / 4
                })
                .setPin("#logo")
                .addTo(controller);
        }
    });

    $(document).ready(function () {

        $(window).scroll(function () {
            // menu icon appear
            var scroll = $(window).scrollTop();
            var ratio = scroll / height;

            if (scroll >= (height - 100)) {
                $("#menu-icon").addClass("appear");
            } else {
                $("#menu-icon").removeClass("appear");
            }
            // down-arrwo disappear
            if (scroll > 50) {
                $("#down-arrow").addClass("hide");
            } else {
                $("#down-arrow").removeClass("hide");
            }

        });

        //smooth scroll
        $("#down-arrow").click(function (e) {
            scrollToThis("#main", 800);
        });

        $(".links").on("click", ".links-item", function (e) {
            scrollToThis("#main", 800);
            $("#navbar").fadeOut(200);
        });

        //close navbar
        $("#wrapper").on("click", "#menu-icon", function (e) {
            $("#navbar").slideToggle(100);
        });

        $("#wrapper").on("click", "#close-icon", function (e) {
            $("#navbar").slideToggle(100);
        });

        //navbar full height
        $("#navbar").css("height", height);

    })
})(jQuery);

// AngularJS App
var app = angular.module("app", ["ngResource", "ngRoute"]);

//routing
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

//posts
app.controller("mainViewController", ["$scope", "$http", "$sce", "$routeParams", function ($scope, $http, $sce, $routeParams) {

    $scope.trustDangerousSnippet = function (snippet) {
        return $sce.trustAsHtml(snippet);
    };

    $http.get('api/get_page_index/').success(function (res) {
        $scope.pages = res.pages;
    });

    $http.get('api/get_posts/').success(function (res) {
        $scope.posts = res.posts;
    });

}]);

//single pages
app.controller("singlePage", ["$scope", "$http", "$sce", "$routeParams", function ($scope, $http, $sce, $routeParams) {

    $scope.trustDangerousSnippet = function (snippet) {
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

//directives
app.directive("myPost", function () {
    return {
        templateUrl: myLocalized.partials + 'post.html',
        replace: false,
        restrict: "AE",
        scope: {
            post: "=",
            trustDangerousSnippet: "&"
        },
        link: function (scope, elem, attrs) {
            var bottomOfElement = $(elem).offset().top + $(elem).height();
            var bottomOfPage = $(window).scrollTop() + $(window).height();
            if ((bottomOfElement-150) < bottomOfPage) {
                $(elem).addClass("animated fadeInUp");
            }
            $(window).scroll(function (e) {
                var bottomOfElement = $(elem).offset().top + $(elem).height();
                var bottomOfPage = $(window).scrollTop() + $(window).height();
                if ((bottomOfElement-150) < bottomOfPage) {
                    $(elem).addClass("animated fadeInUp");
                }
            });
        }
    }
});