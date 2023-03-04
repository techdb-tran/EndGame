import React from 'react'
import { Card } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, MoneyCollectOutlined } from '@ant-design/icons'
const Revenue = () => {
    return (
        <>
            <Card style={{width:'260px'}}>
                <Card.Meta
                    title="Revenue"
                    description="215.000 $"
                    avatar={
                        <div>
                            {true ? (
                                <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                            ) : (
                                <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                            )}
                            <MoneyCollectOutlined style={{ color: '#52c41a', fontSize: '32px' }} />
                        </div>
                    }
                />
            </Card>
        </>
    )
}

export default Revenue