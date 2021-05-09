import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    post: {
        userId: 1,
        id: 1,
        title: "",
        body: ""
    },
    comments: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_FULL_POST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_FULL_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                post: action.post
            }
        case actionTypes.FETCH_FULL_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.FETCH_POST_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state;
    }
}

export default reducer;