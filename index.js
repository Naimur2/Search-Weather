const text=document.querySelector(".search");
const button=document.querySelector(".input");
const weatherDesc=document.querySelector(".content");

const weatherImgs={
 sunny:"sunny.png",
 partlycloudy:"partiallycloudy.png",
 clear:"clear.png",
 patchyrainpossible:"rain.png",
 lightsnow:"lightsnow.png",
 thunderstorminvicinity:"thunderstorm.png",
 haze:"fog.png",


};
let CurrentTemperature= location =>{
    fetch(`http://api.weatherstack.com/current?access_key=ea378c552d112c70720216c31793cf34&query=${location}`)
    .then(response => response.json())
    .then(data => {
        let condition=(data.current.weather_descriptions)[0];
        let name=condition.replace(/\s+/g, '').toLowerCase();
        let imgLink;
        if (weatherImgs.hasOwnProperty(name)){
            imgLink=`images/${weatherImgs[name]}`;
        }
       else{
           imgLink=(data.current.weather_icons)[0];
       }
        let weather=`
        <h2 class="weather-place">${data.request.query}</h2>
        <div style="background-image:url('${imgLink}')" class="weather-image"></div>
        <h2 class="weather-situation">${condition}</h2>
        <h1 class="weather-temperature">${data.current.temperature}° c</h1>
      `
      weatherDesc.innerHTML=weather;
      console.log(data.current.weather_icons);
        
    })
    .catch(err=> alert("Invalid City Name"));
    
};
let city="Dhaka";
CurrentTemperature(city);
button.addEventListener("click",()=>{
    let loc=text.value;
    if (loc==="") {
        alert("Please insert valid city");
    }
    else{
        CurrentTemperature(loc);
    } 

});
// CurrentTemperature();

