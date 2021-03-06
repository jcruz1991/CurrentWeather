
var main = function() {
    var API_KEY = "76b8eff9c01925924560441bc9f66f85";

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + latitude + "&lon=" + longitude  + "&APPID=" + API_KEY;

            $.getJSON(url, function(data) {
                console.log(data);

                // GET CITY NAME AND ADD TO HTML
                var city = data.name;
                $(".city-info").html("<p>" + city + "</p>");

                // GET CITY TEMPERATURE AND ADD TO HTML
                var temperature = Math.floor(data.main.temp);
                $(".city-temperature").html("<p>" + temperature + " <button id=\"tempButton\">F </button> </p>");
                 // GET CITY DESCRIPTION AND ADD TO HTML
                var description = data.weather[0].description;
                $(".city-description").html("<p>" + description + "</p>");

                // GET CITY WEATHER IMAGE AND ADD TO HTML
                var image = data.weather[0].icon;
                $(".weather-icon").html("<img clas=\"owf-5x\" src=http://openweathermap.org/img/w/" + image + ".png>");
            });
        });
    } else {
        console.log("Location not found...");
    }

    /*
    $("#tempButton").on("click", function() {
      console.log("CLICKED");
    });
    */
};



$(document).ready(main);
