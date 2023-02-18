import React from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import './AdminLayout.css'
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='layout'>
      <Sider className='si-der' theme="light"  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='logoImg'/>
        <Menu className='menu' theme="light" defaultSelectedKeys={['1']} mode="inline">
          <li><Link aria-current='page' to='/statistical'><Menu.Item key="1"><PieChartOutlined/>Statistical</Menu.Item></Link></li>
          <li><Link aria-current='page' to='/product'><Menu.Item key="2"><DesktopOutlined />Product</Menu.Item></Link></li>
          <li><Link aria-current='page' to='/user'><Menu.Item key="3"><UserOutlined/>User</Menu.Item></Link></li>
          <li><Link aria-current='page' to='/sub'><Menu.Item key="4"><TeamOutlined/>Subcribes</Menu.Item></Link></li>
          <li><Link aria-current='page' to='/report'><Menu.Item key="5"><FileOutlined />Report</Menu.Item></Link></li>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className='header'style={{
            background: colorBgContainer,
          }}
        >
          <h2>Welcome back, Pen</h2>
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