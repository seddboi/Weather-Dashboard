var recentSearches ;

recentSearches.forEach(funtion (city, index, aori))

function getWeather(city) {
    var apiInfo = 'http://api.openweathermap.org/data/2.5/weather?appid=bc4962a699e8e59af6dee3b499b23da2&q=${city}&units=imperial';

    $.get(apiInfo).then(function(response) {
        var long = response.coord.longitude;
        var lat = response.coord.longitude;
        var apiUV = 'https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${apiKey}';

        $.get(apiUV).then(function(uvResponse){
            console.log(uvResponse);

            var temp = response.main.temp;
            var speed = response.wind.speed;
        })
    })
}

