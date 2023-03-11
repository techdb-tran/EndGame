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
            <Row>
                <DashboardCard/>
            </Row>
            <Row style={{display:'flex'}}>
                <Col span={24}>
                    <OrdersTable/>
                </Col>
                <Col span={24}>
                    <RevenueChart/>
                </Col>
            </Row>
        </>
    )
}

export default DashBoard