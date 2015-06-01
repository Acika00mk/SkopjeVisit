angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('CategoryController',function($scope,$stateParams, $http,$rootScope){

    console.log($rootScope.data);

})

.controller('CategoryListController',function($scope,$rootScope){
    var data = JSON.stringify($rootScope.data);
    $scope.categories = JSON.parse(data);
    console.log($scope.categories);

})

.controller('ProfileController',function($scope,$stateParams){
    console.log($stateParams.profileId);
})

