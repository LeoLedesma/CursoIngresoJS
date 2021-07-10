/*Nombre: Leonel
Apellido: Ledesma
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	var numeroUno;
	var numeroDos;

	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos)
		
	resultado = numeroUno+numeroDos;


	alert("la suma es: " + resultado);

/*
function sumar()
{


	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=6;
	segundoNumero=66;
	suma=primerNumero+segundoNumero
	
	alert(suma)
*/


}

