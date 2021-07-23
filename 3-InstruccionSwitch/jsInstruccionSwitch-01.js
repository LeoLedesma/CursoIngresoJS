/*Apellido: Ledesma
NOmbre: Leonel

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." 
*/


function mostrar()
{
	var mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;
	

	switch(mesDelAño) //sin condicion
	{
		case "Enero": //Compara el valor estricto, no puede haber operadores logicos.
			mensaje = "que comiences bien el año!!!.";
		break;
		case "Marzo":
			mensaje = "a clases!!!.";
		break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
		break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
		break;
		default:
			mensaje = "No es ningun mes seleccionado"
		break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN
















	/*
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;
	mensaje = "No es ningun mes seleccionado"

	if(mesDelAño== "Enero")
	{
		mensaje = "que comiences bien el año!!!.";
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			mensaje = "a clases!!!";
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				mensaje = "se vienen las vacaciones!!!.";
			}
			else
			{
				if(mesDelAño=="Diciembre")
				{
					mensaje = "Felices fiestas!!!.";
				}				
			}
		}
	}

	alert(mensaje);

*/

