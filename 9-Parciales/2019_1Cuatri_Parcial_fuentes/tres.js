//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. 

function mostrar()
{
var precio;
var porcentaje;
var precioFinal;

precio = prompt("Inserte precio");
precio = parseInt(precio);

porcentaje = prompt("¿Qué descuento tiene?");
porcentaje = parseInt(porcentaje);

precioFinal = precio - (precio * porcentaje/100);

document.getElementById("elPrecioFinal").value = precioFinal;


}
