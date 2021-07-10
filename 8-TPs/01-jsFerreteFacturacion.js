/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var sumaproductos;

    primerprecio = document.getElementById("txtIdPrecioUno").value;
    primerprecio = parseInt(primerprecio);

    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    segundoprecio = parseInt(segundoprecio);
    
    tercerprecio = document.getElementById("txtIdPrecioTres").value;
    tercerprecio = parseInt(tercerprecio);


    sumaproductos = primerprecio+segundoprecio+tercerprecio

    alert("La suma de los precios de los productos es: " +sumaproductos)
    
	
}
function Promedio () 
{

    var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var promedioproductos;

    primerprecio = document.getElementById("txtIdPrecioUno").value;
    primerprecio = parseInt(primerprecio);

    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    segundoprecio = parseInt(segundoprecio);
    
    tercerprecio = document.getElementById("txtIdPrecioTres").value;
    tercerprecio = parseInt(tercerprecio);

    promedioproductos = (primerprecio+segundoprecio+tercerprecio) / 3;

    alert("El precio promedio de los tres productos es: " +promedioproductos);

	
}
function PrecioFinal () 
{

    var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var iva;
    var sumatoria;
    var preciofinal;

    primerprecio = document.getElementById("txtIdPrecioUno").value;
    primerprecio = parseInt(primerprecio);

    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    segundoprecio = parseInt(segundoprecio);
    
    tercerprecio = document.getElementById("txtIdPrecioTres").value;
    tercerprecio = parseInt(tercerprecio);

    iva = 21;
    sumatoria = primerprecio+segundoprecio+tercerprecio;

    preciofinal = (iva * sumatoria / 100) + sumatoria;

    alert("El precio final con IVA incluido es: " +preciofinal);

	
}