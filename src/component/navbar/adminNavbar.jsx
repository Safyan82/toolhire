import "./navbar.css";
import React from 'react';
import { Layout, Menu } from 'antd';
import { ToolOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

export const AdminNavigation = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
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
        <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" className={pathname=="/tool"? "menu-item-selected" : null} onClick={()=>navigate("/tool")}>
            Tools List
        </Menu.Item>
        <Menu.Item key="2" className={pathname=="/addTool"? "menu-item-selected" : null}  onClick={()=>navigate("/addTool")}>
            Add Tool
        </Menu.Item>
        <Menu.Item key="3" className={pathname=="/review"? "menu-item-selected" : null}  onClick={()=>navigate("/review")}>
            Review
        </Menu.Item>
        <Menu.Item key="4" onClick={()=>navigate("/admin")}>
            Logout
        </Menu.Item>
        </Menu>
    </>
  );
};
