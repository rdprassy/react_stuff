import React from 'react';
import {selectSong} from "../actions"; // named export on curly brackets.
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
    return (
        <div className= "ui container grid">
            <div className= "ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>)

};

export default App;