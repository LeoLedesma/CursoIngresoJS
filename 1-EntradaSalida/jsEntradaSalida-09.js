/*Nnombre: Leonel
Apellido: Ledesma
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	var Sueldo;
	var porcentaje;
	var aumento;
	var resultado;

	Sueldo = document.getElementById("txtIdSueldo").value;
	Sueldo = parseInt(Sueldo);

	porcentaje = prompt("Que porcentaje desea resolver?:");
	porcentaje = parseInt(porcentaje);

	aumento = porcentaje * Sueldo / 100;
	resultado = aumento + Sueldo;

	document.getElementById("txtIdResultado").value = resultado;

}
