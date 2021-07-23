/**
 * Enunciado:
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
 */

function mostrar()
{
var continenteIngresado;
var metodoPagoIngresado;
var diasIngresado;
var precioBase;
var descuentoContinente;
var descuentoMedioPago;

continenteIngresado = document.getElementById("selecContinente").value;
metodoPagoIngresado = document.getElementById("selecPago").value;
    
diasIngresado = prompt("Ingrese la cantidad de dias de su visita");
diasIngresado = parseInt(diasIngresado);

precioBase = diasIngresado*100;
descuentoMedioPago=0;

switch(continenteIngresado)
{
    case "America":
        descuentoContinente=15;
        switch(metodoPagoIngresado)
        {
            case "Débito":
                descuentoMedioPago=10;
                break;
        }
        break;
    case "África":
    case "Oceania":
        descuentoContinente=30;
        switch(metodoPagoIngresado)
        {
            case "Efectivo":
            case "MercadoPago":
                descuentoMedioPago=15;
                break;
        }
        break;
    

}

