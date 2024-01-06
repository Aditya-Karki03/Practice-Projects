
async function weather(){
    const apiURL='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=107e9ea76e4810e528542eb72b27f7a7';
    const request=new Request(apiURL);
    const response=await fetch(request);
    const WeatherObjText=await response.text();
    const WeatherObj=JSON.parse(WeatherObjText);
    console.log(WeatherObj)
}
weather();