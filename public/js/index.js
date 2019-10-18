var app = angular.module('notes', ['ngRoute','ngTouch','ngCookies','angular.filter']);
app.controller('ctrl', function($scope, $location,request,$window,fetch,$q, $sce){

$scope.url_;

$scope.$on('$routeChangeStart', function(event,next,current) { 
    var data = next.$$route.originalPath;
    $scope.url_ = data;
    console.log($scope.url_);
})

$scope.get_tp_easy = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_easy',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_mysuccess = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_mysuccess',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_coaching = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_coaching',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_visionary = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_visionary',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_onlinesuccess = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_onlinesuccess',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_supportservice = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_supportservice',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_driveforsuccess = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_driveforsuccess',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_topcoach = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_topcoach',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_tp_upservice = function(){
    $scope.show_reviews = "Trust Pilot Reviews";
    $scope.fetch = true;
    var query = {
        url : '/get_tp_upservice',
    }
    request.query(query).then(function(res){
        $scope.reviews_tp = res.data;
        $scope.fetch = false;
    })
}

$scope.get_fb = function(){
    $scope.show_revies = "Facebook Reviews"
}

$scope.get_gr = function(){
    $scope.show_revies = "Google Reviews"
}
});
