/**Apellido: Ledesma
 * Nombre: Leonel
 * 
 * Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
 */


function mostrar()
{
var planetaIngresado;

planetaIngresado = prompt("Ingrese un planeta del sistema solar.");
planetaIngresado = planetaIngresado.toLowerCase();

switch(planetaIngresado)
{
    case "tierra":
    case "la tierra":
        mensaje = "Acá vivimos";
        break;
    case "mercurio":
    case "venus":
        mensaje = "Acá hace mas calor";
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton:":
        mensaje = "Acá hace mas frio";
    break;
    default:
        mensaje = "No es un planeta valido.";
        break;
}

alert(mensaje);

}
