import React from 'react'
import { Breadcrumb } from 'antd'
const Clothes = () => {
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
            <Breadcrumb.Item>Clothes</Breadcrumb.Item>
          </Breadcrumb>
            Đây là Clothes
        </div>
    )
}

export default Clothes