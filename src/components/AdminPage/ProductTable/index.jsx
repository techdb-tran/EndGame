import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { actDeleteProduct, actFetchAllProduct, actUpdateProduct } from '../../../redux/features/products/productsSlice';
import SearchManagement from '../SearchManagement';

const ProductTable = ({ onUpdateForm }) => {
    const dispatch = useDispatch();
    const { allProducts, isLoading } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(actFetchAllProduct());
    }, []);
    const reversedProducts = useMemo(() => {
        return allProducts.slice().reverse();
        //slice() để tạo bản sao của bản gốc để tránh làm thay đổi dữ liệu
    }, [allProducts]);
    const handleDeleteProduct = (id) => {
        dispatch(actDeleteProduct(id));
    };

    const handleEditProduct = (id) => {
        const product = allProducts.find(item => item.id === id);
        onUpdateForm(product);
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
    //HAM SEARCH
    const [searchText, setSearchText] = useState('');

    const handleSearch = (value) => {
        setSearchText(value);
    };
    const filteredProducts = useMemo(() => {
        return reversedProducts.filter((product) => {
            return product.productName.toLowerCase().includes(searchText.toLowerCase())
                || product.productCode.toLowerCase().includes(searchText.toLowerCase());
        });
    }, [reversedProducts, searchText]);

    const columns = [
        {
            title: 'Mã hàng',
            dataIndex: 'productCode',
            key: 'productCode',
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
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Col span={5}><SearchManagement placeholder='Search name or code' onSearch={handleSearch} /></Col>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={filteredProducts} rowKey="id" pagination={pagination}
                    onChange={handleTableChange}  />
            )}
        </div>
    );
};

export default ProductTable;
