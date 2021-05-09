import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const fetchFullPostStart = () => {
    return {
        type: actionTypes.FETCH_FULL_POST_START
    }
}

export const fetchFullPostSuccess = (post) => {
    return {
        type: actionTypes.FETCH_FULL_POST_SUCCESS,
        post: post
    }
}

export const fetchFullPostError = (error) => {
    return{
        type: actionTypes.FETCH_FULL_POST_ERROR,
        error: error
    }
}

export const fetchFullPost = (id) => {
    return dispatch => {
        dispatch(fetchFullPostStart())
        axios.get('/posts/' + id)
            .then(response => {
                dispatch(fetchFullPostSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFullPostError(error));
            });
    }
}

export const fetchPostCommentsSuccess = comments => {
    return{
        type: actionTypes.FETCH_POST_COMMENTS_SUCCESS,
        comments: comments
    }
}

export const fetchPostComments = id => {
    return dispatch => {
        axios.get('/posts/' + id + '/comments')
            .then(response => {
                dispatch(fetchPostCommentsSuccess(response.data));
            });
    }
}