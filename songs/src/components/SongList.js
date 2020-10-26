import React from 'react';

import {connect } from 'react-redux'; // react component
class SongList extends React.Component {
    render(){

        //this.props get data from redux store in to the component

        console.log(this.props)

        return <div> SongList</div>
    }
}

//code for configuration for the connect

const mapStateToProps = (state) => {
    // turn the state things manipulating to props

    console.log(state);

    return state;


}

export default connect(mapStateToProps)(SongList);