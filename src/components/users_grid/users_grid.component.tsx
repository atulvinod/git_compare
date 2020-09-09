import React from 'react';
import './users_grid.style.scss';

import {Row, Col} from 'antd';
import { UserCard } from '../user_card/users_card.component';
export const UsersGrid = ()=>{
    return (
        <div>
            <h2>Profiles Ranked</h2>

            <Row>
                <Col span={4}>
                    <UserCard/>
                </Col>

            </Row>
        </div>
    );
}