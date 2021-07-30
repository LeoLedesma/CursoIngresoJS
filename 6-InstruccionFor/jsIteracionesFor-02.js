/**Apellido: Ledesma
 * Nombre: Leonel
 * al presionar
 *  el botón mostrar 10 repeticiones con números , desde el 10 al 1.
 */

function mostrar()
{
	var i;
	var numero;

	for(i=0;i<10;i++)
	{
	numero= Math.floor(Math.random()*10+1);
	document.write(numero+" ");
	}
}