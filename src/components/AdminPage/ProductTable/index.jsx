import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { actDeleteProduct, actFetchAllProduct, actUpdateProduct } from '../../../redux/features/products/productsSlice';
import SearchManagement from '../SearchManagement';
import { actSearchProduct } from '../../../redux/features/products/productsSlice';
import { searchProduct } from '../../../apis/productApi';
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
    const [query, setQuery] = useState('');

    const handleSearch = async(value) => {
       setQuery(value);
       const results = await searchProduct(value);
       dispatch(actSearchProduct(results));  
    };
    const filteredProducts = useMemo(() => {
        return reversedProducts;
    }, [reversedProducts, query]);

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
            title: 'Hình ảnh',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: (thumbnail) => <img src={thumbnail} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
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
                <Col span={5}><SearchManagement value={query} placeholder='Search name or code' onSearch={handleSearch} onChange={(e)=>setQuery(e.target.value)}/></Col>
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
