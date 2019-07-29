( function () {
  'use strict';
  angular.module('LunchChecker',[])
.controller('LunchCheckerController',LunchCheckerController);
LunchCheckerController.$inject =['$scope','$filter'];
function LunchCheckerController($scope,$filter)
{$scope.dishes= "";
$scope.msg ="";
$scope.check= function(){
  var no_of_dishes = $scope.dishes.split(',');
  if(no_of_dishes==0)
{  $scope.msg="Please enter data first";}
  else if (no_of_dishes.length <= 3 )
  {  $scope.msg="Enjoy!";

}
    else{
    $scope.msg="Too much!";
  }
};
}
})();
