// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

var urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=bc4962a699e8e59af6dee3b499b23da2&units=imperial&q=';
var urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=bc4962a699e8e59af6dee3b499b23da2&units=imperial&q=';
var citySearch = $('#searchBar').val();
var lsIndex = 0;

for (var x = 0; x < localStorage.length; x++) {
    var oldCityEntry = localStorage.getItem(x);
    console.log(oldCityEntry)
    $('#new-entries').append('<div>' + oldCityEntry + '</div>');
}

$(document).ready(function() {
    $('#searchButton').on('click', function(event) {
        var citySearch = $('#searchBar').val();
        console.log(citySearch);
        newWeatherInfo(citySearch);
    })
});

function newWeatherInfo(cityEntry) {
    var adjustedAPI = '';

    if (cityEntry !== '') {
        adjustedAPI = urlWeather + cityEntry;
    } 

    $.ajax ({url: adjustedAPI, method: 'GET'}).then(function(response) {
        console.log(response);
        
        var cityName = response.name
        var actualTemp = Math.floor(response.main.temp);
        var feelsLike = Math.floor(response.main.feels_like);
        var iconCode = response.weather[0].icon;
        var description = response.weather[0].description;
        var urlIcon = 'https://api.openweathermap.org/img/w/'+ iconCode +'.png';
        var toTextTemp = "Temperature: " + actualTemp + ' F';
        var feelsLikeText = "Feels Like: " + feelsLike + ' F';
        var descText = 'Description: ' + description
        
        $('#main-city-weather').append('<h1>' + cityName + '</h1>');
        $('#wicon').attr('src', urlIcon);
        $('#main-city-weather').append('<div>' + toTextTemp + '</div>');
        $('#main-city-weather').append('<div>' + feelsLikeText + '</div>');
        $('#main-city-weather').append('<div>' + descText + '</div>');
        
        // This captures the UV index and applies it to page
        // It also color codes the UV Index depending on how severe
        var urlUVIndex = 'http://api.openweathermap.org/data/2.5/uvi?lat='+lat+'&lon='+lon+'&appid=bc4962a699e8e59af6dee3b499b23da2';
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        $.ajax({url: urlUVIndex, method: 'GET'}).then(function(response){
            var UVIndex = response.value;
            var UVITExt = 'UV Index: ' + UVIndex;
            $('#main-city-weather').append('<div>' + UVIText + '</div>');
        })

        $.ajax ({url: urlForecast+cityName+'&count=10', method: 'GET'}).then(function(response){
            console.log(response);

            var collectedTemp = 0;
            var currentDate = 0;
            var listItemCount = 0;
            var meanTemp = 0;
            currentDate = moment().format('MM/DD/YYYY');
            for (var x = 0; x < response.list.length; x++) {
                
                var forecastDate = moment(response.list[x].dt, 'X').format('MM/DD/YYYY');
                var projectedTemp = response.list[x].main.temp;
                // console.log(projectedTemp);
                

                if (currentDate === forecastDate) {
                    currentDate = forecastDate; 
                    listItemCount++;
                    collectedTemp = collectedTemp + projectedTemp;
                } else {
                    var wicon = response.list[x].weather[0].icon
                    
                    meanTemp = Math.floor(collectedTemp / listItemCount);
                    console.log(meanTemp);
                    var dayInstance = $('<div class="card col-sm-3 text-center m-2" >');
                    dayInstance.append('<div> Date: ' + forecastDate + '</div>');
                    dayInstance.append('<div>  Average Temperature: ' + meanTemp + '</div>');
                    var wiconInstall = $('<div class="wicon-install"></div> ');
                    wiconInstall.append('<img id="5-day-wicon" src="">');
                    wiconInstall.attr("src", wicon);

                    $('#five-day-entries').append(dayInstance);

                    meanTemp = 0;
                    currentDate = forecastDate;
                }

            }

            
        })

    })

    
}
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city




