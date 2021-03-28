import React from 'react';
import { DAY_LOOKUP, WEATHER_IMAGE_ENDPOINT } from './Constants';

class AdditionalWeatherItem extends React.Component {

    getDay(){
        var date = new Date();
        date.setDate(date.getDate() + this.props.nextDay);
        return DAY_LOOKUP[date.getDay()];
    }

    getWeatherStateIcon(){
        return WEATHER_IMAGE_ENDPOINT + this.props.data.weather_state_abbr + '.svg';
    }

    render() {
        return (
            <div className="additionalItem">
                <p className="weekday">{this.getDay()}</p>
                <img className="additional-weather-icon" src={this.getWeatherStateIcon()} alt={this.props.data.weather_state}/>
                <p className="celsius">{Math.round(this.props.data.the_temp)}<sup className="celsius-sign">o</sup>C</p>
            </div>
        )
    }
}

export default AdditionalWeatherItem;