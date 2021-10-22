import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';



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
                <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen"><Card
               
                    hoverable
                    cover={<img alt="Modern Design" src={image1}/>}
                > 
                    <Meta title="My Portfilio Web App" description="www.instagram.com"/>
                </Card></a>
                  </Col>
                   <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen"><Card
                    hoverable
                    cover={<img alt="clean design" src={image2}/>}
                >
                    <Meta title="E-Commerce Web App" description="www.instagram.com"/>
                </Card></a>
                  </Col>
                   <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen"><Card
                    hoverable
                    cover={<img alt="great support" src={image3}/>}
                >
                    <Meta title="Music Player Mobile App" description="www.instagram.com"/>
                </Card></a>
                  </Col>
                   <Col xs={{ span: 24 }}sm={{ span: 12 }} md={{ span: 8 }}><a href="https://github.com/otienotilen"><Card
                    hoverable
                    cover={<img alt="easy customise" src={image4}/>}
                >
                    <Meta title="Expense Tracker Web App" description="www.instagram.com"/>
                </Card></a>
                  </Col>
                   
                  
               
                </Row>

            </div>
            
        </div>
    )
}

export default AppFeature
