import React, {useEffect} from 'react'
import { Card } from 'antd'
import { ArrowUpOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllOrder } from '../../../redux/features/orderSlice/orderSlice'
const Revenue = () => {
    const dispatch = useDispatch();
    const {allOrders} = useSelector(state=>state.orders)
    console.log(allOrders)
    useEffect(() => {
        dispatch(actFetchAllOrder())
    }, [dispatch]);
    const completedOrders = allOrders.filter(order => order.status === 'Đã hoàn thành');
    const allRevenue =()=>{
        let total = 0;
        for (let i=0; i< completedOrders.length; i++){
            total = total +(completedOrders[i].salesPrice*1)
        }
        return total;
    }
    return (
        <>
            <Card style={{width:'260px'}}>
                <Card.Meta
                    title="Revenue"
                    description={allRevenue()}
                    avatar={
                        <div>
                            <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                            <MoneyCollectOutlined style={{ color: '#52c41a', fontSize: '32px' }} />
                        </div>
                    }
                    style={{ fontSize: '20px', fontWeight: 'bold', color: '#f00' }}
                />
            </Card>
        </>
    )
}

export default Revenue