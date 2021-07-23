/** Apellido: Ledesma
 * Nombre: Leonel
 
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
 
 */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

switch(destinoIngresado)
{
	case "Bariloche":
		mensaje = " se encuentra en el Oeste";
	break;
	case "Cataratas":
		mensaje = " se encuentra en el Norte";
	break;
	case "Mar del plata":
		mensaje = " se encuentra en el Este";
	break;
	case "Ushuaia":
		mensaje = " se encuentra en el Sur";
	break;
}




	alert(destinoIngresado + mensaje);



}//FIN DE LA FUNCIÓN