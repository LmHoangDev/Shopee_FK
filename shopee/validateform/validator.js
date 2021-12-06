// doi tuong validator
	function Validator(options) {
//Ham thuc hien validate;
		function validate (inputElement,rule) {
				var errorMessage = rule.test(inputElement.value);
				var errorElement = inputElement.parentElement.querySelector('.form-message');
						if(errorMessage){
							errorElement.innerText = errorMessage;
							inputElement.parentElement.classList.add('invalid');

						}
						else{
							errorElement.innerText = '';
							inputElement.parentElement.classList.remove('invalid');

						}
		}
		//Lay Element cua form
		var formElement = document.querySelector(options.form);
		if(formElement) {
			options.rules.forEach(function(rule){
				var inputElement = formElement.querySelector(rule.selector);
				
				if(inputElement) {
					inputElement.onblur = function (){
						validate(inputElement,rule);
					}
				}
			});
		}
}
//dinh nghia ca rules
//1. khi co loi -> tra ra message loi
//
Validator.isRequired = function(selector) {
	return {
		selector : selector,
		test: function (value) {
 			return value.trim() ? undefined : 'Vui Long nhap lai';
		}
	}
}
Validator.isEmail = function(selector) {
	return {
		selector : selector,
		test: function () {
			
		}
	}
}