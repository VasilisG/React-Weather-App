import React from 'react';
import { WEATHER_IMAGE_ENDPOINT } from './Constants';

class MainWeatherItem extends React.Component {

    getWeatherStateIcon(){
        return WEATHER_IMAGE_ENDPOINT + this.props.data.weather_state_abbr + '.svg';
    }

    getAltName(){
        return this.props.data.weather_state_name;
    }

    render() {
        return (
            <div className="main-item-container">
                <div className="icon-container">
                    <img className="weather-icon" src={this.getWeatherStateIcon()} alt={this.getAltName()}/>
                </div>
                <div className="info-container">
                    <p className="today">Today</p>
                    <div className="city-info">
                        <p className="city">{this.props.city}</p>
                        <span className="country">{this.props.country}</span>
                    </div>
                    <p className="temperature">Temperature: <span className="celsius">{Math.round(this.props.data.the_temp)}<sup className="celsius-sign">o</sup>C</span></p>
                </div>
            </div>
        )
    }
}

export default MainWeatherItem;