import React from 'react'
import { ContactsTwoTone, SkinTwoTone, AppstoreTwoTone, CheckSquareTwoTone , UserOutlined } from '@ant-design/icons';
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { Layout, Menu, Button } from 'antd';
import { useState } from 'react';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import './AdminLayout.scss'
import { Link, Outlet } from 'react-router-dom';
import Avatar from 'antd/es/avatar/avatar';
import NotificationBell from '../../components/AdminPage/NotificationBell';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/admin/dashboard">Dash Board</Link>, '1', <AppstoreTwoTone />),
  getItem(<Link to="/admin/product-management">Product</Link>, '2', <SkinTwoTone />),
  getItem(<Link to="/admin/user-management">User</Link>, '3', <ContactsTwoTone />),
  getItem(<Link to="/admin/order">Order</Link>, '4', <CheckSquareTwoTone />),
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };
  return (
    <Layout className='layout' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Sider className='si-der' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='logoImg' />
        <Menu className="menu"collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} defaultSelectedKeys={['1']} mode="inline" items={items}>
          {items.map((item) =>
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key} icon={child.icon}>
                    {child.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon} >
                <Link to={item.key}>{item.label}</Link> 
              </Menu.Item>
            ),
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className='header' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className='header-left'>
            <h2>Welcome back, Pen.</h2>
          </div>
          <div className='header-right'>
          <Button onClick={toggleTheme}>{isDarkMode ? <BsFillSunFill />:<BsFillMoonFill/>}</Button>
          <NotificationBell />
          <Avatar className='avatar' icon={<UserOutlined/>}/>
          <AiOutlineLogout className='logout' />
          </div>
        </Header>
        <Content className='content' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Outlet />
        </Content>
        <Footer collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='footer'>Alapi ©2023 Created by S & P</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout