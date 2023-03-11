import React from 'react';
import ProductForm from '../ProductForm';
import { Breadcrumb } from 'antd';

const ProductManagement = () => {
  return (
    <>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
        <Breadcrumb.Item>Product Management</Breadcrumb.Item>
      </Breadcrumb>
      <ProductForm />
    </>
  )
}

export default ProductManagement