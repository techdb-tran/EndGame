import React from 'react'
import { MehTwoTone, PieChartTwoTone, BellTwoTone ,LogoutOutlined, ContactsTwoTone ,SettingTwoTone, SkinTwoTone,AppstoreTwoTone,FileTextTwoTone,MessageTwoTone } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Search from 'antd/es/input/Search';
import './AdminLayout.css'
import { Link, Outlet } from 'react-router-dom';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/admin/dashboard">Dash Board</Link>, '1', <AppstoreTwoTone twoToneColor="skyblue" />),
  getItem(<Link to="/admin/statistical">Statistical</Link>, '2', <PieChartTwoTone twoToneColor="green"/>),
  getItem(<Link to="/admin/product-management">Product</Link>, '3', <SkinTwoTone twoToneColor="red"/>),
  getItem(<Link to="/admin/user">User</Link>, '4', <ContactsTwoTone twoToneColor="white"/>),
  getItem(<Link to="/admin/customer">Customer</Link>, '5', <MessageTwoTone/>),
  getItem(<Link to="/admin/report">Report</Link>, '6', <FileTextTwoTone twoToneColor="skyblue"/>),
  getItem(<Link to="/admin/report">Setting</Link>, '7', <SettingTwoTone twoToneColor="green"/>),
  getItem(<Link to="/admin/report">Log out</Link>, '8', <LogoutOutlined />),
];

const onSearch= ()=>{
   
}
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='layout'>
      <Sider className='si-der' theme="light"  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='logoImg'/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}>
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
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.key}>{item.label}</Link> // Thêm Link vào Menu.Item
              </Menu.Item>
            ),
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className='header'
        >
          <h2>Welcome back, Pen</h2>
          <Search className='search' placeholder="input search text" onSearch={onSearch} enterButton />
        </Header>
        <Content className='content'>
            <Outlet style={{
              background: colorBgContainer,
            }}/>
        </Content>
        <Footer className='footer'>Alapi ©2023 Created by S & P</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout