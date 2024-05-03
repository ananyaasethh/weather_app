const apikey="edf415d8998c4d9e357d1da99437eccc";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");




async function checkweather(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}` )
    var data=await response.json();
    console.log(data);
   if(response.ok===true){
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";



    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }} else{
        alert("invalid city ");
    }
} 


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value) ; 
})






export const config3 = (data, url, empId, apiKey) => {
    return {
      method: "post",
      url: `${url}api/v1/recognition/faces?subject=${empId}`,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      },
      data: data,
    };
  };