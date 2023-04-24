let baseURL = "https://api.weatherapi.com/v1/current.json?key=5ea1184c6fc344dd99712317232304&q=";
let rest_of_URL = "&aqi=no";


function for_button_click()
{    let regions=[];
     async function getWeather(endpoint)
    {
        let output = document.getElementById("out");
        
        let response = await fetch(`${baseURL}${endpoint}${rest_of_URL}`);
        response = await response.json();
        regions = response;

        console.log(regions);


        output.innerHTML = `
        <h2>Name : ${regions.location.name}</h2>
        <h2>Region : ${regions.location.region}</h2>
        <h2>Country : ${regions.location.country}</h2>
        <h2>Tempreature In Celcius : ${regions.current.temp_c} </h2>
        <h2>Tempreature In Fehrenheit : ${regions.current.temp_f}</h2>
        <h2>Wind Speed (KPH) : ${regions.current.wind_kph}</h2>
        <h2>Humidity : ${regions.current.humidity}</h2>

        <div class="flex">
        <h2 class="flex">${regions.current.condition.text}</h2>
        <img class="flex" id="icon" src="${regions.current.condition.icon}" alt="" class="icon">
        </div
        
                            `;
    }
    
    
    
    
    let user_choice = document.getElementById("user_input").value;
    getWeather(user_choice);
}; 
    
    
    let btn = document.getElementById("button");
    btn.onclick = for_button_click;
