/*Apellido: Ledesma
Nombre: Leonel

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    
    var perimetro;
    var cantidad;

    largo = document.getElementById("txtIdLargo").value; 
    largo = parseInt(largo);

    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = largo+ancho*2;
    cantidad = perimetro * 3;

    alert("La cantidad de alambre necesario es: " + cantidad + "mts");

}
function Circulo () 
{

    var radio;
    var perimetro;
    var cantidadcirculo;
    
    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);
    
    
    perimetro = 2 * Math.PI * radio;
    cantidadcirculo = perimetro * 3;

    alert("Se necesitan: " + cantidadcirculo + "mts de alambre con un radio de: " + radio);
	
}
function Materiales () 
{

    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
    //debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

    var largo;
    var ancho;
    var area;
    var bolsascemento;
    var bolsascal;
 

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);

    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    area = ancho*largo; //mts2

    bolsascemento = area*2;
    bolsascal = area*3;

    alert("Se necesitan " + bolsascemento + " bolsas de cemento y " + bolsascal + " bolsas de cal para hacer el contrapiso.");

 
}