import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";


// const App = () => {
//     return <div className= "ui container" style={{ marginTop: '10px'}}><SearchBar/></div>
// };

class App extends React.Component{

    onSearchSubmit(term){
        console.log(term);

        // write code for
    }

    render() {
        return (
            <div className= "ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/></div>
        );
    }
}



export default App;