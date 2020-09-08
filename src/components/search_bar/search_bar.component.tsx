import React from 'react';
import './search_bar.style.scss';
import { Input, Row, Col, Slider } from 'antd';

const { Search } = Input;


export const SearchBar = () => {
    return <div className="searchbar margin-top-medium">
        <div className="text-align-center searchbar-banner">
            <p>Find github profiles to compare and rank!.</p>
        </div>
        <div>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="Find a Github profile"
                        onSearch={value => console.log(value)}
                        style={{
                        width:"100%",
                        height: '4rem'
                        }}
                    />
                </Col>
            </Row>

        </div>

    </div>
}