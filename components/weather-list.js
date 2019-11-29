import WeatherReading from './weather-reading';

const WeatherList = (props) => {
    console.log(props.weatherData);
    const weatherData = props.weatherData;
    if (!weatherData || weatherData.length === 0) {
        return null;
    };

    const weatherReadings = weatherData.map((weather) => {
        console.log(weather + ' test');
        return <WeatherReading key={weather.id} location={weather.location} temperature={weather.temperature} description={weather.description} icon={weather.icon} />;
    });

    return weatherReadings;
};

export default WeatherList;