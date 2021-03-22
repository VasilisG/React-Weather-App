import React from 'react';

class AdditionalWeatherItem extends React.Component {

    WEATHER_IMAGE_ENDPOINT = "https://meta-weather.now.sh/static/img/weather/";
    lookup = {0 : 'Sunday', 1 : 'Monday', 2 : 'Tuesday', 3 : 'Wednesday', 4 : 'Thursday', 5 : 'Friday', 6 : 'Saturday' };

    getDay(){
        var date = new Date();
        date.setDate(date.getDate() + this.props.nextDay);
        return this.lookup[date.getDay()];
    }

    getWeatherStateIcon(){
        return this.WEATHER_IMAGE_ENDPOINT + this.props.data.weather_state_abbr + '.svg';
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