import React from 'react';
import SearchBar from './SearchBar';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <>
        <p className="app-title">React Weather</p>
        <div className="app-content">
          <SearchBar/>
        </div>
      </>
    );
  }
}

export default App;
