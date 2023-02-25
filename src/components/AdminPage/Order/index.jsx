import React,{useState} from 'react'
import { Breadcrumb, Row, Tabs, Table, Button, Tag, Col } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import LogisticsManagement from '../LogisticsManagement';
import OrderList from '../OrderHistory';

const data = [
  { orderId: 'DH001', productName: 'Product A', type: 'Type 1', quantity: 10, img: 'https://dummyimage.com/50x50/000/fff'},
  { orderId: 'DH002', productName: 'Product B', type: 'Type 2',quantity: 20, img: 'https://dummyimage.com/50x50/000/fff'},
];

const initialOrderStatus = {
  1: 'Chờ xác nhận',
  2: 'Chờ xác nhận',
};
const Order = () => {
  const [orderStatus, setOrderStatus] = useState(initialOrderStatus);

    const handleConfirm = (orderId) => {
        setOrderStatus((prev) => ({
            ...prev,
            [orderId]: 'Đã xác nhận',
        }));
    };

    const handleCancel = (orderId) => {
        setOrderStatus((prev) => ({
            ...prev,
            [orderId]: 'Chờ xác nhận',
        }));
    };

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: (text) => {
            let color = '';
            if (text === 'Type 1') {
              color = 'geekblue';
            } else if (text === 'Type 2') {
              color = 'green';
            } else if (text === 'Type 3') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={text}>
                {text.toUpperCase()}
              </Tag>
            );
          },
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (imgUrl) => <img alt="Product" src={imgUrl} />,
        },
        {
            title: 'Tình trạng đơn hàng',
            dataIndex: 'orderId',
            key: 'orderStatus',
            render: (orderId) => orderStatus[orderId],
        },
        {
            title: 'Active',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => orderStatus[record.orderId] === 'Chờ xác nhận' ? handleConfirm(record.orderId) : handleCancel(record.orderId)}>
                    {orderStatus[record.orderId] === 'Chờ xác nhận' ? 'Xác nhận' : 'Hủy xác nhận'}
                </Button>
            ),
        },
    ];
  //
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
          <Table className="table-confirm-order"columns={columns} dataSource={data} />
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

export default Order