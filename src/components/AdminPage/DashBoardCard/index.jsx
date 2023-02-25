import { Card, Row, Col } from 'antd';
import { UsergroupAddOutlined, ShoppingCartOutlined, MoneyCollectOutlined, StockOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const DashBoardCard = () => {
    const revenueIncrease = true; // Thay đổi giá trị để kiểm tra kết quả
    const userIncrease = false; // Thay đổi giá trị để kiểm tra kết quả
    const orderIncrease = false; // Thay đổi giá trị để kiểm tra kết quả
    const productIncrease = true; // Thay đổi giá trị để kiểm tra kết quả

    return (
        <div>
            <Row gutter={[95, 95]}>
                <Col span={6}>
                    <Card>
                        <Card.Meta
                            title="Revenue"
                            description="215.000 $"
                            avatar={
                                <div>
                                    {revenueIncrease ? (
                                        <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                                    ) : (
                                        <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                                    )}
                                    <MoneyCollectOutlined style={{ color: '#52c41a', fontSize: '32px' }} />
                                </div>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Card.Meta
                            title="Customer"
                            description="23"
                            avatar={
                                <div>
                                    {userIncrease ? (
                                        <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                                    ) : (
                                        <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                                    )}
                                    <UsergroupAddOutlined style={{ color: '#13c2c2', fontSize: '32px' }} />
                                </div>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Card.Meta
                            title="New Order"
                            description="5"
                            avatar={
                                <div>
                                    {orderIncrease ? (
                                        <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                                    ) : (
                                        <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                                    )}
                                    <ShoppingCartOutlined style={{ color: '#722ed1', fontSize: '32px' }} />
                                </div>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Card.Meta
                            title="Purchase"
                            description="100"
                            avatar={
                                <div>
                                    {productIncrease ? (
                                        <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px'}}/>
                    ) : (
                                        <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                                    )}
                                    <StockOutlined style={{ color: '#faad14', fontSize: '32px' }} />
                                </div>
                            }
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoardCard;    
