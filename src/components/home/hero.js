import React from "react";
import { Carousel, Button } from 'antd';

const items = [
    {
      key: '1',
      title: 'Knack of building applications with front and back end operations.',
      content:'I am a full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.',
    },
    
]

function AppHero() {
    return(
        <div id="hero" className = "heroBlock">
            <Carousel>
                {items.map(item => {
                    return(
                        <div className="container-fluid" key={item.key}>
                        <div className="content">
                      
                            <h6>{item.title}</h6>
                            <p>{item.content}</p>
                            <div className ="btnHolder">
                                <Button type="primary" size= "large">Want more?</Button>
                                 <a href='tcv.pdf' download='Tilen cv.pdf'>
                            <button className='btn highlighted-btn'>Get my Resume</button>
                        </a>
                            
                            </div>

                        </div>
                        </div>
                    );
                })

                }
    
  </Carousel>
        </div>
    )
}

export default AppHero;