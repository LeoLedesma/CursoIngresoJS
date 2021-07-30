/*

Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. 
*/



function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresado;
	var edadIngresado;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresado;
	var respuesta;
	var banderaTemperatura;
	var temperaturaMaxima;
	var nacionalidadTemperaturaMaxima;
	var contadorMayoresEdad;
	var contadorMujeresSolas;
	var contadorMujeresCasadas;
	var acumuladorEdadMujeresCasadas;
	var contadorAdultosTemperatura;
	var promedioMujeresCasadas;

	respuesta=true;
	banderaTemperatura=true;
	contadorMayoresEdad=0;
	contadorMujeresSolas=0;
	contadorMujeresCasadas=0;
	acumuladorEdadMujeresCasadas=0;
	contadorAdultosTemperatura=0;
	

	while(respuesta==true)
	{
		nombreIngresado=prompt("Por favor ingrese el nombre del pasajero:")
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Por favor ingrese un nombre valido sin números");
		}

		nacionalidadIngresado=prompt("Por favor ingrese su nacionalidad");
		while(isNaN(nacionalidadIngresado)==false)
		{
			nacionalidadIngresado=prompt("Por favor ingrese una nacionalidad valida");
		}

		edadIngresado=prompt("Por favor ingrese su edad");
		edadIngresado=parseInt(edadIngresado);

		while(isNaN(edadIngresado)==true)
		{
			edadIngresado=prompt("Usted no escribio un numerp, por favor ingrese nuevamente su edad en números");
			edadIngresado=parseInt(edadIngresado);
		}

		sexoIngresado=prompt("Por favor ingrese el sexo 'f' o 'm': ");
		sexoIngresado=sexoIngresado.toLowerCase();
		
		while(isNaN(sexoIngresado)==false || (sexoIngresado!="f" && sexoIngresado!="m"))
		{
			sexoIngresado=prompt("Sexo invalido, por favor ingrese nuevamente el sexo");
			sexoIngresado=sexoIngresado.toLowerCase();			
		}

		estadoCivilIngresado=prompt("Por favor ingrese su estado civil, las opciones son: soltero, casado o viudo")
		estadoCivilIngresado=estadoCivilIngresado.toLowerCase();

		while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Estado civil invalido, complete con soltero, casado o viudo");
			estadoCivilIngresado=estadoCivilIngresado.toLowerCase();
		}

		temperaturaIngresado=prompt("Ingrese la temperatura corporal");
		temperaturaIngresado=parseInt(temperaturaIngresado);

		respuesta=confirm("Quiere agregar otro pasajero?");

		if(banderaTemperatura==true)
		{
			banderaTemperatura=false;
			temperaturaMaxima=temperaturaIngresado;
			nacionalidadTemperaturaMaxima=nacionalidadIngresado;
		}
		else
		{
			if(temperaturaIngresado>temperaturaMaxima)
			{
				temperaturaMaxima=temperaturaIngresado;
				nacionalidadTemperaturaMaxima=nacionalidadIngresado;
			}
		}

		if(edadIngresado>17 && estadoCivilIngresado=="soltero")
		{
			contadorMayoresEdad++;
			console.log("entro")
		}
		


		switch(sexoIngresado)
		{
			case "f":
				switch(estadoCivilIngresado)
				{
					case "soltero":
					case "viudo":
						contadorMujeresSolas++;
						break;
					case "casado":
						contadorMujeresCasadas++;
						acumuladorEdadMujeresCasadas=acumuladorEdadMujeresCasadas+edadIngresado;
						break;

				}
				break;
		}

		if(edadIngresado>60 && temperaturaIngresado>38)
		{
			contadorAdultosTemperatura++;
		}





	}

promedioMujeresCasadas = acumuladorEdadMujeresCasadas/contadorMujeresCasadas;

document.write("a) La nacionalidad de la persona con mas temperatura es: " + nacionalidadTemperaturaMaxima+ "<br>"+
"b) La cantidad de mayores de edad y solteros es: " + contadorMayoresEdad + "<br>" +
"c) La cantidad de mujeres solteras o viudas es: " + contadorMujeresSolas + "<br>"+
"d) La cantidad de personas de la tercera edad (mas de 60 años) que tienen mas de 38 de temperatura es:" + contadorAdultosTemperatura+ "<br>"+
"e) El promedio de edad entre mujeres casadas es: " + promedioMujeresCasadas);


/*a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. 
*/



}
