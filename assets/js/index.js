//Current Time
var locationBox = document.getElementById('locationBox');
var goButton = document.getElementById('go-button');

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
  
    localStorage.setItem('city', userCity);
    console.log(userCity)

    var heroCity = localStorage.getItem('city')
    if (heroCity) {
    var cityTitle = document.createElement('h2')
    cityTitle.textContent = heroCity;

    var currentDay = document.getElementById('currentCity');
    while (currentDay.firstChild) {
    currentDay.removeChild(currentDay.firstChild);
    }

    currentDay.appendChild(cityTitle);
} else {
    console.log('City not found')
}
    // var userTemp = document.createElement ('li')
    // var userWind 
    // var userHumidity
    // var userSunrise
    // var userSunset
  });

  // need to grab user city and get the lat & long

  //need to append info from the object into the current-day box

  //then need to dynamically generate five cards for each day. A day is 8 items in the array
  
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.052238&lon=-118.243340&appid=d84b2a8be5d2ca1ba21dcd598e80ef62')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


//   function GeoLocate() {
//     fetch(
//       "http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=1&appid=7355009108da9226df5bd810ec2a29ae"
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
  
//         lat = JSON.stringify(data[0].lat);
//         long = JSON.stringify(data[0].lon);
//         getWeather();
//       });
//   }
  
//   function getWeather() {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?lat=" +
//         lat +
//         "&lon=" +
//         long +
//         "&appid=7355009108da9226df5bd810ec2a29ae&units=imperial"
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);

//         var weatherCondition =  data.weather[0].description;
//         var temperature = Math.floor(data.main.temp.toString());
     
//          // Grabs parent element we need to append to
//          var selectdaTab = document.querySelector('.weather-bod');
     
//          // Creates what we need to append 
     
//          var appendMe = document.createElement('h4');
     
//          // fill in dat text 
//            appendMe.textContent = "Conditions are " + weatherCondition + ", with a tempurature of " + temperature +"°F";
     
//          // append element
//            selectdaTab.appendChild(appendMe);
           
     
//          });
//      }
    // var userWind 
    // var userHumidity
    // var userSunrise
    // var userSunset

