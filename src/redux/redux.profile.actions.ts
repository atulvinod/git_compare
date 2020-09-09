import profileActions from './redux.profile.actions.types';

export const setProfiles = (profiles:any)=>{
    return{
        payload:[...profiles],
        type : profileActions.FETCH_PROFILE
    }
}
export const removeProfile = (profiles:string)=>{
    return {
        payload :profiles,
        type:profileActions.REMOVE_PROFILE
    }
}

export const fetchProfiles =(query:string)=>{
    return (dispatch:any)=>{
        let promises  = query.split(',').map(value=>{
            return new Promise((resolve,reject)=>{
                fetch(`https://api.github.com/users/${value}`).then(result=>result.json()).then(array=>resolve(array)).catch(error=>reject(error));

            })
        })
        Promise.all(promises).then(profileData=>{
            dispatch(setProfiles(profileData));

        });
    }
}
