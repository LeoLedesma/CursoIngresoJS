function mostrar()
{
   
    var letraIngresada;
    var numeroIngresado;
    var esPar;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var respuesta;
    var acumuladorPositivos;
    var cantidadPositivos;
    var acumuladorNegativos;


    respuesta=true;
    cantidadPares=0;
    cantidadImpares=0;
    cantidadCeros=0;
    cantidadPositivos=0;
    acumuladorNegativos=0;

    while(respuesta==true)
    {
        letraIngresada=prompt("Por favor ingrese una letra");
        letraIngresada=letraIngresada.toLowerCase();
        while(letraIngresada!="q" && letraIngresada!="w" &&letraIngresada!="e" &&letraIngresada!="r" &&letraIngresada!="t" &&letraIngresada!="y" &&letraIngresada!="u" &&letraIngresada!="i" &&letraIngresada!="o" &&letraIngresada!="p" &&letraIngresada!="a" &&letraIngresada!="s" &&letraIngresada!="d" &&letraIngresada!="f" &&letraIngresada!="g" &&letraIngresada!="h" &&letraIngresada!="j" &&letraIngresada!="k" &&letraIngresada!="l" &&letraIngresada!="z" &&letraIngresada!="x" &&letraIngresada!="c" &&letraIngresada!="v" &&letraIngresada!="b" &&letraIngresada!="n" &&letraIngresada!="m")
        {
            letraIngresada=prompt("Usted no ingresó una letra, intente nuevamente");
            letraIngresada=letraIngresada.toLowerCase();
        }

        numeroIngresado=prompt("Ingrese un numero entre el -100 y 100");
        numeroIngresado=parseInt(numeroIngresado);
        while(numeroIngresado<-100 || numeroIngresado>100)
        {
            numeroIngresado=prompt("Usted ingresó un número incorrecto, intente nuevamente");
            numeroIngresado=parseInt(numeroIngresado);
        }
        respuesta=confirm("Quiere continuar?");

        esPar=numeroIngresado%2;
         
        switch(esPar)
        {
            case 0: 
                cantidadPares++;
                break;
            default:
                cantidadImpares++;
            break;
        }
    

        if(numeroIngresado==0)
        {
            cantidadCeros++;
        }
        else
        {
            if(numeroIngresado>0)
            {
                acumuladorPositivos=sumatoriaPositivos+numeroIngresado;
                cantidadPositivos++;
            }
            else
            {
                sumatoriaNegativos
            }
        }





    }
    
promedioPositivos=acumuladorPositivos/cantidadPositivos;


document.write("a) La cantidad de numeros pares es: "+ cantidadPares +"<br>" +
"b) La cantidad de numeros impares es: " + cantidadImpares + "<br>" +
"c) La cantidad de ceros es: " + cantidadCeros) 


}
