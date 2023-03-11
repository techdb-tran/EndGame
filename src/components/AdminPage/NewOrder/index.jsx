import React, {useEffect} from 'react'
import { Card } from 'antd'
import { ArrowUpOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllOrder } from '../../../redux/features/orderSlice/orderSlice'
const NewOrder = () => {
    const dispatch = useDispatch();
    const { allOrders } = useSelector(state => state.orders)
    useEffect(()=>{
        dispatch(actFetchAllOrder())
    },[dispatch]);
    const newOrders = allOrders.filter(order => order.status === 'Chờ xác nhận');
    return (
        <div>
            <Card style={{width: '260px'}}>
                        <Card.Meta
                            title="New Order"
                            description={newOrders.length}
                            avatar={
                                <div>
                                    <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                                    <ShoppingCartOutlined style={{ color: '#722ed1', fontSize: '32px' }} />
                                </div>
                            }
                            style={{ fontSize: '20px', fontWeight: 'bold', color: '#f00' }}
                        />
                    </Card>
        </div>
    )
}

export default NewOrder
