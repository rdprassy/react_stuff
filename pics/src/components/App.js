import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";


// const App = () => {
//     return <div className= "ui container" style={{ marginTop: '10px'}}><SearchBar/></div>
// };

class App extends React.Component{

    state = { images: []}

    onSearchSubmit= async (term) => {
        console.log(term);

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
           headers: {
               Authorization: 'Client-ID hZNxX1BSxDzpmkUkFSG-tNgQoaHQO-IIvqeKDZEsM-o'
           }
        });

        console.log(response.data.results)
        console.log("lets update the state as the rest call is succesfull")

        console.log(this)

        this.setState({images: response.data.results})



        // write code for

      //this.diffAPICall()

        // another way of calling is async and wait

    }

    diffAPICall() {

        console.log("inside the diff api call ")

    }

    render() {
        return (
            <div className= "ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}



export default App;