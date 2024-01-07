const search=document.querySelector('.bx-search');
const input=document.querySelector('.search input');
const DivIcon=document.querySelector('.weather-icon');
const icon=document.querySelector('.weather-icon i')
let city;
search.addEventListener('click',()=>{
    city=input.value;
    weather(city);
})



async function weather(city){
    const apiKey='107e9ea76e4810e528542eb72b27f7a7'
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
    const finalURL=apiURL+`&q=${city}&appid=${apiKey}`;
    const request=new Request(finalURL);
    const response=await fetch(request);
    const WeatherObjText=await response.text();
    const WeatherObj=JSON.parse(WeatherObjText);
    console.log(WeatherObj)
    weatherChanger(WeatherObj);
    iconChanger(WeatherObj)
}
// weather();

const temp=document.querySelector('.temp');
const loc=document.querySelector('.state');
const Humidity=document.querySelector('.Humidity')
const windSpeed=document.querySelector('.wind');

function weatherChanger(obj){
    // let tempInKelvin=
    // let tempInCel=obj.main.temp-273.15;
    obj.main.temp=Math.round(obj.main.temp);
    temp.innerHTML=`<h2>${obj.main.temp}°C</h2>`
    loc.innerHTML=`<h2>${obj.name}</h2>`
    Humidity.textContent=`${obj.main.humidity}% Humidity`;
    windSpeed.textContent=`${obj.wind.speed} km/h Wind Speed`
}

const iconChanger=(obj)=>{
    // console.log(obj.weather[0].main)
    if(obj.weather[0].main==='Clear'){
        DivIcon.innerHTML='<i class="bx bxs-sun"></i>';
        icon.classList.add('sunny')
        // console.log(icon.classList)
    }
    else if(obj.weather[0].main==='Clouds'){
        DivIcon.innerHTML="<i class='bx bxs-cloud' ></i>";
        // icon.classList.add('cloudy')
        // icon.style.Color = '#c2bfba';
        document.querySelector('.bxs-cloud').style.color='#c2bfba'

    }
}