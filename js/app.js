const API_KEY = '9a7776c7d84e13f1a74fba8a505289c2';
const form = document.querySelector('form');
const search = document.querySelector('#search_city');
const weather = document.querySelector('#weather');
//https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=9a7776c7d84e13f1a74fba8a505289c2&units=metric
const getWeather = async city => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const reponse = await fetch(url)
    const data = await reponse.json();
    console.log(data)
    return showWeather(data);
}
const showWeather = data => {
    if(data.cod =='404'){
        weather.innerHTML = `<h2>City is not Found</h2>`;
        return;
    }
    weather.innerHTML = `
     <div class="img">
                <img src="http://openweathermap.org/img/wn//${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div class="current_temp">
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
            `;
}
form.addEventListener(
    'submit',
    function (event) {
        event.preventDefault();

        getWeather(search.value);
    }
);