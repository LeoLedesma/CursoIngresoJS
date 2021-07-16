/*Apellido: Ledesma
Nombre: Leonel
Al ingresar una edad debemos informar si la persona es mayor de 
edad, sino informar que es un menor de edad. */

function mostrar()
{
	var edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{	
		alert("La persona es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN