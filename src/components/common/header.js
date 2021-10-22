import React, { useState } from 'react';
import { Layout } from 'antd';

import { Anchor, Drawer, Button } from 'antd';
import { FaBars, FaLightbulb } from 'react-icons/fa';

const { Link } = Anchor;



const { Header } = Layout;




function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
    
          
    <Header>
      
      
      <div className="container-fluid">
      <div className="header">
          <div className="logo">
          <i><FaLightbulb/></i>
          TILEN OTIENO OUMA
      </div>
      <div className="mobileHidden">
         <Anchor targetOffset="65">
    <Link href="#hero" title="Home" />
    <Link href="#about" title="About Me" />
    <Link href="#feature" title="My Projects" />
    <Link href="#contact" title="Contact Me" />
    
  </Anchor>
      </div>
      <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
        <FaBars />
      </Button>
      <Drawer placement="right" onClose={onClose} visible={visible}>
         <Anchor targetOffset="65">
    <Link href="#hero" title="Home" />
    <Link href="#about" title="About Me" />
    <Link href="#feature" title="My Projects" />
    <Link href="#contact" title="Contact Me" />
    
  </Anchor>
      </Drawer>
      </div>
     

      
    </div>
     </div>
    
    </Header>
     
  

    );
}

export default AppHeader;