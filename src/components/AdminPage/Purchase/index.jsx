import React from 'react'
import { Card } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, StockOutlined } from '@ant-design/icons'
const Purchase = () => {
    return (
        <>
            <Card>
                <Card.Meta
                    title="Purchase"
                    description="100"
                    avatar={
                        <div>
                            {true ? (
                                <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                            ) : (
                                <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                            )}
                            <StockOutlined style={{ color: '#faad14', fontSize: '32px' }} />
                        </div>
                    }
                />
            </Card>
        </>
    )
}

export default Purchase