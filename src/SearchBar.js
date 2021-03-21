import React from 'react'

class SearchBar extends React.Component {

    // https://github.com/thebuilder/meta-weather-proxy
    META_WEATHER_URL = "https://meta-weather.now.sh/api/location/search/?query=";

    constructor(props){
        super(props);
        this.state = {
            'city' : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            'city' : event.target.value
        });
    }

    handleClick(event){
        if(this.state.city.length >= 3){
            fetch(this.META_WEATHER_URL + this.state.city)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        }
        event.preventDefault();
    }

    render(){
        return (
            <div className="element-container search-container">
                <form className="search-form city-form">
                    <input type="text" className="search-field city-field" placeholder="Type city..." onChange={this.handleChange}/>
                    <button type="submit" name="search" className="search-button city" onClick={this.handleClick}></button>
                </form>
            </div>
        );
    }
}

export default SearchBar;