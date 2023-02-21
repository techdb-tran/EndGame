import React from 'react'
import { Breadcrumb, Row, Tabs } from 'antd'
import { TabsProps } from 'antd';


const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Logistic`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Email List`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Message & Feedback`,
    children: `Content of Tab Pane 3`,
  },
];
const Customer = () => {
    return (
        <div>
        <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>Customer</Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
        <Row>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Row>
    </div>
    )
}

export default Customer