const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=59de1b2db93f339e530ccc50e5063b1f&units=metric'
    
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback("Can't connect to weather service./Used https instead of http", undefined)
        }else if(body.message){
            callback("Invalid coordinates, "+body.message, undefined)
        }else{
            callback(undefined, body.weather[0].description + ". It is currently " + body.main.temp + " outside. It feels like " + body.main.feels_like + " out.")
        }
    })

}


module.exports = forecast