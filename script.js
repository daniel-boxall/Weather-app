var APIKey = "1cf684ec58e0dc4383dcdd15244363d7";


$("#search-button").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var search = $("#search-input").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Create CODE HERE to Log the queryURL
        console.log(queryURL);
        // Create CODE HERE to log the resulting object
        console.log(response);
        
        var tempInc = parseFloat(response.main.temp) - 273.15;

        let cityEl = $("<div>")
        let tempEl = $("<div>")
        let windEl = $("<div>")
        let humidityEl = $("<div>")

        cityEl.html(response.name)
        tempEl.html(Math.floor(tempInc) + " C")
        windEl.html(response.main.speed + " Mph")
        humidityEl.html(response.main.humidity + " %")

        $("#today").append(cityEl, tempEl);
        //console.log(city);
        $("#temp").html(Math.floor(tempInc) + " C");
        $("#wind").html(response.wind.speed + " mph");
        $("#humidity").html(response.main.humidity + " %");
        // Hint: To convert from Kelvin to Celsius: C = K - 273.15
        // Create CODE HERE to dump the temperature content into HTML
        

    });
    var history = $("search-button").add(localStorage);
});

function renderButtons() {

   // Deletes the movies prior to adding new movies
   // (this is necessary otherwise you will have repeat buttons)
   $("#history").empty();

   // Loops through the array of movies
   for (var i = 0; i < history.length; i++) {

     $("#history").append();
   }
 }