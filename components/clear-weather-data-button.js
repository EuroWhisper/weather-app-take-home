const ClearWeatherDataButton = (props) => {
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