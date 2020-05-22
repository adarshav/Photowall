import { combineReducers } from 'redux';

import _posts from '../data/data';

// here the postReducer is for managing the state of posts,now we have to manage the reducer for commentsit will be done below
function posts(state = _posts, action) {
    console.log(action.type);

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        
        case 'ADD_POST': return [...state, action.post]

        case 'LOAD_POSTS': return action.posts

        default: return state;
    }
}
// reducer for comments
function comments(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // this if works if comments state is undefined that means if no comment is been typed it will be placed
            if(!state[action.postId]) {
                return { ...state, [action.postId]:[action.comment] }
            } else {
                return { ...state, [action.postId]: [...state[action.postId], action.comment]}
            }   
        
        case 'LOAD_COMMENTS': return action.comments
        
        default: return state;
    }
    return state;
}
// when we have more than one reducer in RootReducer, we should combine those reducers and assign it to the  rootReducer and place it in store
const rootReducer = combineReducers({posts, comments})
// here ...state is a spread operator which means every single element in a state
export default rootReducer;