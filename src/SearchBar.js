import React from 'react'

class SearchBar extends React.Component {

    // https://www.weatherbit.io/pricing
    META_WEATHER_URL = "https://www.metaweather.com/api/location/search/?query=";

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
            try {
                fetch(this.META_WEATHER_URL + this.state.city)
                .then(response => {
                    if(response.length !== 0){
                        response = response.json();
                        console.log(response);
                    }
                    
                })
                .then(data => {
                    console.log(data);
                });
            }
            catch(err){
                console.log(err);
            }
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