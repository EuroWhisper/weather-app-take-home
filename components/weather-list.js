import WeatherReading from './weather-reading';

const WeatherList = (props) => {
    const weatherData = props.weatherData;
    if (!weatherData || weatherData.length === 0) {
        return null;
    };

    const weatherReadings = weatherData.map((weather) => {
        return <WeatherReading key={weather.id} location={weather.location} temperature={weather.temperature} description={weather.description} icon={weather.icon} />;
    });

    return weatherReadings;
};

export default WeatherList;