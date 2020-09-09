import React from 'react';
import './search_bar.style.scss';
import { Input, Row, Col } from 'antd';
import {fetchProfiles} from '../../redux/redux.profile.actions';
import {connect} from 'react-redux';
const { Search } = Input;


const SearchBar = (props:any) => {
    const {fetchProfiles} = props;

    return <div className="searchbar margin-top-medium">
        <div className="text-align-center searchbar-banner">
            <p>Find github profiles to compare and rank!.</p>
        </div>
        <div>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="Find a Github profile"
                        onSearch={value => fetchProfiles(value)}
                        style={{
                        width:"100%",
                        height: '4rem'
                        }}
                    />
                </Col>
            </Row>
            <div className="text-align-center" style={{marginTop:'1rem',fontStyle:'italic'}}>
            <span>
                Tip: Seperate the usernames using commas to add mulitple users
            </span>

            </div>

        </div>

    </div>
}
const mapDispatchToProps = (dispatch:any):{} =>(
    {
        fetchProfiles : (profiles:string)=>dispatch(fetchProfiles(profiles))
    }
)
export default connect(null,mapDispatchToProps)(SearchBar);
    
