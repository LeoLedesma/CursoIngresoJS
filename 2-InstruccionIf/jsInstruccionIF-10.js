/* Apellido: Ledesma
Nombre: Leonel

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */


function mostrar()
{
	var numero;

	numero = Math.floor(Math.random() * 11);
	numero = parseInt(numero);
	
	if(numero > 4)
	{
		if(numero == 9 || numero == 10)
		{
		 alert("EXCELENTE");
		}
		else
		{
			alert("APROBÓ")
		}
	}
	else
	{
		alert("Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN