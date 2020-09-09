import React from 'react';
import './users_grid.style.scss';
import {Row, Col} from 'antd';
import  UserCard  from '../user_card/users_card.component';
import {connect} from 'react-redux';
import {state} from '../../redux/redux.schema'
import {withRouter} from 'react-router-dom';


const getRating = (profileData:any)=>{
    let {public_gists,public_repos,followers,following} = profileData
    return (3*Number(followers) - 1.5*Number(following)) + 0.5*Number(public_repos) + 0.75*Number(public_gists);
}

const UsersGrid = (props:any)=>{
    
    let x:[] = props['profiles']['profiles']
    x.sort((a,b)=>{
        let y = getRating(a);
        let z = getRating(b);
        return z-y;
       
    })

    return (
        <div>
            <h2>Profiles Ranked</h2>

            <Row>
                {
                    x.length !== 0 ?
                    x.map((values,index)=>{
                        return(
                            <Col span={6} key={values['id']}>
                            <UserCard user={values} index={index+1}></UserCard>
                            </Col>
                        )
                    }) : <p> Search Github Profiles</p>
                }
               
               

            </Row>
        </div>
    );
}
const mapStateToProps = (State:state)=>({
    profiles :State.profiles
})
export default withRouter(connect(mapStateToProps)(UsersGrid));