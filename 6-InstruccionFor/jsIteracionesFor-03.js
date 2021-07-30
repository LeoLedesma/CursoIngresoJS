/**
 * Enunciado:
al presionar el botón pedir
la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
 */

function mostrar()
{
	var i;
	var repeticiones = prompt("ingrese el número de repeticiones");
	
	for(i=0;i<repeticiones;i++)
	{
		console.log("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN