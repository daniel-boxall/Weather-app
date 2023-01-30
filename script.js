var cities = [];
var APIKey = "1cf684ec58e0dc4383dcdd15244363d7";

function showCity() {
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var city = $("#search-input").val().trim();
        showCityWeather(city);
        setTimeout(200);
        forecast(city);
         $("#forecast").removeClass("display");
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

        var today = moment().format("l");

        var iconPath = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/w/" + iconPath + ".png";
        var icon = $("<img>").attr("src", iconUrl);
        icon.css("width", "100px");

        var cityName = $("<h4 class='cityname'>").append(city, " (", today, ")", icon);
        var tempTag = $("<p>").text("Temp: " + tempC + " °C");
        var windTag = $("<p>").text("Wind Speed: " + wind + " Mph");
        var humidityTag = $("<p>").text("Humidity: " + humidity + "%");

        $("#today").append(cityName, tempTag, windTag, humidityTag);
    })
        $("#search-input").val("");
    renderCityBtns();
    
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
        $("#forecast").removeClass("display");
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

     iconCode = response.list[8].weather[0].icon;
     iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $(".weather1").attr("src", iconURL);
       
     var tempC = Math.floor(response.list[8].main.temp - 273.15);
     var wind = response.list[8].wind.speed;
     var humidity = response.list[8].main.humidity;
     //$("day1").append(todayDay) + 1;
     $("#image").append(iconURL);
      //append data to webpage
     $("#day1").text(moment.unix(response.list[8].dt).format("DD/MM/YY"));
     $("#temp-day1").text("Temp: " + tempC + "°C")
     $("#wind-day1").text("Wind Speed: " + wind + "Mph")
     $("#humidity-day1").text("Humidity: " + humidity + "%")

    // DAY 2
     iconCode = response.list[16].weather[0].icon;
     iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $(".weather2").attr("src", iconURL);

     var tempC = Math.floor(response.list[16].main.temp - 273.15);
     var wind = response.list[16].wind.speed;
     var humidity = response.list[16].main.humidity;
     $("#image").append(iconURL);
     //append data to webpage
     $("#day2").text(moment.unix(response.list[16].dt).format("DD/MM/YY"));
     $("#temp-day2").text("Temp: " + tempC + "°C")
     $("#wind-day2").text("Wind Speed: " + wind + "Mph")
     $("#humidity-day2").text("Humidity: " + humidity + "%")

     // DAY 3
     iconCode = response.list[24].weather[0].icon;
     iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $(".weather3").attr("src", iconURL);

     var tempC = Math.floor(response.list[24].main.temp - 273.15);
     var wind = response.list[24].wind.speed;
     var humidity = response.list[24].main.humidity;
     $("#image").append(iconURL);
     //append data to webpage
     $("#day3").text(moment.unix(response.list[24].dt).format("DD/MM/YY"));
     $("#temp-day3").text("Temp: " + tempC + "°C")
     $("#wind-day3").text("Wind Speed: " + wind + "Mph")
     $("#humidity-day3").text("Humidity: " + humidity + "%")

     // DAY 4
     iconCode = response.list[32].weather[0].icon;
     iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $(".weather4").attr("src", iconURL);

     var tempC = Math.floor(response.list[32].main.temp - 273.15);
     var wind = response.list[32].wind.speed;
     var humidity = response.list[32].main.humidity;
     $("#image").append(iconURL);
     //append data to webpage
     $("#day4").text(moment.unix(response.list[32].dt).format("DD/MM/YY"));
     $("#temp-day4").text("Temp: " + tempC + "°C")
     $("#wind-day4").text("Wind Speed: " + wind + "Mph")
     $("#humidity-day4").text("Humidity: " + humidity + "%")

     // DAY 5
     iconCode = response.list[39].weather[0].icon;
     iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $(".weather5").attr("src", iconURL);

     var tempC = Math.floor(response.list[39].main.temp - 273.15);
     var wind = response.list[39].wind.speed;
     var humidity = response.list[39].main.humidity;
     $("#image").append(iconURL);
     //append data to webpage

     $("#day5").text(moment.unix(response.list[39].dt).format("DD/MM/YY"));
     $("#temp-day5").text("Temp: " + tempC + "°C")
     $("#wind-day5").text("Wind Speed: " + wind + "Mph")
     $("#humidity-day5").text("Humidity: " + humidity + "%")

   });
 }
     

