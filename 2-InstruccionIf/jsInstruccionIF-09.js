//Apellido: Ledesma
//Nombre: Leonel
//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive 
function mostrar() 
{
	var numero;
	var random;

	//Math random trae numeros entre 0 y 1
	//Al usar Math.floor + math random + "* n°" trae numeros entre 0 y ese n°,
	//al agregar el + "n°" me da el numero base
	numero = Math.floor((Math.random() * 100) + 1);

	if (numero > 0 && numero <11)
	{
		alert(numero);
	}


	
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN

