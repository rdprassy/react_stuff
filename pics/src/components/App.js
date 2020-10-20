import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


// const App = () => {
//     return <div className= "ui container" style={{ marginTop: '10px'}}><SearchBar/></div>
// };

class App extends React.Component{

    state = { images: []}

    onSearchSubmit= async (term) => {
        console.log(term);

        const response = await unsplash.get('/search/photos', {
            params: {query: term},
          
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
                <ImageList images={this.state.images} />
            </div>
        );
    }
}



export default App;