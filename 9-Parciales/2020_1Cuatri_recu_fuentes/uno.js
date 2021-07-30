/*Apellido: Ledesma
NOmbre: Leonel
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , listop
el precio (validar entre 100 y 300), listo
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total 
*/

function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var cantidadIngresado;
	var marcaIngresado;
	var fabricanteIngresado;
	var contador;
	var banderaJabones;
	var precioJabonCaro;
	var fabricanteJabonCaro;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorMaximo;
	var contadorMaximo;
	var productoMaximo;

	
	contador=5;
	banderaJabones=true;

	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	banderaMasUnidades=true;


	while(contador>0)
	{
		contador = contador -1;

		productoIngresado=prompt("Por favor, ingrese su producto de prevención de contagio, puede ser barbjio, jabón o alcohol:");
		productoIngresado = productoIngresado.toLowerCase();
		
		while(productoIngresado!="barbijo" && productoIngresado!="jabón" && productoIngresado!="alcohol")
		{
			productoIngresado=prompt("Producto invalido, ingrese nuevamente.");
			productoIngresado=productoIngresado.toLowerCase();
		}

		precioIngresado=prompt("Por favor ingrese el precio del producto:");
		precioIngresado=parseInt(precioIngresado);

		while(precioIngresado<100 || precioIngresado>300 || isNaN(precioIngresado)==true)
		{
			precioIngresado=prompt("Precio invalido, ingrese el precio nuevamente:");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresado=prompt("Ingrese la cantidad de unidades")
		cantidadIngresado=parseInt(cantidadIngresado);

		while(cantidadIngresado<1 || cantidadIngresado>1000 || isNaN(precioIngresado)==true)
		{
			cantidadIngresado=prompt("La cantidad esta fuera de los limites, ingrese nuevamente");
			cantidadIngresado=parseInt(cantidadIngresado);
		}

		marcaIngresado=prompt("Ingrese marca de su producto");
		while(isNaN(marcaIngresado)==false)
		{
			marcaIngresado=prompt("Ingrese una marca sin números");
		}
		
		fabricanteIngresado=prompt("Ingrese el fabricante del producto");

		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Ingrese un fabricante sin números");
		}

		switch(productoIngresado)
		{
			case "jabón":
				
				acumuladorJabon=acumuladorJabon+cantidadIngresado;
				contadorJabon=contadorJabon+1;

				if(banderaJabones==true) //a
					{
						banderaJabones=false
						precioJabonCaro=precioIngresado;
						cantidadJabonCaro=cantidadIngresado;
						fabricanteJabonCaro=fabricanteIngresado;
					}
					else
					{
						if(precioIngresado>precioJabonCaro)
						{
						precioJabonCaro=precioIngresado;
						cantidadJabonCaro=cantidadIngresado;
						fabricanteJabonCaro=fabricanteIngresado;
						}
					}
				
				break;
			case "alcohol":
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresado;
				contadorJabon=contadorJabon+1
				break;
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresado
				contadorBarbijo=contadorBarbijo+1
				break;
						
		}

			
	}

	if(acumuladorJabon>acumuladorBarbijo && acumuladorJabon>acumuladorAlcohol)
	{
		acumuladorMaximo=acumuladorJabon;
		contadorMaximo=contadorJabon;
		productoMaximo="Jabón";
	}
	else
	{
		if(acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>acumuladorAlcohol)
		{
			acumuladorMaximo=acumuladorBarbijo;
			contadorMaximo=contadorBarbijo;	
			productoMaximo="Barbijo";	
		}
		else
		{
			acumuladorMaximo=acumuladorAlcohol;
			contadorMaximo=contadorAlcohol;
			productoMaximo="Alcohol";
		}
	}

promedio=acumuladorMaximo/contadorMaximo;
	

document.write("a) La cantidad del jabón mas caro es: " + cantidadJabonCaro + " y el fabricante es: " + fabricanteJabonCaro + "<br>"+
				"b) El producto mas vendido es: " + productoMaximo + " y el promedio es: " + promedio+ "<br>"+
				"c) En total se compraron: " + acumuladorBarbijo + " barbijos");

}