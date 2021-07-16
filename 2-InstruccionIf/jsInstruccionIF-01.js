function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad); //lo usamos para evitar el ===

	//la condicion: edad sea igual a 15
	if(edad == 15) 
	{
		//se va a mostrar solo cuando la condicion se cumple
		alert("Niña bonita");
	}
	
	//No es necesario hacer parseInt porque no es fuertemente tipado: Para eso se utiliza el ===
	//Solo en Js se usa el triple igual
	alert(edad)

}//FIN DE LA FUNCIÓN