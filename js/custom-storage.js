(function(window){
	
	'use strict';
	
	function FakeStorage() {};
	
	FakeStorage.prototype.setItem = function (key, value) {
        this[key] = value;
    };
    
    FakeStorage.prototype.getItem = function (key) {
        return typeof this[key] == 'undefined' ? null : this[key];
    };
    
    FakeStorage.prototype.removeItem = function (key) {
        this[key] = undefined;
    };
    
    FakeStorage.prototype.clear = function(){
        for (var key in this) {
            if( this.hasOwnProperty(key) )
            {
                this.removeItem(key);
            }
        }
    };
    
    FakeStorage.prototype.key = function(index){
        return Object.keys(this)[index];
    };
	
	
	var customStorageFactory = function() {
		
		var storage = window.sessionStorage || new FakeStorage();
		
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
	
	window.customStorage = new customStorageFactory();
		
}(window));