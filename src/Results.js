import React from 'react';
import MainWeatherItem from './MainWeatherItem';

class Results extends React.Component {

    render() {
        return (
            <div>
                {this.props.forecasts.length ? (
                    <div className="forecasts-container">
                        <MainWeatherItem  data={this.props.forecasts[0]}/>
                    </div>
                ) : (
                    <div className="results-container no-data">
                        <p className="no-data-info">No forecast data to display.</p>
                    </div>
                )}
            </div>
        )  
    }
}

export default Results;