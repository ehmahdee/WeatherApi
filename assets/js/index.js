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
  });

// grabbing city from local storage, passing it to current-day box



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

