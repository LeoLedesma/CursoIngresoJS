/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Por favor ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("¿Quiere continuar?");
		
		acumulador = acumulador+numeroIngresado;
		contador = contador +1;
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN