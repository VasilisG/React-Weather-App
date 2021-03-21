import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'forecasts' : []
    };
    this.getForecasts = this.getForecasts.bind(this);
  }

  getForecasts(forecasts){
    this.setState({
      'forecasts' : forecasts
    });
    console.log(this.state.forecasts);
  }

  render(){
    return (
      <>
        <p className="app-title">React Weather</p>
        <div className="app-content">
          <SearchBar callBack={this.getForecasts}/>
          <Results forecasts={this.state.forecasts}/>
        </div>
      </>
    );
  }
}

export default App;
