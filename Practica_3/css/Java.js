//Ejercicio 1
function Producto() {
  var num1 = Number(document.getElementById("n1").value);
  var num2 = Number(document.getElementById("n2").value);
  var num3 = Number(document.getElementById("n3").value);

  var res = num1 * num2 * num3;

  document.getElementById("res").value = res;
  //return resultado;
}

//Ejercicio 2
function Temperatura(clima) {
  clima = parseInt(document.getElementById("temp").value);

  if (clima >= -10 && clima <= 15) {
    alert("El clima esta Frio");
  } else {
    if (clima >= 16 && clima <= 25) {
      alert("El clima esta Templado");
    } else {
      if (clima >= 25 && clima <= 40) {
        alert("Esta haciendo Calor");
      } else {
        alert("Ingreso un dato erroneo que esta fuera de los parametros");
      }
    }
  }
}

//Ejercicio 3
  function Factorial() {
    var num = document.getElementById("nf").value;
    var cont = 1;
    for (var i = 1; i <= num; i++) {
      cont = cont * i;
    }
    document.getElementById("rf").innerHTML = "El factorial de " + num + " es: "+cont;
  }

//Ejercicio 4
function Fecha(){
    var hoy= new Date();
    document.getElementById("fecha").innerHTML =
      "La fecha del dia de hoy es :" +
      hoy.getUTCDate() +
      "-" +
      (hoy.getUTCMonth() + 1) +
      "-" +
      hoy.getUTCFullYear();
}
     