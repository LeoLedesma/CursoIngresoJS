/*Apellido: Ledesma
Nombre: Leonel
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 
 */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace FRIO";
		break;
		default:
			mensaje = "Hace CALOR";
		break;
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN