const API_KEY = `a061665b5d8449d3884d70f14d9f4532`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const button = document.querySelector("button")

const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return  showweather(data);


   

} 

const showweather = (data) => {
    if(data.cod=="404")
    {
       weather.innerHTML=`<h2>City Not Found</h2>`
       return ;

    }
    console.log(data)
   weather.innerHTML= `<div class="row" id="weather">

<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp} degree Celsius</h2>
    <h2>${data.weather[0].main}</h2>
    <h2>Feels like ${data.main.feels_like}</h2>
    <h2>Wind Speed is ${data.wind.speed}Km/hour</h2> 
</div>
</div>`
}
form.addEventListener(
    "submit",
    function (event) {
        getweather(search.value)
        event.preventDefault();

    }
)