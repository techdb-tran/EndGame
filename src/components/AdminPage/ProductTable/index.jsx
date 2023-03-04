import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { actDeleteProduct, actFetchAllProduct, actUpdateProduct } from '../../../redux/features/products/productsSlice';

const ProductTable = () => {
    const dispatch = useDispatch();
    const { allProducts, isLoading } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(actFetchAllProduct());
    }, []);

    const handleDeleteProduct = (id) => {
        dispatch(actDeleteProduct(id));
    };

    const handleEditProduct = (id) => {
        dispatch(actUpdateProduct(id));
    };

    //ham pagination
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 7, // số lượng hàng trên một trang
    });
    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

    const columns = [
        {
            title: 'Mã hàng',
            dataIndex: 'productCode',
            key: 'productCode',
            sorter: (a, b) => a.productCode.localeCompare(b.productCode),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Loại ngành hàng',
            dataIndex: 'productType',
            key: 'productType',
        },
        {
            title: 'Số lượng',
            dataIndex: 'productQuantity',
            key: 'productQuantity',
        },
        {
            title: 'Giá nhập',
            dataIndex: 'productImportPrice',
            key: 'productImportPrice',
        },
        {
            title: 'Giá bán',
            dataIndex: 'productSalePrice',
            key: 'productSalePrice',
        },
        {
            title: 'Active',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEditProduct(record.id)} icon={<EditOutlined />} />
                    <Button onClick={() => handleDeleteProduct(record.id)} icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={allProducts} rowKey="id" pagination={pagination}
                    onChange={handleTableChange} />
            )}
        </div>
    );
};

export default ProductTable;
