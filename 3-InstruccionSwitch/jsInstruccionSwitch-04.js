/*Apellido: Ledesma
Nombre: Leonel

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje= "El mes tiene 28 días";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje= "El mes tiene 30 días";
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "El mes tiene 31 días";
		break;
	}
	
	alert(mensaje)



}//FIN DE LA FUNCIÓN