( function () {
  'use strict';
  angular.module('LunchChecker',[])
.controller('LunchCheckerController',LunchCheckerController)
.filter('test',TestFilterFactory)
.filter('test2',HtmlFilterFactory);
LunchCheckerController.$inject =['$scope','testFilter'];
function LunchCheckerController($scope,testFilter)
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
$scope.orignal= function () {
   var msg= "we are going to eat pizza";
 return msg;};
$scope.custom= function() {
  var msg = "we are going to eat pizza";
msg =testFilter(msg);
return msg;
};
}
function TestFilterFactory(){
  return function (input) {
    input = input || "";
input = input.replace("pizza", "pasta");
    return input;
    };
}
function HtmlFilterFactory(){
  return function (input,arg1,arg2) {
    input = input || "";
input = input.replace(arg1, arg2);
    return input;
    };
}
})();
