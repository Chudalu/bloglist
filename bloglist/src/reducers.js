import {
    REQUEST_BLOGS_FAILED,
    REQUEST_BLOGS_PENDING,
    REQUEST_BLOGS_SUCCESS
} from './constants.js'

const initialStateBlogs = {
    isPending: false,
    blogs: [],
    error: ''

}

export const requestBlogs = (state=initialStateBlogs, action={}) => {
    switch (action.type){
        case REQUEST_BLOGS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_BLOGS_SUCCESS:
            return Object.assign({}, state, {blogs: action.payload, isPending: false})
        case REQUEST_BLOGS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}