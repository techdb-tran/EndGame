import React, { useState } from 'react'
import { Table, Tag, Space, Form, Input, Button, Modal, Select, message, Breadcrumb } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import { InputNumber } from 'antd';
import SearchManagement from '../SearchManagement';
const ProductsManagements = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState([]); // Dữ liệu sản phẩm
    const [modalVisible, setModalVisible] = useState(false); // Trạng thái form
    const [editingProduct, setEditingProduct] = useState(null); // Sản phẩm đang được sửa
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: data.length }); // Phân trang
    // Các thuộc tính của bảng
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name' },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'type',
            key: 'type',
            render: (type) => (
                <>
                    {type === 1 && <Tag color="blue">Loại 1</Tag>}
                    {type === 2 && <Tag color="green">Loại 2</Tag>}
                    {type === 3 && <Tag color="red">Loại 3</Tag>}
                </>
            ),
        },
        { title: 'Hình ảnh', dataIndex: 'img', key: 'img' },
        { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Giá nhập', dataIndex: 'importPrice', key: 'importPrice' },
        { title: 'Giá bán', dataIndex: 'salePrice', key: 'salePrice' },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditProduct(record)}>
                        Sửa
                    </Button>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDeleteProduct(record.id)}>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];
    // Hiển thị form thêm sản phẩm
    const showModal = () => {
        setModalVisible(true);
    };

    // Đóng form thêm sản phẩm
    const handleCancel = () => {
        setModalVisible(false);
        setEditingProduct(null);
        form.resetFields();
    };
    const handleSaveProduct = (values) => {
        const newProduct = {
            id: data.length + 1,
            name: values.name,
            type: values.type,
            img: values.img,
            quantity: values.quantity,
            importPrice: values.importPrice,
            salePrice: values.salePrice,
        };
        // Nếu đang sửa sản phẩm
        if (editingProduct) {
            const updatedData = data.map((product) =>
                product.id === editingProduct.id ? { ...newProduct, id: product.id } : product
            );
            setData(updatedData);
            message.success('Cập nhật sản phẩm thành công!');
        } else {
            setData([...data, newProduct]);
            message.success('Thêm sản phẩm mới thành công!');
        }
        handleCancel();
    };

    // Xóa sản phẩm
    const handleDeleteProduct = (id) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
            icon: <ExclamationCircleOutlined />,
            content: 'Hành động này sẽ không thể hoàn tác.',
            okText: 'Đồng ý',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk: () => {
                setData(data.filter((product) => product.id !== id));
                message.success('Xóa sản phẩm thành công!');
            },
        });
    };

    // Hiển thị form sửa sản phẩm
    const handleEditProduct = (record) => {
        setEditingProduct(record);
        form.setFieldsValue(record);
        setModalVisible(true);
    };

    // Xử lý thay đổi phân trang
    const handlePageChange = (page, pageSize) => {
        setPagination({ current: page, pageSize, total: data.length });
    };
    
    return (
        <> 
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
                <Breadcrumb.Item>Products Management</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ marginBottom: '16px' }}>
                <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                    Thêm sản phẩm mới
                </Button>
            </div>
            <SearchManagement/>
            <Table columns={columns} dataSource={data} pagination={pagination} onChange={handlePageChange} />
            <Modal
                title={editingProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}
                visible={modalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button form="productForm" key="submit" htmlType="submit" type="primary">
                        {editingProduct ? 'Cập nhật' : 'Thêm mới'}
                    </Button>,
                ]}
            >
                <Form id="productForm" form={form} onFinish={handleSaveProduct} initialValues={editingProduct}>
                    <Form.Item
                        name="name"
                        label="Tên sản phẩm"
                        rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                    >
                        <Input placeholder="Tên sản phẩm" />
                    </Form.Item>
                    <Form.Item
                        name="type"
                        label="Loại sản phẩm"
                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm!' }]}
                    >
                        <Select placeholder="Chọn loại sản phẩm">
                            <Option value={1}>Loại 1</Option>
                            <Option value={2}>Loại 2</Option>
                            <Option value={3}>Loại 3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="img" label="Hình ảnh" />
                    <Form.Item name="quantity" label="Số lượng" rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}>
                        <InputNumber placeholder="Số lượng" min={0} />
                    </Form.Item>
                    <Form.Item
                        name="importPrice"
                        label="Giá nhập"
                        rules={[{ required: true, message: 'Vui lòng nhập giá nhập!' }]}
                    >
                        <InputNumber placeholder="Giá nhập" min={0} />
                    </Form.Item>
                    <Form.Item
                        name="salePrice"
                        label="Giá bán"
                        rules={[{ required: true, message: 'Vui lòng nhập giá bán!' }]}
                    >
                        <InputNumber placeholder="Giá bán" min={0} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ProductsManagements