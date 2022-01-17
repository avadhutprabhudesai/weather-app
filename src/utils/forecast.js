const request = require('postman-request');

function forecast(long, lat) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=61df80dc24ff5ea784fcf8421e467639&units=metric`;
  return new Promise((res, rej) => {
    request({ url: weatherUrl, json: true }, (err, response) => {
      if (err) {
        rej('Unable to connect to weather service');
      } else if (response.statusCode !== 200) {
        rej(`Error in weather service: ${response.body.message}`);
      } else {
        res(response.body.current);
      }
    });
  });
}

module.exports = forecast;
