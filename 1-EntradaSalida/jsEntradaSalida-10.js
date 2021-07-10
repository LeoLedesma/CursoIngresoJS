/*Nombre: Leonel
Apellido: Ledesma
10 Bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentajedescuento;
	var descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentajedescuento = prompt("Que descuento tiene:");
	porcentajedescuento = parseInt(porcentajedescuento);

	descuento = porcentajedescuento * importe / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;


	//esta incompletos
}
