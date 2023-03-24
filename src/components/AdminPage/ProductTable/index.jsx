import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button, Col, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { actDeleteProduct, actFetchAllProduct, actSearchProduct, actUpdateProduct } from '../../../redux/features/products/productsSlice';
import SearchManagement from '../SearchManagement'
const ProductTable = ({ onUpdateForm }) => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { allProducts, productSearch, isLoading } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(actSearchProduct(query));
    }, [dispatch, query]);
    useEffect(() => {
        dispatch(actFetchAllProduct())
    }, [])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDeleteProduct = (id) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Xóa',
            cancelText: 'Hủy bỏ',
            onOk: () => {
              dispatch(actDeleteProduct(id));
            },
          });
    };
    const productFiltered = () => {
        if (query) {
            return productSearch.slice().reverse();
        }
        else {
            return allProducts.slice().reverse();
        }
    }
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
    //ham search
    const handleSearch = (value) => {
        setQuery(value);
        console.log(value)
    }
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
                <Col span={5}><SearchManagement placeholder='search product...' onSearch={handleSearch} /></Col>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={productFiltered()} rowKey="id" pagination={pagination}
                    onChange={handleTableChange} />
            )}
        </div>
    );
};

export default ProductTable;