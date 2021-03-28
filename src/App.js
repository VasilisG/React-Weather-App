import React from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'forecasts' : [],
      'country' : '',
      'city' : '',
      'loading' : 0
    };
    this.getForecasts = this.getForecasts.bind(this);
    this.setLoadingStatus = this.setLoadingStatus.bind(this);
  }

  getForecasts(forecasts, country, city){
    this.setState({
      'forecasts' : forecasts,
      'city' : city,
      'country': country
    });
  }

  setLoadingStatus(status){
    this.setState({
      'loading' : status
    });
  }

  render(){
    return (
      <>
        <p className="app-title">React Weather</p>
        <div className="app-content">
          <SearchBar callBack={this.getForecasts} setLoadingStatus={this.setLoadingStatus}/>
          <Results forecasts={this.state.forecasts} city={this.state.city} country={this.state.country} status={this.state.loading}/>
        </div>
      </>
    );
  }
}

export default App;
