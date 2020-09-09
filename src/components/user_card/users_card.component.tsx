import React from 'react';
import './users_card.style.scss';
import { Card, Image, Row, Col } from 'antd';
import { StarFilled, GithubFilled, SmileFilled } from '@ant-design/icons';
import { Button } from 'antd';


export const UserCard = () => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card bordered={true} style={{ width: 300 }}>

                <div className="text-align-center round">
                    <Image className=" rounded-image"
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <hr className="margin-top-medium" />
                    <div className="text-align">
                        <h2>Profile name</h2>
                    </div>
                    <div className="margin-top-medium">
                        <div className="section ">

                            <Row>
                                <Col span={16} style={{ textAlign: 'left' }}>
                                    Total Score
                            </Col>
                                <Col span={8} className="align-icon">
                                    <span>
                                        99
                                </span>
                                    <StarFilled className="starIcon " />

                                </Col>
                            </Row>

                        </div>
                        <div className="section ">

                            <Row>
                                <Col span={16} style={{ textAlign: 'left' }}>
                                    Repositories
                            </Col>
                                <Col span={8} className="align-icon">
                                    <span>
                                        99
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
                                        99
                                </span>
                                    <SmileFilled className="smileIcon" />

                                </Col>
                            </Row>
                
                        </div>
                    </div>
                </div>
                <br/>
                {/* <hr/> */}
                <div className="text-align-center margin-top-medium">
                    <Button type="primary" danger style={{width:'100%'}}>
                         Remove
                      </Button>
                </div>
            </Card>
        </div>
    );
}