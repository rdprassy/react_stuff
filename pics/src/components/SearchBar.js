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

    onFormSubmit = (event) => {
        event.preventDefault()
      console.log(this.state.term) //returns error but why

        this.props.onSubmit(this.state.term);
    }


    render() {
        return (<div className= "ui segment">
        <form className= "ui form" onSubmit={this.onFormSubmit}>

            {/*other way of solving the this problem*/}
            {/*<form onSubmit={event => this.onFormSubmit(event)}*/}


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