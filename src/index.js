const forecast = require('./utils/forecast');
const geoCoding = require('./utils/geocode');

const yargs = require('yargs');
const {
  argv: { city },
} = yargs(process.argv.slice(2));

(async function () {
  try {
    const [long, lat] = await geoCoding(city);

    const {
      temp,
      weather: [{ main, description }],
    } = await forecast(long, lat);
    console.log(
      `Weather will be ${description}. ${main} with temperature ${temp}`
    );
  } catch (error) {
    console.log('\n\n');
    console.log(error);
  }
})();
