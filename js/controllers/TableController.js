(function() {
    'use strict';

    angular
        .module('taco')
        .controller('TableController', function(API) {

        	const vm = this;

        	vm.data = API.getData();
        	vm.tax = 1.0575;

			vm.changeQuantity = function(item,add){
				if(add) {
					item.quantity++;
          API.update(item,'add');
				} else {
					item.quantity--;
          API.update(item,'subtract');
				}
			}

			vm.submitForm = function(valid){
				if(valid){
          vm.item.id = new Date().valueOf();
					const newItem = Object.assign({},vm.item);
          vm.data = API.newObject(newItem);
          API.saveData(newItem);
					vm.item = {};
				} else {
					alert("INVALID FORM");
				}
			}
        });

})();
