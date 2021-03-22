import React from 'react';

class MainWeatherItem extends React.Component {

    WEATHER_IMAGE_ENDPOINT = "https://meta-weather.now.sh//static/img/weather/";

    getWeatherStateIcon(imageFormat){
        console.log(this.props);
        return this.WEATHER_IMAGE_ENDPOINT + this.props.data.weather_state_abbr + '.' + imageFormat;
    }

    getAltName(){
        return this.props.data.weather_state_name;
    }

    render() {
        return (
            <div className="main-item-container">
                <div className="icon-container">
                    <img className="weather-icon" src={this.getWeatherStateIcon('svg')} alt={this.getAltName()}/>
                </div>
                <div className="info-container">
                    <p className="today">Today</p>
                    <div class="city-info">
                        <p className="city">{this.props.city}</p>
                        <span className="comma"> , </span>
                        <span className="country">{this.props.country}</span>
                    </div>
                    <p className="temperature">Temperature: <span className="celsius">{Math.round(this.props.data.the_temp)}<sup className="celsius-sign">o</sup>C</span></p>
                </div>
            </div>
        )
    }
}

export default MainWeatherItem;