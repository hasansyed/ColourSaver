
    var app = angular.module('CMRApp',['firebase']);


app.controller('ColorController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    $scope.title = 'ColorMeRed!';
        
    // add reference to firebase collection
    var ref = firebase.database().ref();

    // if $firebaseArray(ref) returns empty, just use a new array instead
    $scope.Colors = $firebaseArray(ref) || [];

    // clear the default
    $scope.color = {};

    // main adding method which will check if $scope.newColor exists and add to firebase.
    // it should also clean out the $scope.newColor form
    $scope.addColor = function(color){
      if (color.code){
          
        if (color.code[0] != '#') {
            color.code = '#' + color.code;
        }
          
        // firebase method to add data
        $scope.Colors.$add({
          addedOn: $.now(),
          code: color.code
        });

        $scope.color = {};
      }
    };

    $scope.deleteColor = function(color){
        $scope.Colors.$remove(color);
    }
    
    $scope.saveColor = function(){
        $scope.myColor.push({tl:$scope.Colors}); 
    };
    
}]);

