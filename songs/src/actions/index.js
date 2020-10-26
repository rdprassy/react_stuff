// create action creator which returns action
//named export
export const selectSong = (song) => {
    //return an action

    return {
      type: 'SONG_SELECTED',
        payload: song
    };
};

//default export
//export default selectSong;