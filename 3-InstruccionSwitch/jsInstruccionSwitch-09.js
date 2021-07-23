/* Apellido: Ledesma
Nombre: Leonel
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino;
	var costoBase;
	var descuento;
	var precioFinal



	destino = document.getElementById("txtIdDestino").value;
	costoBase = 15000;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					descuento = -20;
				break;
				case "Cordoba":
					descuento = 10;
				break;
				case "Mar del plata":
					descuento = 20;
				break;
				default:
					descuento = 0;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 20;
				break;
				case "Cataratas":
				case "Cordoba":
					descuento = -10;
				break;
				case "Mar del plata":
					descuento = -20;
				break;
				default:
					descuento = 0;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuento = -10;
				break;
				default:
					descuento = 0;
				break;

			}
	}
	

precioFinal = costoBase - (costoBase * descuento/100);
	alert(precioFinal);

}//FIN DE LA FUNCIÓN