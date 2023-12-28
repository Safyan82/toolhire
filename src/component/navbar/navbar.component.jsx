import "./navbar.css";
import React from 'react';
import { Layout, Menu } from 'antd';
import { ToolOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

export const Navigation = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <>
      <Header className="header">
        <div className="logo">
            <ToolOutlined style={{fontSize: '50px'}}/>
            <div className="text"><span style={{fontSize: '18px', color: '#FFA931', fontWeight: 'bold'}}>ToolHire</span> <b>Stoke-on-trent</b> </div>
        </div>
        <div className="header-text">
            <b><EnvironmentOutlined /></b>
            <span> Carlton road Stoke-on-trent, ST4 2BG</span>
        </div>
      </Header>
        <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" className={pathname=="/"? "menu-item-selected" : null} onClick={()=>navigate("/")}>
            Home
        </Menu.Item>
        <Menu.Item key="2" className={pathname=="/service" || pathname.includes("/detail") ? "menu-item-selected" : null}  onClick={()=>navigate("/service")}>
            Rental Services
        </Menu.Item>
        <Menu.Item key="3" className={pathname=="/contact"? "menu-item-selected" : null}  onClick={()=>navigate("/contact")}>
            Contact
        </Menu.Item>
        </Menu>
    </>
  );
};
