var C = 0;
var K = 0;
var F = 0;
var mySet = new Set();

function convertir(e) {
  //Celsius a Fahrenheit  F = C*9/5+32
  if (e.target.name == "Celsius-a-Fahrenheit") {
    C = document.querySelector(".temp").innerText;

    F = (C * 9) / 5 + 32;

    F = Math.trunc(F);

    document.getElementById("convertir").innerHTML = F;

   
  }

  //Fahrenheit a Celsius   C =(F-32)*5/9
  else if (e.target.name == "Fahrenheit-a-Celsius") {
    F = document.querySelector(".temp").innerText;

    C = ((F - 31) * 5) / 9;

    C = Math.trunc(C);

    document.getElementById("convertir").innerHTML = C;

    

 
  }
}
