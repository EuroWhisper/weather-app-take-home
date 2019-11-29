const WeatherReading = (props) => {
    return (
        <div>
            <div className="weather-reading">
                <img className="weather-icon" src={props.icon} />
                <div className="weather-info">
                    <h3>{`${props.location.city}, ${props.location.country}`}</h3>
                    <h3>{props.temperature}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <style jsx>{`
                .weather-reading {
                    margin-bottom: 24px;
                    display: flex;
                    box-sizing: border-box;
                    padding: 40px;
                    border-color: #E2E2E2;
                    border-style: solid;
                    border-width: 1px;
                    box-shadow: 0px 3px 8px;
                }
                .weather-icon {
                    width: 96px;
                }
                .weather-info {
                    margin-left: 48px;
                }
            `}</style>
        </div>
    );
};

export default WeatherReading;