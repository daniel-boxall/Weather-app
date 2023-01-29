var cities = [];
var APIKey = "1cf684ec58e0dc4383dcdd15244363d7";

function showCity() {
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var city = $("#search-input").val().trim();
        showCityWeather(city);
    })
};

function showCityWeather(city) {
    if (cities.includes(city) === false) {
        cities.push(city);
        localStorage.setItem("cities", JSON.stringify(cities));
    }

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);

        $("#today").empty();
        var wind = response.wind.speed;
        var humidity = response.main.humidity;
        var tempK = response.main.temp;
        var tempC = parseFloat(tempK - 273.15).toFixed(1);

        var today = moment().format("L");

        var iconPath = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/" + iconPath + ".png";
        var icon = $("<img>").attr("src", iconUrl);

        var cityName = $("<h4 class='cityname'>").append(city, " (",  today, ")", icon);
        var tempTag = $("<p>").text("Temp: " + tempC + " °C");
        var windTag = $("<p>").text("Wind: " + wind + " KPH");
        var humidityTag = $("<p>").text("Humidity: " + humidity + "%");

        $("#today").append(cityName, tempTag, windTag, humidityTag);
    })
    $("#search-input").val("");
    renderCityBtns()
}

function renderCityBtns() {
    $("#history").empty();
    if (localStorage.getItem("cities")) {
        cities = JSON.parse(localStorage.getItem("cities"))
    }
    for (var i = 0; i < cities.length; i++) {
        var cityBtn = $("<button>");
        cityBtn.addClass("cityBtn");
        cityBtn.text(cities[i]);
        $("#history").append(cityBtn);
    }
    $(".cityBtn").on("click", function (event) {
        var city = $(this).text();
        console.log(city);
      showCityWeather(city);
      forecast(city);
    })
}
renderCityBtns();
showCity();

function forecast(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL)
    console.log(response)
    //DAY 1
    var iconCode = response.list[8].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".weather1").attr("src", iconURL);

    var tempC = Math.floor(response.list[8].main.temp - 273.15);
    var wind = response.list[8].wind.speed;
    var humidity = response.list[8].main.humidity;
    $("#image").append(iconURL);
    //append data to webpage
    $("#temp-day1").append("Temp: " + tempC + "°C")
    $("#wind-day1").append("Wind Speed: " + wind + "MPH")
    $("#humidity-day1").append("Humidity: " + humidity + "%")

    // DAY 2
    iconcode = response.list[16].weather[0].icon;
    iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $(".weather2").attr("src", iconURL);

    var tempC = Math.floor(response.list[16].main.temp - 273.15);
    var wind = response.list[16].wind.speed;
    var humidity = response.list[16].main.humidity;
    $("#image").append(iconURL);
    //append data to webpage
    $("#temp-day2").append("Temp: " + tempC + "°C")
    $("#wind-day2").append("Wind Speed: " + wind + "MPH")
    $("#humidity-day2").append("Humidity: " + humidity + "%")

    // DAY 3
    iconcode = response.list[24].weather[0].icon;
    iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $(".weather3").attr("src", iconURL);

    var tempC = Math.floor(response.list[24].main.temp - 273.15);
    var wind = response.list[24].wind.speed;
    var humidity = response.list[24].main.humidity;
    $("#image").append(iconURL);
    //append data to webpage
    $("#temp-day3").append("Temp: " + tempC + "°C")
    $("#wind-day3").append("Wind Speed: " + wind + "MPH")
    $("#humidity-day3").append("Humidity: " + humidity + "%")

    // DAY 4
    iconcode = response.list[32].weather[0].icon;
    iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $(".weather4").attr("src", iconURL);

    var tempC = Math.floor(response.list[32].main.temp - 273.15);
    var wind = response.list[32].wind.speed;
    var humidity = response.list[32].main.humidity;
    $("#image").append(iconURL);
    //append data to webpage
    $("#temp-day4").append("Temp: " + tempC + "°C")
    $("#wind-day4").append("Wind Speed: " + wind + "MPH")
    $("#humidity-day4").append("Humidity: " + humidity + "%")

    // DAY 5
    iconcode = response.list[39].weather[0].icon;
    iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $(".weather5").attr("src", iconURL);

    var tempC = Math.floor(response.list[39].main.temp - 273.15);
    var wind = response.list[39].wind.speed;
    var humidity = response.list[39].main.humidity;
    $("#image").append(iconURL);
    //append data to webpage
    $("#temp-day5").append("Temp: " + tempC + "°C")
    $("#wind-day5").append("Wind Speed: " + wind + "MPH")
    $("#humidity-day5").append("Humidity: " + humidity + "%")


  });
  
  
  
};






/*var 
var long = "";
var lat = "";

$("#search-button").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var search = $("#search-input").val();

    var query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey;

  $.ajax({
    url: query1,
    method: "GET"
  }).then(function (e) {

    // Create CODE HERE to Log the queryURL
    console.log(query1);
    // Create CODE HERE to log the resulting object
    console.log(e);
        
    long = e.coord.lon;
    lat = e.coord.lat;
    console.log(long)
    console.log(lat)

  
      var query2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + APIKey + "&units=metric";
    
      $.ajax({
          url: query2,
          method: "GET"
      }).then(function (response) {

      // Create CODE HERE to Log the queryURL
      console.log(query2);
      // Create CODE HERE to log the resulting object
      console.log(response);
      });
        let cityEl = $("<div>")
        let tempEl = $("<div>")
        let windEl = $("<div>")
        let humidityEl = $("<div>")
  
        cityEl.html(response.name)
        tempEl.html(response.main.temp + " C")
        windEl.html(response.wind.speed + " Mph")
        humidityEl.html(response.main.humidity + " % humidity")

        $("#today").append(cityEl, tempEl, windEl, humidityEl);
  
    });
  });
  
  */
  
 
  

