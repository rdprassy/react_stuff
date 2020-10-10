import React from "react";
import ReactDOM from 'react-dom';



class App extends React.Component {

  // not specific to react.
    constructor(props) {
        super(props);
        // try to initialise your state

        // let it be initialised with null
        this.state = {lat: null};
    }
    // react requirement for class components.
    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position)=> console.log(position),
            (err) => console.log(err)
        );

        return <div> Latitude:  </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))


