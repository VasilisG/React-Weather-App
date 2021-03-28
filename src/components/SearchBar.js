import React from 'react';
import { META_WEATHER_ENDPOINT, META_WEATHER_LOCATION_ENDPOINT } from './Constants'; 

class SearchBar extends React.Component {

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
            this.props.setLoadingStatus(1);
            fetch(META_WEATHER_ENDPOINT + this.state.city)
            .then(response => response.json())
            .then(data => {
                if(data.length){
                    fetch(META_WEATHER_LOCATION_ENDPOINT + data[0]['woeid'] + '/')
                    .then(newResponse => newResponse.json())
                    .then(newData => {
                        this.props.callBack(newData['consolidated_weather'], newData['parent']['title'], newData['title']);
                        this.props.setLoadingStatus(0);
                    });
                }
                else {
                    this.props.callBack([], '', '');
                    this.props.setLoadingStatus(0);
                }
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