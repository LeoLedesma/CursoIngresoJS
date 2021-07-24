function mostrar()
{
var horaIngresada;
var mensajeEsDe;
var mensajeA

horaIngresada = document.getElementById("laHora").value;
horaIngresada = parseInt(horaIngresada);
mensajeA = "";

switch(horaIngresada)
{
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        mensajeEsDe = "Es de mañana. ";
    break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        mensajeEsDe = "Es de tarde. ";
        break;
    default:
        mensajeEsDe= "Es de noche. A dormir"
        if(isNaN(horaIngresada) || horaIngresada >24 || horaIngresada<0)
        {
            mensajeEsDe = "La hora no es valida. "
        }
        break;

}

alert(mensajeEsDe);
}






/*
if(horaIngresada>11 && horaIngresada<20)
{
    mensaje = "Es de tarde.";
}
else
{
    if(horaIngresada>5 && horaIngresada<12)
    {
        mensaje = "Es de mañana.";
    }
    else
    {
        if(horaIngresada <25)
        {
            mensaje = "Es de noche.";
        }
        else
        {
            mensaje = "La hora no es valida.";
        }
    }
}

alert(mensaje)

switch(mensaje)
{
    case "Es de noche.":
        if(horaIngresada<24)
        {
            alert("A dormir.");
        }
        break;
}

*/

