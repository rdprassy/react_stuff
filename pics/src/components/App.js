import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";


// const App = () => {
//     return <div className= "ui container" style={{ marginTop: '10px'}}><SearchBar/></div>
// };

class App extends React.Component{

    onSearchSubmit(term){
        console.log(term);

        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
           headers: {
               Authorization: 'Client-ID hZNxX1BSxDzpmkUkFSG-tNgQoaHQO-IIvqeKDZEsM-o'
           }
        }).then((response) => {
            console.log(response.data.results)
        })

        // write code for

      this.diffAPICall()

        // another way of calling is async and wait

    }

    diffAPICall() {

        console.log("inside the diff api call ")

    }

    render() {
        return (
            <div className= "ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/></div>
        );
    }
}



export default App;