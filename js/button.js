// Con este script pasamos de grados Celsius a Farenheit y viceversa

const farenheit = document.querySelector(".farenheit");
const celsius = document.querySelector(".celsius");

farenheit.addEventListener("click", event => {

    if (farenheit.style.display === "block") {
        farenheit.style.display = "none";
    } else {
        farenheit.style.display = "none";
    }

    if (celsius.style.display === "none") {
        celsius.style.display = "block";
    } else {
        celsius.style.display = "block";
    }

    if (celsius.style.display === "block") {
        document.getElementById("measure").innerHTML = "°F";

    }  else {
        document.getElementById("measure").innerHTML = "°C";

    }

    
});

celsius.addEventListener("click", event => {

    if (celsius.style.display === "block") {
        celsius.style.display = "none";
    } else {
        celsius.style.display = "none";
    }

    if (farenheit.style.display === "none") {
        farenheit.style.display = "block";
    } else {
        farenheit.style.display = "block";
    }

    if (farenheit.style.display === "block") {
        document.getElementById("measure").innerHTML = "°C";

    }  else {
        document.getElementById("measure").innerHTML = "°F";

    }


    
});

