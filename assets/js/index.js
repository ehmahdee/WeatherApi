// var city = document.getElementByID("city");
var locationBox = document.getElementById('locationBox');
var goButton = document.getElementById('go-button');

//Current Time
var now = dayjs();

$('#headerTime').text(now.format('MMM D, YYYY, h:mm a'));


function updateTime() {
  var now = dayjs();
  $('#headerTime').text(now.format('MMM D, YYYY h:mm a'));
}

setInterval(updateTime, 1000);

//saving city to local storage

goButton.addEventListener('click', () => {
    var userCity = locationBox.value;
    fetchCurrentWeather(userCity);

    localStorage.setItem('city', userCity);
    console.log(userCity)

    var heroCity = localStorage.getItem('city')
    if (heroCity) {
    var cityTitle = document.createElement('h2')
    cityTitle.textContent = heroCity;

    //add to search history
    var searchHistory = document.createElement('a')
    searchHistory.textContent = heroCity;
    
    var searchHistoryBox = document.getElementById('searchHistoryBox')
    searchHistoryBox.appendChild(searchHistory)
    searchHistoryBox.setAttribute("class", "button is-link is-light is-fullwidth")

    //prevents cities from duplicating in the current day box
    var currentDay = document.getElementById('currentCity');
    while (currentDay.firstChild) {
    currentDay.removeChild(currentDay.firstChild);
    }

    currentDay.appendChild(cityTitle);
} else {
    console.log('City not found')
}

})

//make current weather call
function fetchCurrentWeather(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d84b2a8be5d2ca1ba21dcd598e80ef62&units=imperial`)

        .then(function (response) {return response.json();})
        
        .then(function (data) {
            console.log(data);

            var nowCurrentConditions = document.getElementById('currentWeatherConditions');
            nowCurrentConditions.textContent = data.weather[0].description
            console.log(data.weather[0].description)

            var nowTemp = document.getElementById('currentTemp');
            nowTemp.textContent = data.main.temp

            var nowWind = document.getElementById('currentWind');
            nowWind.textContent = data.wind.speed

            var nowHumid = document.getElementById('currentHumidity');
            nowHumid.textContent = data.main.humidity

            var nowSunrise = document.getElementById('currentSunrise');
            nowSunrise.textContent = dayjs.unix(data.sys.sunrise).format('h:mm:ss a')

            var nowSunset = document.getElementById('currentSunset');
            nowSunset.textContent = dayjs.unix(data.sys.sunset).format('h:mm:ss a')
            
            let lon = data.coord.lon;
            let lat = data.coord.lat;
            fiveDayForecast(lat, lon)
        }) 
}

//make 5-day fetch call
function fiveDayForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d84b2a8be5d2ca1ba21dcd598e80ef62&units=imperial`)
            .then(function (response) {
                return response.json();})
            
              .then(function (data) {
                console.log(data);
                //day one
                var dayOneDate = document.getElementById('dayOneDate')
                dayOneDate.textContent = dayjs.unix(data.list[0].dt).format('MM/DD/YYYY')

                var dayOneWeather = document.getElementById('dayOneWeather')
                dayOneWeather.textContent = data.list[0].weather[0].description
                
                var dayOneWind = document.getElementById('dayOneWind')
                dayOneWind.textContent = data.list[0].wind.speed

                var dayOneTemp = document.getElementById('dayOneTemp')
                dayOneTemp.textContent = data.list[0].main.temp

                var dayOneHumid = document.getElementById('dayOneHumid')
                dayOneHumid.textContent = data.list[0].main.humidity
                
                //day two
                var dayTwoDate = document.getElementById('dayTwoDate')
                dayTwoDate.textContent = dayjs.unix(data.list[8].dt).format('MM/DD/YYYY')

                var dayTwoWeather = document.getElementById('dayTwoWeather')
                dayTwoWeather.textContent = data.list[8].weather[0].description
                
                var dayTwoWind = document.getElementById('dayTwoWind')
                dayTwoWind.textContent = data.list[8].wind.speed

                var dayTwoTemp = document.getElementById('dayTwoTemp')
                dayTwoTemp.textContent = data.list[8].main.temp

                var dayTwoHumid = document.getElementById('dayTwoHumid')
                dayTwoHumid.textContent = data.list[8].main.humidity

                //day three
                var dayThreeDate = document.getElementById('dayThreeDate')
                dayThreeDate.textContent = dayjs.unix(data.list[16].dt).format('MM/DD/YYYY')

                var dayThreeWeather = document.getElementById('dayThreeWeather')
                dayThreeWeather.textContent = data.list[16].weather[0].description
                
                var dayThreeWind = document.getElementById('dayThreeWind')
                dayThreeWind.textContent = data.list[16].wind.speed

                var dayThreeTemp = document.getElementById('dayThreeTemp')
                dayThreeTemp.textContent = data.list[16].main.temp

                var dayThreeHumid = document.getElementById('dayThreeHumid')
                dayThreeHumid.textContent = data.list[16].main.humidity

                //day four
                var dayFourDate = document.getElementById('dayFourDate')
                dayFourDate.textContent = dayjs.unix(data.list[24].dt).format('MM/DD/YYYY')

                var dayFourWeather = document.getElementById('dayFourWeather')
                dayFourWeather.textContent = data.list[24].weather[0].description
                
                var dayFourWind = document.getElementById('dayFourWind')
                dayFourWind.textContent = data.list[24].wind.speed

                var dayFourTemp = document.getElementById('dayFourTemp')
                dayFourTemp.textContent = data.list[24].main.temp

                var dayFourHumid = document.getElementById('dayFourHumid')
                dayFourHumid.textContent = data.list[24].main.humidity

                //day five
                var dayFiveDate = document.getElementById('dayFiveDate')
                dayFiveDate.textContent = dayjs.unix(data.list[32].dt).format('MM/DD/YYYY')

                var dayFiveWeather = document.getElementById('dayFiveWeather')
                dayFiveWeather.textContent = data.list[32].weather[0].description
                
                var dayFiveWind = document.getElementById('dayFiveWind')
                dayFiveWind.textContent = data.list[32].wind.speed

                var dayFiveTemp = document.getElementById('dayFiveTemp')
                dayFiveTemp.textContent = data.list[32].main.temp

                var dayFiveHumid = document.getElementById('dayFiveHumid')
                dayFiveHumid.textContent = data.list[32].main.humidity
              })
              }
