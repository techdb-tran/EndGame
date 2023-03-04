import React from 'react';
import ProductForm from '../ProductForm';
import ProductTable from '../ProductTable';
import { Breadcrumb } from 'antd';

const ProductManagement = () => {
  return (
    <>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
        <Breadcrumb.Item>Product Management</Breadcrumb.Item>
      </Breadcrumb>
      <ProductForm />
      <ProductTable />
    </>
  )
}

export default ProductManagement