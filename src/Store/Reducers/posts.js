import * as actionTyes from '../Actions/actionTypes';

const initialState = {
    posts: [],
    comments: [],
    authors: [],
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTyes.FETCH_POSTS_START:
            return {
                ...state,
                loading: true
            }
        case actionTyes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                loading: false,
                error: null
            }
        case actionTyes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.comments,
                loading: false,
                error: null
            }
        case actionTyes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;