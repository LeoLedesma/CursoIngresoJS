/*Apellido: Ledesma
Nombre: Leonel
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero=true;
	respuesta=true;
	
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero==true)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=false;

		}
		else
		{
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
			}
		}
		respuesta=confirm("Desea continuar?");
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	
	/*
	
	// declarar variables
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

	*/
}//FIN DE LA FUNCIÓN