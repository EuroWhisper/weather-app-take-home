import WeatherReading from "./components/weather-reading";

// Round the temperature reading to the nearest whole number
// and convert it to a string appended with '°C'.
export const formatTemperature = (temp) => {
    return Math.round(temp) + '°C';
};

// Capitalize the first letter of each word in the description.
export const formatDescription = (description) => {
    let lowerCaseDescription = description.toLowerCase();
    let splitDescription = lowerCaseDescription.split(' ');
    let formattedDescription = splitDescription.map((word) => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
    return formattedDescription;
};

// Get the URL of the corresponding weather icon.
export const getIconURL = (icon) => {
    // 1. Trim the day/night indicator from the string
    // as our icon set does not have separate day/night icons.
    let trimmedIcon = icon.substr(0, 2);
    // 2. Construct the icon URL.
    let iconURL = `/img/weather-icons/${trimmedIcon}.svg`;
    return iconURL;
};

// Check to see if the fetched weather reading already exists
// in the list of weather readings (prevent duplicates);
export const isCityWeatherListed = (fetchedWeather, weatherList) => {
    // For each item in the list of weather readings
    for (let i=0; i < weatherList.length; i++) {
        // Check if the id of the most recently fetched weather item
        // matches the id of the currently selected weather reading
        if (weatherList[i].id === fetchedWeather.id) {
            return true;
        }
    }
    return false;
};