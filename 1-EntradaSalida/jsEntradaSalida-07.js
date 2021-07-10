/*Apellido: Ledesma
Nombre: Leonel
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
	var numeroUno;
	var numeroDos;

	var resultado;
	var operador;

	
	operador = "La suma es: ";


	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno+numeroDos;

	alert(operador+resultado);


}

function restar() {
	var numeroUno;
	var numeroDos;

	var resultado;
	var operador;

	
	operador = "La resta es: ";



	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno-numeroDos);

	alert(operador+resultado);
}

function multiplicar() {
	var numeroUno;
	var numeroDos;

	var resultado;
	var operador;

	
	operador = "La multiplicación es: ";



	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno*numeroDos);

	alert(operador+resultado);
}

function dividir() {
	var numeroUno;
	var numeroDos;

	var resultado;
	var operador;

	
	operador = "La división es: ";

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);
	resultado = (numeroUno/numeroDos);

	alert(operador+resultado);
}




