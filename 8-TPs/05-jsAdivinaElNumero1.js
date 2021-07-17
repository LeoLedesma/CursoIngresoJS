/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X contadorIntentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorcontadorIntentos;

function comenzar()
{
//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor((Math.random()*101)+1);
  
    document.getElementById("txtIdIntentos").value = 0

}

function verificar()
{
var numeroIntroducido;
var contadorIntentos;
var falta;
var sePaso;


numeroIntroducido = document.getElementById("txtIdNumero").value;
numeroIntroducido = parseInt(numeroIntroducido);

contadorIntentos = document.getElementById("txtIdIntentos").value;
contadorIntentos = parseInt(contadorIntentos);

falta = numeroSecreto - numeroIntroducido;
sePaso = numeroIntroducido - numeroSecreto;
sePaso = parseInt(sePaso);

if (numeroIntroducido != numeroSecreto) // comparo si el numero es diferente
{
  if(numeroIntroducido<numeroSecreto)
  {
    alert("Falta " + falta + " para llegar");
    contadorIntentos = contadorIntentos + 1;
  }
  else
  {
    contadorIntentos = contadorIntentos + 1;
    alert ("Se paso " + sePaso);
  }
  
}
else
{
  if(contadorIntentos==1)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intento!!");
  }
  else
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos!!");
  } 
  }


document.getElementById("txtIdIntentos").value = contadorIntentos;

}