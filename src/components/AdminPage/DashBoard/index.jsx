import React from 'react'
import { Breadcrumb, Col, Row } from 'antd';
import RevenueChart from '../RevenueChart';
import DashboardCard from '../DashBoardCard';
import OrdersTable from '../OrdersTable';


const DashBoard = () => {
    return (
        <>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
                <Breadcrumb.Item>Detail</Breadcrumb.Item>
            </Breadcrumb>
            <Row style={{display:'flex',justifyContent:'space-around', marginBottom:'20PX'}}>
                <DashboardCard/>
            </Row>
            <Row style={{display:'flex'}}>
                <Col span={12}>
                    <OrdersTable/>
                </Col>
                <Col span={8}>
                    <RevenueChart/>
                </Col>
            </Row>
        </>
    )
}

export default DashBoard