const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=9lvkS3ctQo0cFARV408R5JuPBZbcYw5M&location='+ encodeURIComponent(address)+'&maxResults=1&thumbMaps=true'

    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }


        else if(!body.results[0].locations[0].adminArea1Type){
            callback('Unable to find location. Try another search.', undefined)
        }


        else{
            const country = body.results[0].locations[0].adminArea1
            const state =   body.results[0].locations[0].adminArea3
            const city =  body.results[0].locations[0].adminArea5
            callback(undefined, {
                latitude: body.results[0].locations[0].displayLatLng.lat,
                longitude: body.results[0].locations[0].displayLatLng.lng,
                country,
                state,
                city
            })

        }
    })

}

module.exports = geocode