// ClearWeatherDataButton is a component that displays a button
// that deletes all of the weather readings when pressed.
const ClearWeatherDataButton = (props) => {
    // Display the button if there is at least one weather reading
    // being displayed.
    if (props.weatherDataLength > 0) {
        return (
        <div>
            <button onClick={props.handleClick}>Clear weather readings</button>
            <style jsx>{`
                button {
                    font-size: 16px;
                    height: 48px;
                    background-color: #dc3545;
                    color: white;
                    border-style: none;
                    width: 256px;
                }
            `}</style>
        </div>
        );
    }
    return null;
};

export default ClearWeatherDataButton;