import React from 'react';
import { Form } from 'antd';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Here are my details</p>
                </div>
                <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    ><div>
      <Form.Item
        name="email"
        
      >
      
      <h3>Email Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;otienotilen@gmail.com</h3>
      

      </Form.Item> </div>
      <div>
      <Form.Item
        name="mobile"
       
      >
        <h3>Mobile Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+254741876222</h3>
      </Form.Item></div>
      <div>
       <Form.Item
       name="github"
      >
         <h3>Github Link:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/otienotilen">Click here</a></h3>
      </Form.Item></div>
      <div>
       <Form.Item
        name="socials"
        
      >
         <div className="container-fluid">
           <div className="footer">
                <div className="logo">
                    
                    <ul className="socials">
                      <h6>My Socials:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    
                    <li><a href="https://twitter.com/Tilen_Otieno"><FaTwitter /></a></li>
                    <li><a href="https://www.linkedin.com/in/tilen-otieno-79a721210/"><FaLinkedin /></a></li>
                    <li><a href="https://github.com/otienotilen"><FaGithub /></a></li>
                    
                </ul>
                </div>
                </div>
                </div>
                
      </Form.Item></div> 
    </Form>
            </div>
        </div>
    )
}

export default AppContact
