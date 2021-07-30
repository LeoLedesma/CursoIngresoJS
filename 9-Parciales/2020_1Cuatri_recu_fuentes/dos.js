/*
ealizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro 
*/

function mostrar()
{
  var pregunta;
  var productoIngresado;
  var cantidadIngresado;
  var precioIngresado;
  var acumuladorBolsas;
  var totalSinDescuento;
  var descuento;
  var totalConDescuento;
  var mensajeDescuento;
  var precioMasCaro;
  var tipoMasCaro;
  
  var acumuladorArena;
  var acumuladorAlcohol;
  var acumuladorCal;
  var productoMasBolsas;
  
  var banderaMasCaro;


  pregunta=true;
  banderaBolsas=true;
  acumuladorBolsas=0;
  totalSinDescuento=0;
  banderaMasCaro=true;

  acumuladorCal=0;
  acumuladorAlcohol=0;
  acumuladorArena=0;
  

  while(pregunta==true)
  {

    //ingreso datos
    productoIngresado=prompt("Ingrese el producto que quiere comprar:")
    productoIngresado=productoIngresado.toLowerCase();

    while(productoIngresado!= "arena" && productoIngresado!= "cal" && productoIngresado!= "cemento")//valido productoIngresado
    {
      productoIngresado=prompt("Producto invalido, intente nuevamente:");
      productoIngresado=productoIngresado.toLowerCase();
    }

    cantidadIngresado=prompt("Ingrese cantidad de bolsas de " + productoIngresado );
    cantidadIngresado=parseInt(cantidadIngresado);

    while(isNaN(cantidadIngresado)==true || cantidadIngresado<0)
    {
      cantidadIngresado=prompt("No ingresó un número valido, ingrese la cantidad de bolsas de " +productoIngresado + "nuevamente:");
      cantidadIngresado=parseInt(cantidadIngresado);
    }

    precioIngresado=prompt("Ingrese el precio de cada bolsa de " + productoIngresado);
    precioIngresado=parseInt(precioIngresado);

    while(isNaN(precioIngresado)==true || precioIngresado<0)
    {
      precioIngresado=prompt("No puso un precio valido, intente nuevamente" + productoIngresado);
      precioIngresado=parseInt(precioIngresado);
    }
    totalSinDescuento=totalSinDescuento+(cantidadIngresado*precioIngresado)
    acumuladorBolsas=acumuladorBolsas+cantidadIngresado;

    pregunta=confirm("Quiere agregar mas productos?");

    if(acumuladorBolsas>30) //hago desccuento
    {
      descuento=25;
    }
    else
    {
      if(acumuladorBolsas>10)
      {
        descuento=15;
      }
      else
      {
        if(acumuladorBolsas>0 || acumuladorBolsas<10)
        {
          descuento=0;
        }
      }
    
    }

    switch(productoIngresado) //acumulo cantidad de bolsas
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadIngresado;
        break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadIngresado;
        break;
      default:
        acumuladorAlcohol=acumuladorAlcohol+cantidadIngresado;
        break;  
    }


    if(banderaMasCaro==true)
    {
      banderaMasCaro==false;
      tipoMasCaro=productoIngresado;
      precioMasCaro=precioIngresado;
    }
    else
    {
      if(precioIngresado>precioMasCaro)
      {
        precioMasCaro=precioIngresado;
        tipoMasCaro=productoIngresado;
      }
    }



  }

  if(acumuladorArena>acumuladorAlcohol && acumuladorArena>acumuladorCal)
  {
    productoMasBolsas="Arena";
  }
  else
  {
    if(acumuladorAlcohol>acumuladorArena && acumuladorAlcohol>acumuladorCal)
    {
      productoMasBolsas="Alcohol";
    }
    else
    {
      productoMasBolsas="Cal";
    }
  }


  if(descuento==0)
  {
    totalConDescuento="";
    mensajeDescuento="";
  }
  else
  {
    totalConDescuento=totalSinDescuento-(totalSinDescuento*descuento/100);
    mensajeDescuento="b) El total con descuento es: ";
  }


document.write("a) El importe a pagar total es: " + totalSinDescuento + "<br>"+
            mensajeDescuento+totalConDescuento+"<br>"+
            "d) El tipo con mas cantidad de bolsas es: " + productoMasBolsas+"<br>"+
            "f) El tipo más caro es: " + tipoMasCaro);

}
