import React from 'react'
import { Breadcrumb } from 'antd'
const ProductsManagement = () => {
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            <Breadcrumb.Item>Product Management</Breadcrumb.Item>
          </Breadcrumb>
            Đây là  Product Management
        </div>
    )
}

export default ProductsManagement