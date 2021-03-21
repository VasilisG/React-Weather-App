import React from 'react';

class Results extends React.Component {

    render() {
        return (
            <div>
                {this.props.forecasts.length ? (
                    <div>
                        <p>Elements exist.</p>
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