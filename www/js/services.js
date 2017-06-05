angular.module('app.services', [])


.factory("Items" , function($firebaseArray){
  var itemsRef = new Firebase("https://tcc-sw-luz.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})

//.factory('BlankFactory', [function(){

//}])

.service('BlankService', [function(){

}]);
