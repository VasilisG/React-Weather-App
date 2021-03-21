import React from 'react';

class MainWeatherItem extends React.Component {

    WEATHER_IMAGE_ENDPOINT = "https://meta-weather.now.sh//static/img/weather/";

    getWeatherStateIcon(weatherState, imageFormat){
        return this.WEATHER_IMAGE_ENDPOINT + weatherState + '.' + imageFormat;
    }

    render() {
        return (
            <div className="main-item-container">
                <div className="icon-container">
                    <img className="weather-icon" src={this.getWeatherStateIcon(this.props.data.weather_state_abbr, 'svg')} alt={this.props.data.weather_state_name}/>
                </div>
                <div className="info-container">

                </div>
            </div>
        )
    }
}

export default MainWeatherItem;