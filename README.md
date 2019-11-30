#Weather App

Hello! This is the source for my Weather App take-home project.

The live app can be viewed [here](https://laurence-weather-app.herokuapp.com/)
It is hosted on a free Heroku account, so may take 10-20 seconds to load. I apologize for any inconvenience. =)

**Bonus features:**
I made it so that the user can continuously search for weather readings and have each reading displayed in a list, whilst also preventing duplicates (if you search for the same city twice, it will not display the city's data twice).
I added a button that clears all displayed weather readings (the button is only rendered when there are weather readings to show).
I created a simple REST API consisting of just one route, to fetch data from OpenWeatherMap's API.
I downloaded multiple free SVG weather icons and linked them to the OpenWeatherMap API's "icon" property.

**Please note:**
I decided to use NextJS for the app, because I saw that it is used in the workplace, comes with a CSS in JS solution which I realize is a requirement for this take-home project and also allows for quick/simple API creation.
I apologize for using window.alert() to display errors for bad input/failed get requests, I unfortunately did not have time to implement a dialog system (or loading spinners).
I opted to use functional components with the useState hook instead of class components, as I saw that this is the workplace's preference.


