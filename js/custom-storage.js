(function(window){
	
	'use strict';
	
	window.customStorage = {};
	
	
	
	console.log(window.customStorage);
	
	
}());




var StorageFactory = function() {
	
	var storage = new CustomStorage();
	
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
	}
	
}