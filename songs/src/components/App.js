import React from 'react';
import {selectSong} from "../actions"; // named export on curly brackets.
import SongList from "./SongList";

const App = () => {
    return (<div> <SongList/> </div>);
};

export default App;