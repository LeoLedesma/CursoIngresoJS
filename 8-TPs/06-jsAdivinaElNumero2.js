/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
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
	alert("usted es un Psíquico") ;
 }
 else
 {
	 if(contadorIntentos==2)
	 {
		 alert("Excelente percepcion");
	 }
	 else
	 {
		 if(contadorIntentos==3)
		 {
			alert("Esto es suerte");
		 }
		 else
		 {
			 if(contadorIntentos==4)
			 {
				 alert("Excelente técnica");
			 }
			 else
			 {
				 if(contadorIntentos==5)
				 {
					 alert("usted está en la media");
				 }
				 else
				 {
					 if(contadorIntentos<11)
					 {
						 alert("falta técnica")
					 }
					 else
					 {
						 alert("afortunado en el amor!!");
					 }
				 }
			 }
		 }
	 }
 }
}

 document.getElementById("txtIdIntentos").value = contadorIntentos;
}


	
	

