/**
 * Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.
 */
function mostrar()
{
var diaIngresado;
var mensaje;

diaIngresado=prompt("Ingrese un día de la semana:");
diaIngresado= diaIngresado.toLowerCase();

switch(diaIngresado)
{
    case "sabado":
    case "domingo":
        mensaje=" buen finde";
        break;
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        mensaje = " a trabajar";
        break;
    default:
        mensaje = "No es un día valido."
        break;
}

alert(mensaje);




}

