/*Apellido: Ledesma
Nombre: Leonel
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadDeCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var esPar;
	
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadDeCeros=0;
	cantidadPositivos=0;
	cantidadNumerosPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferenciaPositivosNegativos=0;
	esPar=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero por favor");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("desea continuar?");

		if(numeroIngresado>0)
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			cantidadPositivos= cantidadPositivos+1;
			esPar=(numeroIngresado % 2);
			if(esPar==0)
			{
				cantidadNumerosPares=cantidadNumerosPares+1;
			}
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				cantidadNegativos=cantidadNegativos+1
				esPar=(numeroIngresado%2);
				if(esPar==0)
				{
					cantidadNumerosPares=cantidadNumerosPares+1;
				}
				
			}
			else
			{
				cantidadDeCeros=cantidadDeCeros+1
			}
		}

		
	}//fin del while

promedioPositivos=sumaPositivos/cantidadPositivos;
promedioNegativos=sumaNegativos/cantidadNegativos;
diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;

/*
console.log(sumaNegativos);
console.log(sumaPositivos);
console.log(cantidadPositivos);
console.log(cantidadNegativos);
console.log(cantidadNumerosPares);
console.log(promedioPositivos);
console.log(promedioNegativos);
console.log(diferenciaPositivosNegativos);
*/

	document.write("1.La suma de negativos es : "+sumaNegativos+
					"<br>2.Suma de los positivos: " +sumaPositivos+
					"<br>3.Cantidad de positivos: " +cantidadPositivos+
					"<br>4.Cantidad de negativos: " +cantidadNegativos+
					"<br>5.Cantidad de ceros: " +cantidadDeCeros+
					"<br>6.Cantidad de números pares: "+cantidadNumerosPares+
					"<br>7.Promedio de positivos: "+promedioPositivos+
					"<br>8.Promedios de negativos: "+promedioNegativos);
}//FIN DE LA FUNCIÓN