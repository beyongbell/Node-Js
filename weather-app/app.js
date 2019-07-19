const request = require('request')

const url = 'https://api.darksky.net/forecast/b7c80b4c6f7d590e249aef8766a7ff6f/37.8267,-122.4233'

request({ url: url, json: true }, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find Location!')
    } else {
        console.log(body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
})


