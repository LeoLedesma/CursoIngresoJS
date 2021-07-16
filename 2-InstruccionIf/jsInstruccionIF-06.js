/*Apellido: Ledesma
Nombre: Leonel

Al ingresar una edad debemos informar
 si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
/*
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12)
	{
		if(edad > 17)
		{
			alert("La persona es mayor de edad");
		}
		else
		{
			alert("La persona es adolescente");
		}
	}
	else
	{
		alert("La persona es un niño");
	}
	
}//FIN DE LA FUNCIÓN*/


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/* a) mayor de edad
	b) es un niño
	*/

	if(edad>17)//a
	{
		alert("mayor");
	}
	else
	{
		if(edad<12)//b
		{
			alert("niño");
		}
		else//c
		{
			alert("adolescente");
		}
	}
}