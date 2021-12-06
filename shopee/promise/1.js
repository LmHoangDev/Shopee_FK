


var promise = new Promise(
	//executor
	function(resolve, reject){
			// Logic 
			// Thanh cong : resolve();
			// //That Bai reject();
			resolve();
	}
	);

promise
		.then(function(){
			console.log('Succecssully!');
		})
		.catch(function(){
			console.log('Failure!');
		})
		.finally(function(){
			console.log('Done!');
		})