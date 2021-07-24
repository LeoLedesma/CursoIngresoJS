/*Apellido: Ledesma
Nombre: Leonel
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta='si';
	numeroIngresado=parseInt(numeroIngresado);
	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;
	
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero por favor")
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("desea continuar?");
		
		
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			else
			{
				numeroMaximo=numeroIngresado;
				numeroMinimo=numeroIngresado;
			}
		}

	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN