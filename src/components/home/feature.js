import React from 'react';

import image1 from '../../assets/images/portfoliopicture.PNG';

import image3 from '../../assets/images/music.PNG';
import image4 from '../../assets/images/expense.PNG';



import { Row, Col } from 'antd';

import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
    return (
        <div id="feature" className="block featureBolck bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>My Best Projects</h2>
                    <p>These are the top projects have worked on.</p>
                </div>
                <Row gutter={[16, 16]}>
                <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen/portfolio_website"><Card
               
                    hoverable
                    cover={<img alt="My Portfilio Web App" src={image1}/>}
                > 
                    <Meta title="My Portfilio Web App" description="React js design of my portfolio website"/>
                </Card></a>
                  </Col>
                  
                   <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen/music-player"><Card
                    hoverable
                    cover={<img alt="Music Player Mobile App" src={image3}/>}
                >
                    <Meta title="Music Player Mobile App" description="Designed using java"/>
                </Card></a>
                  </Col>
                   <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen/Expense-Tracker-App"><Card
                    hoverable
                    cover={<img alt="Expense Tracker Web App" src={image4}/>}
                >
                    <Meta title="Expense Tracker Web App" description="Designed using react js to tract your daily expenses"/>
                </Card></a>
                  </Col>
                   
                  
               
                </Row>

            </div>
            
        </div>
    )
}

export default AppFeature
