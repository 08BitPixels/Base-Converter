function baseToBase(inputInteger, inputBase, outputBase) {

	let inputIntegerField = document.getElementById('inputIntegerField');
	let inputBaseField = document.getElementById('inputBaseField');
	let outputBaseField = document.getElementById('outputBaseField');
	
	if (inputInteger == false) {inputIntegerField.placeholder = 'REQUIRED'}
	if (inputBase == false) {inputBaseField.placeholder = 'REQUIRED'}
	if (outputBase == false) {outputBaseField.placeholder = 'REQUIRED'}
	
	if (inputInteger && inputBase && outputBase) {

		inputIntegerField.placeholder = 'Input';
		inputBaseField.placeholder = 'Base';
		outputBaseField.placeholder = 'Base';
		
		inputInteger = parseInt(inputInteger, inputBase);
		outputBase = parseInt(outputBase);
		let output = inputInteger.toString(outputBase);
	
		document.getElementById('outputField').innerHTML = output;
		
	}

}

function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerHTML);
}