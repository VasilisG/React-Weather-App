import React from 'react'

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'city' : ''
        }
    }

    render(){
        return (
            <div className="element-container search-container">
                <div className="search-form city-form">
                    <input type="text" className="search-field city-field" placeholder="Type city..."/>
                    <button type="submit" name="Search" value="Search" className="search-button city">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;