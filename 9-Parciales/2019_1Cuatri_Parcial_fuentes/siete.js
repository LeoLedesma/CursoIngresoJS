/*Apellido: Ledesma
Nombre: Leonel
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en 
centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”)
de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/


function mostrar()
{
var alturaIngresada;
var sexo;
var contador;
var promedio;
var acumulador;

var alturaMaxima;
var alturaMinima;
var contadorMujeresAltas
var sexoAlturaMinima;

contador = 5;
bandera=true;
acumulador = 0;
contadorMujeresAltas=0

while (contador>0)
{
    contador=contador-1

    alturaIngresada=prompt("Ingrese la altura en centimetros");
    alturaIngresada=parseInt(alturaIngresada);
    while(isNaN(alturaIngresada) ||alturaIngresada<0||alturaIngresada>250) //pido nuevamente la altura si es invalida
    {
        alturaIngresada=prompt("Altura incorrecta, ingrese nuevamente");
        alturaIngresada=parseInt(alturaIngresada);
    }
    acumulador=acumulador+alturaIngresada;
    sexo=prompt("Ingrese el sexo m para masculino, f para femenino");
    sexo= (sexo.toLowerCase());
    while(sexo!="m" && sexo!="f") //pido nuevamente el sexo si es invalido
    {
        sexo=prompt("Sexo incorrecto, ingrese nuevamente: 'm' para masculino y 'f' para femenino");
        sexo=(sexo.toLowerCase());
    }
    
    if(contador==4) //Uso contador como bandera
    {
        alturaMaxima=alturaIngresada;
        alturaMinima=alturaIngresada;
    }
    else
    {
        if(alturaIngresada>alturaMaxima)
        {
            alturaMaxima=alturaIngresada;
        }
        else
        {
            if(alturaIngresada<alturaMinima)
            {
                alturaMinima=alturaIngresada;
                sexoAlturaMinima=sexo;

                switch(sexoAlturaMinima)
                {
                    case "m":
                        sexoAlturaMinima="masculino";
                        break;
                    case "f":
                        sexoAlturaMinima="femenino";
                        break;
                }
            }
        }
    }
    
    if(sexo="f" && alturaIngresada>190) //mujeres mas altas que 190
    {
        contadorMujeresAltas = contadorMujeresAltas + 1
    }

}


promedio=acumulador/5;

alert("El promedio es: " + promedio + 
        ", la altura mas baja es " + alturaMinima + 
        " y su sexo es "+ sexoAlturaMinima +
        ". La cantidad de mujeres que superan los 190cm es: " + contadorMujeresAltas);

}
