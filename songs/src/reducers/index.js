const songsReducer = () => {

    return [{ title: 'No Scrubs',duration: '4:05'}, {title: 'Macarena',duration: '2:30' },{title: 'All Star' ,duration: '4:45'}
    ];
};



const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type == 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}