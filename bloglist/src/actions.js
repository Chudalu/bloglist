import {
    REQUEST_BLOGS_FAILED,
    REQUEST_BLOGS_PENDING,
    REQUEST_BLOGS_SUCCESS
} from './constants.js'

export const  requestBlogs =() =>  (dispatch) => {
    dispatch({type: REQUEST_BLOGS_PENDING});
    fetch('https://epower.ng/wp-json/wp/v2/posts')
        .then(response=> response.json())
        .then(data => dispatch({type: REQUEST_BLOGS_SUCCESS, payload: data}))
        .catch(error=> dispatch({type: REQUEST_BLOGS_FAILED, payload: error}))
}
