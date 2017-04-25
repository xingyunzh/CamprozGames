/**
 * Created by admin on 06/04/17.
 */
app.controller("meetingController", ["$scope", "$rootScope", "$stateParams", function($scope, $rootScope, $stateParams){
    $scope.id = $stateParams.meetingId;
}]);