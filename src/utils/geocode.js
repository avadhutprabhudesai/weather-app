const request = require('postman-request');

function geoCoding(address) {
  const geoCodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYXZhZGh1dHByYWJodWRlc2FpIiwiYSI6ImNreWk1MGx0ZTI4dnUycHA4cndtaGlqMGgifQ.26EN4kWi0zggzt0dCjLr-w&limit=1&fuzzyMatch=false&types=place`;

  return new Promise((res, rej) => {
    request({ url: geoCodingUrl, json: true }, (err, response) => {
      if (err) {
        rej('Unable to connect to geocoding service');
      } else if (response.statusCode !== 200) {
        rej(`Error in geocoding: ${response.body.message}`);
      } else if (!response.body.features.length) {
        rej('\nUnable to fetch coordinates. Try a different search');
      } else {
        res(response.body.features[0].center);
      }
    });
  });
}

module.exports = geoCoding;
