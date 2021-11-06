// Creamos la función que recoge los datos de la API y la guardamos en una variable

let weather = {
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&lang=es&appid=9a75a89833ae4a8d6c2ec323f11e6bae"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    // Creamos la función que asignará los valores correspondientes de la API

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "El tiempo en " + name;
        document.querySelector(".icon").src =
            "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.trunc(temp) + "°C";
        document.querySelector(".humidity").innerText =
            "Humedad: " + humidity + "% ";
        document.querySelector(".wind").innerText =
            "Velocidad del viento: " + speed + " km/h";

        /*Esta línea hace que al cargar la página aparezca un mensaje de "cargando los datos", en caso de que la conexion sea lenta, ya que en principio pasará inadvertida */

        document.querySelector(".weather").classList.remove("loading");

        // Cambiamos el fondo de pantalla en función de la ciudad que buscamos 

        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1920x1080/?" + name + "')";
    },

    // Creamos la función que permite utilizar la búsqueda

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

// Creamos la función que permite utilizar la tecla Enter para buscar

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

    // Función  para la geolocalización

        
let geocode = {

    reverseGeocode: function (latitude, longitude) {

        var api_key = 'a7ecf83b4e1144919ca0d5d1ea40593b';
        var api_url = 'https://api.opencagedata.com/geocode/v1/json'
        var request_url = api_url
          + '?'
          + 'key=' + api_key
          + '&q=' + encodeURIComponent(latitude + ',' + longitude)
          + '&pretty=1'
          + '&no_annotations=1';
      
        // see full list of required and optional parameters:
        // https://opencagedata.com/api#forward
      
        var request = new XMLHttpRequest();
        request.open('GET', request_url, true);
      
        request.onload = function() {
          // see full list of possible response codes:
          // https://opencagedata.com/api#codes
      
          if (request.status === 200){ 
            // Success!
            var data = JSON.parse(request.responseText);
           // print the location
            weather.fetchWeather(data.results[0].components.city); 
          } else if (request.status <= 500){ 
            // We reached our target server, but it returned an error
                                 
            console.log("unable to geocode! Response code: " + request.status);
            var data = JSON.parse(request.responseText);
            console.log('error msg: ' + data.status.message);
          } else {
            console.log("server error");
          }
        };
      
        request.onerror = function() {
          // There was a connection error of some sort
          console.log("unable to connect to server");        
        };
      
        request.send();  // make the request
    },

getLocation: function() {
    function success (data) {
        geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, console.error);
    }
    else {
        weather.fetchWeather("Barcelona");
        }
}
};


    

    geocode.getLocation();

