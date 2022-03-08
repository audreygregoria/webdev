let weather = {
    apiKey: "86f5c4cc605a9acaa7c73b773d78955d", 
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey).then((reponse) => Response.json()).then(data => {
            console.log(data);
            this.displayWeather(data); 
        })
    }, 
    displayWeather: function(data) {
        const { name } = data; 
        const { icon, description } = data.weather[0]; 
        const { temp } = data.main; 
        const { country } = data.sys; 
        console.log(name, icon, description, temp);
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" 
        document.querySelector(".city").innerText = name + ", " + country; 
        document.querySelector(".temp").innerText = temp + " F"; 
    }, 
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}; 
document.querySelector.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search(); 
    }
});
weather.fetchWeather("berkeley"); 