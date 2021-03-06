/**
 * Created by admin on 06/04/17.
 */
/**
 * Created by brillwill on 16/9/14.
 */
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");

    $stateProvider.state("menu", {
        url: "/",
        templateUrl: "menu/menuView.html",
        controller: "menuController"
    })
        .state("meeting", {
        url: "/meeting/:meetingId",
        templateUrl: "meeting/meetingView.html",
        controller: "meetingController"
    })
}]).run(["$rootScope", function($rootScope){
    $rootScope.navBar = {
        title:"CamproZ",
        left:null,
        right:null
    };
}]);
