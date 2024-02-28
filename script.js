function baseToBase(input, inputBase, outputBase) {

	if (input == false) {document.getElementById('inputInteger').placeholder = 'REQUIRED'}
	if (inputBase == false) {document.getElementById('inputIntegerBase').placeholder = 'REQUIRED'}
	if (outputBase == false) {document.getElementById('outputIntegerBase').placeholder = 'REQUIRED'}
	if (input && inputBase && outputBase) {

		document.getElementById('inputInteger').placeholder = 'Input';
		document.getElementById('inputIntegerBase').placeholder = 'Input Base';
		document.getElementById('outputIntegerBase').placeholder = 'To Base';
		
		input = parseInt(input, inputBase);
		outputBase = parseInt(outputBase);
		let output = input.toString(outputBase);
	
		document.getElementById('resultField1').innerHTML = output;
		
	}

}

function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerHTML);
}