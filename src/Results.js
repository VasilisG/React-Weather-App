import React from 'react';
import MainWeatherItem from './MainWeatherItem';
import AdditionalWeatherItem from './AdditionalWeatherItem';

class Results extends React.Component {

    breakPoints = [
        {width: 767, itemsToShow : 3, itemsToScroll : 1}
    ];

    render() {
        return (
            <div>
                {this.props.status ? (
                    <div className="loading-container">
                        <div className="loading-bar"></div>
                        <div className="loading-bar"></div>
                        <div className="loading-bar"></div>
                    </div>
                ) : (
                    this.props.forecasts.length ? (
                        <div className="results-container">
                            <div className="forecasts-container">
                                <div className="forecasts-inner-container">
                                    <MainWeatherItem  data={this.props.forecasts[0]} city={this.props.city} country={this.props.country}/>
                                </div>
                            </div>
                            <div className="additional-container">
                                {this.props.forecasts.slice(1).map((elem, index) => <AdditionalWeatherItem key={index} data={elem} nextDay={index+1}/>)}
                            </div>
                        </div>
                    ) : (
                        <div className="results-container no-data">
                            <p className="no-data-info">No forecast data to display.</p>
                        </div>
                    )
                )}
            </div>
        )  
    }
}

export default Results;