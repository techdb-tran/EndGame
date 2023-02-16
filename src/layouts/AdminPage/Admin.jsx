import React from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Statistical from './Statistical';
import Sider from 'antd/es/layout/Sider';
function getItem(label, key, icon, children){
  return { 
    key, icon, children, label,
  };
}
const items = [
  getItem('Statistical', '1', <PieChartOutlined />),
  getItem('Products', 'sub1', <DesktopOutlined />,[
    getItem('Clothes','2'),
    getItem('Living Tool','3'),
    getItem('Stationery','4'),
  ]),
  getItem('User', 'sub2', <UserOutlined />, [
    getItem('Ban', '5'),
    getItem('Sang', '6'),
    getItem('iVi', '7'),
  ]),
  getItem('Subscribers', 'sub3', <TeamOutlined />, [getItem('Email List', '8'), getItem('Comments', '9'), getItem('Heart', '10')]),
  getItem('Report', '11', <FileOutlined />),
  ];
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider theme="light"  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{
             height: 121,
             margin: 16,
             backgroundImage: "url('logo.jpg')",
          }}/>
        <Menu style={{border: "1px solid gray"}} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Statistical/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >Alapi ©2023 Created by S & P</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin