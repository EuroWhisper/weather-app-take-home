import WeatherReading from './weather-reading';

// WeatherList is a component that builds and displays
// a list of weather readings for various cities.
const WeatherList = (props) => {
    const weatherData = props.weatherData;
    // If there are no weather readings yet,
    // don't display anything.
    if (!weatherData || weatherData.length === 0) {
        return null;
    };

    // Otherwise, create an array of WeatherReading components
    // and render them.
    const weatherReadings = weatherData.map((weather) => {
        return <WeatherReading key={weather.id} location={weather.location} temperature={weather.temperature} description={weather.description} icon={weather.icon} />;
    });

    return weatherReadings;
};

export default WeatherList;