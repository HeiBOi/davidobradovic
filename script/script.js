var windSpeed = document.querySelector('.wind_speed')
var temp = document.querySelector('.temp')
var temp_sign = document.querySelector('.temp_sign')

fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.737259&lon=18.567490&appid=f46de208fdd5f89c72e38e3cce579339&units=metric')
.then(responese => responese.json())
.then(data => {
    windSpeed.innerHTML = data['wind']['speed']
    temp.innerHTML = data['main']['temp']
    if(data['main']['temp'] <= 0) {
        temp_sign.innerHTML = '<i class="fa-solid fa-temperature-arrow-down"></i>'
    } else {
        temp_sign.innerHTML = '<i class="fa-solid fa-temperature-arrow-up"></i>'
    }
})