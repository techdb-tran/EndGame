import React from 'react'
import { Card } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const NewOrder = () => {
    return (
        <div>
            <Card style={{width: '260px'}}>
                        <Card.Meta
                            title="New Order"
                            description="5"
                            avatar={
                                <div>
                                    {true ? (
                                        <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                                    ) : (
                                        <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                                    )}
                                    <ShoppingCartOutlined style={{ color: '#722ed1', fontSize: '32px' }} />
                                </div>
                            }
                        />
                    </Card>
        </div>
    )
}

export default NewOrder
