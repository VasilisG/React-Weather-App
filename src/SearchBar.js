import React from 'react'

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'city' : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            'city' : event.target.value
        });
    }

    render(){
        return (
            <div className="element-container search-container">
                <form className="search-form city-form">
                    <input type="text" className="search-field city-field" placeholder="Type city..." onChange={this.handleChange}/>
                    <button type="submit" name="Search" className="search-button city"></button>
                </form>
            </div>
        );
    }
}

export default SearchBar;