import React from "react";
import ReactDOM from 'react-dom';



class App extends React.Component {
  // React. Component provides all these constructor, render and setState.
  // not specific to react.
    constructor(props) {
        super(props);
        // try to initialise your state

        // let it be initialised with null
        // only direct initialisation with this. on states
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position)=> {console.log(position); this.setState({ lat: position.coords.latitude})},
            (err) => {console.log(err); this.setState({errorMessage: err.message} )}
        );



    }
    // react requirement for class components.
    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position)=> console.log(position),
            (err) => console.log(err)
        );

        return <div> Latitude: {this.state.lat} <br/>
        Error: { this.state.errorMessage}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))


