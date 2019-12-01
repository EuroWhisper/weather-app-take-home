const axios = require('axios');
const {formatTemperature, formatDescription, getIconURL} = require('../../weather-util');

// Fetch the current weather reading for a given city.
export default async (req, res) => {
    // If the request method is a GET request
    if (req.method === 'GET') {
        // Grab the city name from the request query object.
        const city = req.query.city;

        try {
            // Attempt to fetch the weather data for the given city.
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07e1d0aa262a7054e3396ebbbdbaed73&units=metric`);
            // Format the resulting data into an object containing only necessary information.
            let weather = {
                id: result.data.id,
                location: {
                    city: result.data.name,
                    country: result.data.sys.country
                },
                temperature: formatTemperature(result.data.main.temp),
                description: formatDescription(result.data.weather[0].description),
                icon: getIconURL(result.data.weather[0].icon)
            };
            // Return the formatted weather reading.
            res.status(200).send(weather);
        } catch(err) {
            // Something went wrong, return a server error status code.
            res.status(500).send(err);
        }
    }
}
