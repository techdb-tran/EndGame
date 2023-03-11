import React,{useState} from 'react'
import { Breadcrumb, Row, Tabs, Col } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import LogisticsManagement from '../LogisticsManagement';
import OrderList from '../OrderHistory';
import OrdersTable from '../OrdersTable';
const OrdersTab = () => {
  const [activeTab, setActiveTab] = useState('1');

  function handleTabChange(activeKey) {
    setActiveTab(activeKey);
  }
  return (
    <div>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>Order</Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col span={24}>
        <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={handleTabChange}>
          <TabPane tab="Xác nhận đơn hàng" key="1">
             <OrdersTable/>
          </TabPane>
          <TabPane tab="Theo dõi vận chuyển" key="2">
           <LogisticsManagement/>
          </TabPane>
          <TabPane tab="Hoàn thành đơn hàng" key="3">
            <OrderList/>
          </TabPane>
        </Tabs>
        </Col>
      </Row>
    </div>
  )
}

export default OrdersTab