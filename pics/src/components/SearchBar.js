import React from "react";

// Class based component inorder to handle a state

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);

    }

    state= { term: ''};

    onInputClick(event) {
        console.log('input is clicked');

    }

    render() {
        return (<div className= "ui segment">
        <form className= "ui form">
            <div className= "field">

        <label> Image Search </label>
            <input type = "text" value={this.state.term} onClick={this.onInputClick} onChange= {(e) => this.setState({term: e.target.value.toUpperCase()})} />
            {/*// can also be called*/}
            {/*    // onChange= {(e) => console.log(e.target.value)}*/}
            </div>
        </form>
                </div>

        );
    }
}

export default SearchBar;