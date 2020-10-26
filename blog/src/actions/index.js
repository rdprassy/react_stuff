import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async() => {
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };

    // as we use asynch await on success it returns request object which isn't a plain js object
    //By the time our action gets to a reducer, we won't have fetched our data.
};