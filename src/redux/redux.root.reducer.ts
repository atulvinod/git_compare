import {combineReducers} from 'redux';
import profileReducer from './redux.profile.reducer';
export default combineReducers({
    profiles : profileReducer
})