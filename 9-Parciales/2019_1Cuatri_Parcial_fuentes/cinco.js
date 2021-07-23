/*Bienvenidos (CON SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20% */

function mostrar()
{
var dias;
var continente;
var pago;
var descuento;
var descuentoMedioPago;
var precioSinDescuento;
var precioConDescuento;



continente = document.getElementById("Marca").value;
dias = prompt("Inserte cantidad de dias de su visita");
pago = prompt("Ingrese medio de pago, las opciones son: debito, mercadopago, efectivo, otro medio. Le pedimos por favor que copie textual a las opciones dadas");

if(pago!="debito"&&pago!="mercadopago"&&pago!="efectivo"&&pago!="otro medio")
{
    alert("No ha seleccionado correctamente el tipo de pago, por favor intentelo de nuevo");
    location.reload();
}

precioSinDescuento = dias * 100;


switch(continente)
{
    case "América":
        descuento=50;
        switch(pago)
        {
            case "debito":
                descuentoMedioPago = 10;
                break;
            default:
                descuentoMedioPago=0;
                break;
        }
        break;
    case "África":
        descuento=60;
        switch(pago)
        {
            case "mercadopago":
            case "debito":
                descuentoMedioPago = 15;
                break;
            default:
                descuentoMedioPago = 0;
                break;
        }
        break;
    case "Europa":
        descuento = 20;
        switch(pago)
        {
            case "debito":
                descuentoMedioPago=15;
                break;
            case "mercadopago":
                descuentoMedioPago=10;
                break;
            case "otro medio":
                descuentoMedioPago=5;
                break;
        }
        break;
    default:
        descuento = -20;
        descuentoMedioPago=0;
        break;
}


precioConDescuento = precioSinDescuento-(precioSinDescuento*descuento/100) - (precioSinDescuento*descuentoMedioPago/100);

alert("El costo de su viaje es: " + precioConDescuento);


}
