import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('About to fetch posts')
    await dispatch(fetchPosts());
    console.log('fetched posts')
}

export const fetchPosts = () =>
    async  dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data })
    };


// export const fetchUser = (id) => async  dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data })
// }


//memoized fetchUser
export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id,dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data })
})

// not going to work too as memoizing returns the stored function which calls the api request again.
// export const fetchUser = function(id) {
//     return async  function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({type: 'FETCH_USER', payload: response.data})
//     }
// };

    // as we use asynch await on success it returns request object which isn't a plain js object
    //By the time our action gets to a reducer, we won't have fetched our data.
    // to solve such issues we use redux-thunk middle ware helps action creators can return action objects or return functions

    // redux-thunk allows you to manually create a dispatch unlike connect. (await for the response obj is ready from api

    // gives unlimited power on react store with getState and dispatch function over arguments

