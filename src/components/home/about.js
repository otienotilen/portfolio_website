import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
      key: '1',
      title: 'Specialties',
      content:["(1) Full Stack web and mobile development",<br>
      
      </br>  
               ,"(2) Interactive Front End as per the design", <br>
               </br>
               , " (3) React and React Native", <br>
               </br>
               ," (4) Redux for State Mnanagement", <br>
               </br>
               ,"(5) REST API",<br>
               </br>
               ,"(6) Managing database"],
    },
     {
      key: '2',
      title: 'Education',
      content:["* 2017 - 2022:", <span> &nbsp;&nbsp;&nbsp;</span> , "BS IN COMPUTER SCIENCE:",
      <br></br> ,<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      , " KENYATTA UNIVERSITY. ",<br>
      
      </br>  
        ,"* 2020 – 2020:", <span> &nbsp;&nbsp;&nbsp;</span> , "HCNA: Routing & Switching:",
      <br></br> ,<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      , " The KU Huawei Academy. ", <br>
               </br>
        ,"* 2017 – 2017:", <span> &nbsp;&nbsp;&nbsp;</span> , "Mobile Software Development and Entrepreneurship Program (MIT):",
      <br></br> ,<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      , " eMobilis. ", <br>
               </br>
        ,"* 2013 – 2016: ", <span> &nbsp;&nbsp;&nbsp;</span> , "Kenya Certificate of Secondary Education (KCSE) :",
      <br></br> ,<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      , " Sawagongo High School.  ",<br>
               </br>
        ,"* 2005 – 2012:", <span> &nbsp;&nbsp;&nbsp;</span> , "Kenya Certificate of Primary Education (KCPE):",
      <br></br> ,<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      , "  Rang’ala Boys Primary School. "
    ],
    },
     {
      key: '3',
      title: 'Technology knowledge summary',
      content:["(1) Languages: C++, JAVA, Visual Basic, JAVA SCRIPT, HTML,CSS,",<br>
      
      </br>  
               ,"(2) Frame Works/ CMS: Bootstrap, WordPress.", <br>
               </br>
               , " (3) Development Tools, Methodologies & Environments: Rapid Application Design (RAD),Object-Oriented Analysis & Design (OOAD), Waterfall Methodology, PrototypingApproach, Integrated Software Development, Microsoft Visual Studio ", <br>
               </br>
               ," (4) Software: ANDROID STUDIO, NETBEANS, CODEBLOCK, XAMP,APACHE SERVER,ADOBE XD, VISUAL BASIC STUDIO, PHP STORM, SUBLINE TEXT.", <br>
               </br>
               ,"(5) Systems: Linux, Windows, Mac OS X.",<br>
               </br>
               ,"(6) Databases: ORACLE DB,MYSQL DATABASE, ACCESS DATABASE."],
    },
]

function AppAbout() {
    return (
        <div id="about" className="Block aboutBlock">
            <div className="container-fluid">
             <div className="titleHolder">
                 <h2>About Me</h2>
                 <p>Why Choose Me?</p>
             </div>
             
             <Row gutter={[16, 16]}>
                  {items.map(item => {
                    return(
                        <Col md={{ span: 8 }} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                 <h3>{item.title}</h3>
                                 {console.log(item.content)}
                                <p>{item.content}</p>
                            </div>  
                        </Col>
                    );
                    })}
           
            </Row>
            </div>
            
        </div>
    )
}

export default AppAbout;
