/*4.	
Apellido: Ledesma
Nombre: Leonel
Con SWITCH V2
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */
 
function CalcularPrecio () 
{
var cantidadLamparas;
var marca;
var precioSinDescuento;
var precioFinal;
var descuento;
var impuesto;

cantidadLamparas = document.getElementById("txtIdCantidad").value;
cantidadLamparas = parseInt(cantidadLamparas);

marca = document.getElementById("Marca").value;
precioSinDescuento = cantidadLamparas*35;

if(cantidadLamparas>5)
{
    descuento = 50;
}
else
{
    if(cantidadLamparas==5)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento = 40;
                break;
            default:
                descuento = 30;
                break;
        }
    }
    else
    {
        if(cantidadLamparas==4)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
        }
        else
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;

            }
        }
    }
}

precioFinal = precioSinDescuento - (precioSinDescuento*descuento/100);

if(precioFinal>120)
{
    impuesto = (precioFinal*10/100);
    alert("Usted pago " + impuesto + " de IIBB.");
    precioFinal = precioFinal+impuesto
    
}


document.getElementById("txtIdprecioDescuento").value = precioFinal;

}







/*
switch(cantidadLamparas)
 {
     case 5:
         if(marca=="ArgentinaLuz")
         {
             descuento = 40;
         }
         else
         {
             descuento = 30;
         }
         break;
    case 4:
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
            descuento = 25;
        }
        else
        {
            descuento = 20;
        }
        break;
    case 3:
        if(marca=="ArgentinaLuz")
        {
            descuento= 15;
        }
        else
        {
            if(marca=="FelipeLamparas")
            {
                descuento = 10;
            }
            else
            {
                descuento = 5;
            }
        }
        break;
    default:
        descuento = 50;
        break;
 }

 precioFinal = precioSinDescuento - (precioSinDescuento*descuento/100);

if(precioFinal>120)
{
    impuesto = (precioFinal*10/100);
    precioFinal = precioFinal + impuesto;
    alert("Usted pago " + impuesto + " de IIBB");
}

 document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

*/



/*
switch(cantidadLamparas)
{
    case 5:
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento = 40;
                break;
            default:
                descuento = 30;
                break;
        }
        break;
    case 4:
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 25;
                break;
            default:
                descuento = 20;
            break;
        }
    break;
    case 3:
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento = 15;
                break;
            case "FelipeLamparas":
                descuento = 10;
                break;
            default:
                descuento = 5;
                break;
        }
    break;
    default:
        descuento = 50;
        break;
}

precioFinal = precioSinDescuento - (precioSinDescuento * descuento/100);

if(precioFinal>120)
 {
     impuesto = precioFinal * 10/100;
     precioFinal = precioFinal+impuesto
     alert("Usted pago " + impuesto + " de IIBB.");
 }

document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
*/






/*

    
 	var cantidad;
     var precio;
     var precioCantidad;
     var marca;
     var impuesto;
        
     precio = 35;
 
     cantidad = document.getElementById("txtIdCantidad").value;
     cantidad = parseInt(cantidad);
     marca = document.getElementById("Marca").value;
     
     precioCantidad = (cantidad*precio);
     
 
       
         
     //a
     if(cantidad >5)
     {
         porcentaje = 50
     }
     else //b
     {
         if(cantidad==5)
         {
             if(marca=="ArgentinaLuz")
             {
                 porcentaje = 40;
             }
             else
             {
                 porcentaje = 30;
             }
         }
         else //c
         {
             if(cantidad==4)
             {
                     if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                     {
                         porcentaje = 25;
                     }
                     else
                     {
                         porcentaje = 20;
                     }
             }
             else //d
             {
                 if(cantidad==3)
                 {
                     if(marca=="ArgentinaLuz")
                     {
                         porcentaje = 15;
                     }
                     else
                     {
                         if(marca=="FelipeLamparas")
                         {
                             porcentaje = 10;
                         }
                         else
                         {
                             porcentaje = 5;
                         }
                     }
                 }
             }
         }
     }
 
 descuento = precioCantidad * porcentaje/100;
 preciofinal = precioCantidad - descuento;
 
 document.getElementById("txtIdprecioDescuento").value = preciofinal;
 
 if(preciofinal>120) //e
 {
     impuesto = preciofinal * 10/100;
     preciofinal = preciofinal+impuesto
     alert("Usted pago " + impuesto + " de IIBB.");
 }
 
 }
 */