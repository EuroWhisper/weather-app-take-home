const axios = require('axios');
const {formatTemperature, formatDescription, getIconURL} = require('../../weather-util');

// Get the current weather for a given city
export default (req, res) => {
    if (req.method === 'GET') {
        const city = req.query.city;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07e1d0aa262a7054e3396ebbbdbaed73&units=metric`).then((result) => {
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
            res.status(200).send(weather);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }
};
