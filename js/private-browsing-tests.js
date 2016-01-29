
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
			
			$('#testLocalStorage').html(result);
		},
		
		testAll : function() {
			this.testSessionStorageObject();
			this.testStoreInSessionStorage();
			this.testReadFromSessionStorage();
			this.testLocalStorageObject();
		}
		
};
