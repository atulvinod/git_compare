import React from 'react';
import './users_card.style.scss';
import { Card, Image, Row, Col, Button } from 'antd';
import {  GithubFilled, SmileFilled } from '@ant-design/icons';



export const UserCard = (props: any) => {
    let { user, index } = props;

    return (
        <div className="site-card-border-less-wrapper">
            <Card bordered={true} style={{ width: 300, position: 'relative' }}>

                <div className="rounded-image rank">
                    <span>{index}</span>
                </div>

                <div className="text-align-center round">
                    <Image className=" rounded-image"
                        width={200}
                        src={user['avatar_url']}
                    />
                    <hr className="margin-top-medium" />
                    <div className="text-align">
                        <h2>{user['login']}</h2>
                    </div>
                    <div className="margin-top-medium">
                        <div className="section ">

                            <Row>
                                <Col span={16} style={{ textAlign: 'left' }}>
                                    Repositories
                            </Col>
                                <Col span={8} className="align-icon">
                                    <span>
                                        {user['public_repos']}
                                    </span>
                                    <GithubFilled className="gitIcon" />

                                </Col>
                            </Row>

                        </div>
                        <div className="section ">
                            <Row>
                                <Col span={16} style={{ textAlign: 'left' }}>
                                    Followers
                            </Col>
                                <Col span={8} className="align-icon">
                                    <span>
                                        {user['followers']}
                                    </span>
                                    <SmileFilled className="smileIcon" />

                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
                <br />
                {/* <hr/> */}
                <div className="text-align-center margin-top-medium">


                    <Button type="primary" danger style={{ width: '100%' }}>
                        Remove
                      </Button>
                    <br />
                    <div className="margin-top-medium">
                        <a href={user['html_url']} target="_blank">
                            <GithubFilled style={{ fontSize: '2.5rem' }} />
                        </a>
                    </div>


                </div>
            </Card>
        </div>
    );
}