(function(window) {

	'use strict';
	
	var sessionStorageTest = {
			
			testSessionStorageObject : function() {
				var result = '';
				
				if (sessionStorage !== undefined && sessionStorage !== null) {
					result = 'SessionStorage object exists!';
				} else {
					result = 'SessionStorage object does not exist!';
				}
				
				$('#testSessionStorageObject').html(result);
			},
			
			testStoreInSessionStorage : function() {
				var result = '';
				
				if (sessionStorage !== undefined && sessionStorage !== null) {
					try {
						sessionStorage.setItem('myKey', 'myValue');
						result = 'Successfully stored';
					} catch (exception) {
						result = 'Unable to store in sessionStorage. See console for exception details!';
						console.log(exception);
					}
				}
				
				$('#testStoreInSessionStorage').html(result);
			},
			
			testReadFromSessionStorage : function() {
				var result = '';
				
				if (sessionStorage !== undefined && sessionStorage !== null) {
					try {
						sessionStorage.setItem('myKey', 'myValue');
						
						var data = sessionStorage.getItem('myKey');
						
						if (data === 'myValue') {
							result = 'Successfully read from sessionStorage';
						} else {
							result = 'Unable to read from sessionStorage';
						}
						
					} catch (exception) {
						result = 'Error reading from sessionStorage. See console for exception details';
						console.log(exception)
					}
				}
				
				$('#testReadFromSessionStorage').html(result);
			},
			
			testLocalStorageObject : function() {
				var result = '';
				
				if (localStorage !== undefined && localStorage !== null) {
					result = 'localStorage object exists!';
				} else {
					result = 'localStorage object does not exist!';
				}
				
				$('#testLocalStorageObject').html(result);
			},
		
			testStoreInLocalStorage : function() {
				var result = '';
				
				if (localStorage !== undefined && localStorage !== null) {
					try {
						localStorage.setItem('myKey', 'myValue');
						result = 'Successfully stored';
					} catch (exception) {
						result = 'Unable to store in localStorage. See console for exception details!';
						console.log(exception);
					}
				}
				
				$('#testStoreInLocalStorage').html(result);
			},
			
			testReadFromLocalStorage : function() {
				var result = '';
				
				if (localStorage !== undefined && localStorage !== null) {
					try {
						localStorage.setItem('myKey', 'myValue');
						
						var data = localStorage.getItem('myKey');
						
						if (data === 'myValue') {
							result = 'Successfully read from localStorage';
						} else {
							result = 'Unable to read from localStorage';
						}
						
					} catch (exception) {
						result = 'Error reading from localStorage. See console for exception details';
						console.log(exception)
					}
				}
				
				$('#testReadFromLocalStorage').html(result);
			},
			
			testCustomStorageObject : function() {
				var result = '';
				
				if (window.customStorage !== undefined && window.customStorage !== null) {
					result = 'customStorage object exists!';
				} else {
					result = 'customStorage object does not exist!';
				}
				
				$('#testCustomStorageObject').html(result);
			},
		
			testStoreInCustomStorage : function() {
				var result = '';
				
				if (window.customStorage !== undefined && window.customStorage !== null) {
					try {
						window.customStorage.set('myKey', 'myValue');
						result = 'Successfully stored';
					} catch (exception) {
						result = 'Unable to store in localStorage. See console for exception details!';
						console.log(exception);
					}
				}
				
				$('#testStoreInCustomStorage').html(result);
			},
			
			testReadFromCustomStorage : function() {
				var result = '';
				
				if (window.customStorage !== undefined && window.customStorage !== null) {
					try {
						window.customStorage.set('myKey', 'myValue');
						
						var data = window.customStorage.get('myKey');
						
						if (data === 'myValue') {
							result = 'Successfully read from customStorage';
						} else {
							result = 'Unable to read from customStorage';
						}
						
					} catch (exception) {
						result = 'Error reading from customStorage. See console for exception details';
						console.log(exception)
					}
				}
				
				$('#testReadFromCustomStorage').html(result);
			},		
			
			
			testAll : function() {
				this.testSessionStorageObject();
				this.testStoreInSessionStorage();
				this.testReadFromSessionStorage();
				
				this.testLocalStorageObject();
				this.testStoreInLocalStorage();
				this.testReadFromLocalStorage();
				
				this.testCustomStorageObject();
				this.testStoreInCustomStorage();
				this.testReadFromCustomStorage();
			}
			
	};
	
	sessionStorageTest.testAll();
	
})(window);

