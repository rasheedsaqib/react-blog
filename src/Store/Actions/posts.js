import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const fetchPostsStart = () => {
    return{
        type: actionTypes.FETCH_POSTS_START
    }
}

export const fetchPostsSuccess = (posts) => {
    return{
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchError = (error) => {
    return{
        type: actionTypes.FETCH_ERROR,
        error: error
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get('/posts')
            .then(response => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError(error));
            });
    }
}

export const fetchCommentsSuccess = comments => {
    return{
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: comments
    }
}

export const fetchComments = () => {
    return dispatch => {
        axios.get('/comments')
            .then(response => {
                dispatch(fetchCommentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError());
            });
    }
}