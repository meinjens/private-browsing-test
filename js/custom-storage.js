(function(window) {
	
	'use strict';
	
	console.log(window);
	
	var customStorage = window.customStorage || {};
	
	customStorage = function() {
		return {
			set: function(key, value) {
	            storage.setItem(key, value);
	        },
	        get: function(key, defaultValue) {
	            return storage.getItem(key) || defaultValue;
	        },
	        setObject: function(key, value) {
	            storage.setItem(key, JSON.stringify(value));
	        },
	        getObject: function(key) {
	            return JSON.parse(storage.getItem(key) || '{}');
	        },
	        remove: function(key){
	            storage.removeItem(key);
	        },
	        clear: function() {
	            storage.clear();
	        },
	        key: function(index){
	            storage.key(index);
	        }
		};	
	};
	
	console.log(window.customStorage);
	
}(window));