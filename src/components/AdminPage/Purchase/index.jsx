import React from 'react'
import { Card } from 'antd'
import { ArrowUpOutlined, StockOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllProduct } from '../../../redux/features/products/productsSlice'
const Purchase = () => {
    const dispatch = useDispatch();
    const {allProducts} = useSelector(state=>state.products)
    console.log(allProducts)
    useEffect(() => {
        dispatch(actFetchAllProduct())
    }, [dispatch]);
    
    const allPurchase =()=>{
        let total = 0;
        for (let i=0; i< allProducts.length; i++){
            total = total +(allProducts[i].productImportPrice)*(allProducts[i].productQuantity)
        }
        return total;
    }
    return (
        <>
            <Card>
                <Card.Meta
                    title="Purchase"
                    description={allPurchase()}
                    avatar={
                        <div>
                            <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                            <StockOutlined style={{ color: '#faad14', fontSize: '32px' }} />
                        </div>
                    }
                    style={{ fontSize: '15px', fontWeight: 'bold', color: '#f00' }}
                />
            </Card>
        </>
    )
}

export default Purchase