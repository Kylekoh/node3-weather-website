const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e7339325a1b2a537075e71d117706c3e/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out and ' + body.currently.dewPoint + ' dewpoint. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast