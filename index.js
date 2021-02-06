const text=document.querySelector(".search");
const button=document.querySelector(".input");
const weatherDesc=document.querySelector(".content");
const test=document.querySelector(".test");
const weatherImgs={
 sunny:"sunny.png",
 partlycloudy:"partiallycloudy.png",
 clear:"clear.png",
 patchyrainpossible:"rain.png",
 lightsnow:"lightsnow.png",
 thunderstorminvicinity:"thunderstorm.png",
 haze:"fog.png",
 snow:"snow.png"

};

let CurrentTemperature= location =>{
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f6ac34ed76a847a5fab2dbce2ce86ea5`)
            .then(response => response.json())
            .then(data => {
                let condition=data.weather[0].main;
                    let name=condition.replace(/\s+/g, '').toLowerCase();
                    let imgLink;
                    if (weatherImgs.hasOwnProperty(name)){
                        imgLink=`images/${weatherImgs[name]}`;
                    }
                else{
                    imgLink='images/sunny.png';
                }
                let weather=`
                    <h2 class="weather-place">${data.name}</h2>
                <div style="background-image:url('${imgLink}')" class="weather-image"></div>
                <h2 class="weather-situation">${condition}</h2>
                <h1 class="weather-temperature">${Math.floor(data.main.temp-274)}° c</h1>`
                weatherDesc.innerHTML=weather;
                
            console.log(data);
            })
            .catch(err =>alert("Something went wrong"));
    // fetch(`http://api.weatherstack.com/current?access_key=ea378c552d112c70720216c31793cf34&query=${location}`)
    // .then(response => response.json())
    // .then(data => {
    //     let condition=(data.current.weather_descriptions)[0];
    //     console.log(condition);
    //     let name=condition.replace(/\s+/g, '').toLowerCase();
    //     let imgLink;
    //     if (weatherImgs.hasOwnProperty(name)){
    //         imgLink=`images/${weatherImgs[name]}`;
    //     }
    //    else{
    //        imgLink=images/sunny.png;
    //    }
    //     let weather=`
    //     <h2 class="weather-place">${data.request.query}</h2>
    //     <div style="background-image:url('${imgLink}')" class="weather-image"></div>
    //     <h2 class="weather-situation">${condition}</h2>
    //     <h1 class="weather-temperature">${data.current.temperature}° c</h1>
    //   `
    //   weatherDesc.innerHTML=weather;
     
        
    // })
    // .catch(err=> console.log(err));
    
};



    CurrentTemperature("Dhaka");



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

