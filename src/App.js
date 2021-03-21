import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'forecasts' : [],
      'country' : '',
      'city' : ''
    };
    this.getForecasts = this.getForecasts.bind(this);
  }

  getForecasts(forecasts, country, city){
    this.setState({
      'forecasts' : forecasts,
      'country' : country,
      'city' : city
    });
  }

  render(){
    return (
      <>
        <p className="app-title">React Weather</p>
        <div className="app-content">
          <SearchBar callBack={this.getForecasts}/>
          <Results forecasts={this.state.forecasts} country={this.state.country}/>
        </div>
      </>
    );
  }
}

export default App;
