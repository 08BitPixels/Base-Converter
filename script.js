function base2base(inputIntegerString, inputBaseString, outputBaseString) {

	let input = parseInt(inputIntegerString, inputBaseString);
	let outputBase = parseInt(outputBaseString);
	let output = input.toString(outputBase);

	document.getElementById('resultField1').innerHTML = output;

}