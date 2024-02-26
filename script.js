function baseToBase(inputIntegerString, inputIntegerBaseString, outputBaseString) {

	if (inputIntegerString == false) {document.getElementById('inputInteger').placeholder = 'REQUIRED'}
	if (inputIntegerBaseString == false) {document.getElementById('inputIntegerBase').placeholder = 'REQUIRED'}
	if (outputBaseString == false) {document.getElementById('outputIntegerBase').placeholder = 'REQUIRED'}
	if (inputIntegerString && inputIntegerBaseString && outputBaseString) {

		document.getElementById('inputInteger').placeholder = 'Integer';
		document.getElementById('inputIntegerBase').placeholder = 'In Base';
		document.getElementById('outputIntegerBase').placeholder = 'To Base';
		
		let input = parseInt(inputIntegerString, inputIntegerBaseString);
		let outputBase = parseInt(outputBaseString);
		let output = input.toString(outputBase);
	
		document.getElementById('resultField1').innerHTML = output;
		
	}

}

function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerHTML);
}