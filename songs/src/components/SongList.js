import React from 'react';

import {connect } from 'react-redux'; // react component
import {selectSong} from "../actions";

class SongList extends React.Component {

    renderList(){
        //return blob of songlist

        return this.props.songs.map((song) => {
            return (
                <div className="item" key = {song.title}>
                    <div className="right floated content">
                        <button className = "ui button primary"
                        onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className = "content">{song.title}</div>
                </div>
            )
        })
    }


    render(){

        //this.props get data from redux store in to the component
        console.log(this.props)

        console.log(this.props.songs)

        return <div className="ui divided list"> {this.renderList()}</div>
    }
}

//code for configuration for the connect

const mapStateToProps = (state) => {
    // turn the state things manipulating to props

    //calls on every state change.



    console.log(state);

    return state;


}

export default connect(mapStateToProps, {selectSong:selectSong})(SongList);