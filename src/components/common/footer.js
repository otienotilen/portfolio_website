import React from 'react';
import { BackTop } from 'antd';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaArrowCircleUp } from 'react-icons/fa';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    
                   
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/tyllen.mgyz"><FaFacebook /></a></li>
                    <li><a href="https://twitter.com/Tilen_Otieno"><FaTwitter /></a></li>
                    <li><a href="https://www.linkedin.com/in/tilen-otieno-79a721210/"><FaLinkedin /></a></li>
                    <li><a href="https://github.com/otienotilen"><FaGithub /></a></li>
                    <li><a href="https://www.instagram.com/mgyz_tyllen/"><FaInstagram /></a></li>
                </ul>
                <div className="copyright">Copyright &copy; 2021 Tilen</div>
                 <BackTop>
                    <div className="goTop"><FaArrowCircleUp style={{fontSize:"40px", color: "royalblue"}}/></div>
                    </BackTop>
                </div>
            </div>
        
    )
}

export default AppFooter;
