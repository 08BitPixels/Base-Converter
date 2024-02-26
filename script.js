function base2base(inputIntegerString, inputIntegerBaseString, outputBaseString) {

	if (inputIntegerString == false) {document.getElementById('inputInteger').placeholder = 'REQUIRED'}
	if (inputIntegerBaseString == false) {document.getElementById('inputIntegerBase').placeholder = 'REQUIRED'}
	if (outputBaseString == false) {document.getElementById('outputIntegerBase').placeholder = 'REQUIRED'}
	if (inputIntegerString && inputIntegerBaseString && outputBaseString) {

		let input = parseInt(inputIntegerString, inputIntegerBaseString);
		let outputBase = parseInt(outputBaseString);
		let output = input.toString(outputBase);
	
		document.getElementById('resultField1').innerHTML = output;
		
	}

}