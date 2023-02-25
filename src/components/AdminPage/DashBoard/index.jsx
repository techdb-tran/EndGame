import React, { useState } from 'react'
import { Breadcrumb, Col, Row, Table, Button } from 'antd';
import RevenueChart from '../RevenueChart';
import DashboardCard from '../DashBoardCard';


const data = [
    { orderId: 1, productName: 'Product A', quantity: 10 },
    { orderId: 2, productName: 'Product B', quantity: 20 },
];

const initialOrderStatus = {
    1: 'Chờ xác nhận',
    2: 'Chờ xác nhận',
};
const DashBoard = () => {
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
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
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
    return (
        <>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
                <Breadcrumb.Item>Detail</Breadcrumb.Item>
            </Breadcrumb>
            <Row style={{display:'flex',justifyContent:'space-around',margin:20}}>
                <DashboardCard/>
            </Row>
            <Row style={{display:'flex',justifyContent:'space-around',margin:20}}>
                <Col span={10}>
                    <Table className="table-confirm-order"columns={columns} dataSource={data} />
                    </Col>
                    <Col span={10}>
                        <RevenueChart/>
                    </Col>
            </Row>
        </>
    )
}

export default DashBoard