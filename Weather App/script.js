
async function weather(){
   
    const request=new Request(apiURL);
    const response=await fetch(request);
    const WeatherObjText=await response.text();
    const WeatherObj=JSON.parse(WeatherObjText);
    console.log(WeatherObj)
}
weather();
