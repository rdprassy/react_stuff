// Import the React and React DOM Library

import React from 'react';
// import <varible_stored_library' form 'library'
import ReactDOM from 'react-dom';


// Create a react component
const App  =() => {

    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type = "text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                Submit
            </button>
        </div>);
};


// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));
//calling the app react component and asking it to be shown in the root div which is present inside the
//public folder with the filename index.html