(function ()
{ 'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.items_buy=ShoppingListCheckOffService.getitem_buy();


buy.CheckOut=function(index){
  ShoppingListCheckOffService.checkOut(index);
  ShoppingListCheckOffService.remove(index);
};
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items_bought= ShoppingListCheckOffService.getitem_bought();

}
function ShoppingListCheckOffService(){
  var service= this;
  var buy_items =[
    {name: "Milk", quantity:"20"},
     {name:"Cookies",quantity:"10"},
   {name:"Waffers",quantity:"3"  },
 {name:"Choclates", quantity:"29"},
{name:"Donuts",quantity:"23"}
];
  var bought_items =[];

service.checkOut= function(index){
  var item={
    name:buy_items[index].name,
    quantity:buy_items[index].quantity
  };
  bought_items.push(item);
};
service.remove=function(index){
  buy_items.splice(index,1);
};
service.getitem_buy= function(){
  return buy_items;
};
service.getitem_bought= function(){
  return bought_items;
};
}

})();
