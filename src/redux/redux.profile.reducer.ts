import profileActions from './redux.profile.actions.types';
import {state} from './redux.schema';

const INITIAL_STATE:state = {
    profiles: []
}

const profileReduce = (state:state = INITIAL_STATE, action: any) => {
    
    switch (action.type) {
        case profileActions.FETCH_PROFILE:
            
            return {
                profiles : [...action.payload]
                
            }

        case profileActions.REMOVE_PROFILE:
            return {
                ...state,
                
            }

        default:
            return state;

    }
}
export default profileReduce;