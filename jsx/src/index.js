// Import the React and React DOM Library

import React from 'react';
// import <varible_stored_library' form 'library'
import ReactDOM from 'react-dom';


// Create a react component
const App = function(){  // =() => {

    return <div> Hi there!</div>;
};


// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));
//calling the app react component and asking it to be shown in the root div which is present inside the
//public folder with the filename index.html