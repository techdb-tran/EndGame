import React, { useState } from 'react';
import { Button, Modal, Form, Input, Table, Popconfirm, Breadcrumb } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
const UserManagement = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Các cột của bảng hiển thị danh sách người dùng
    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            render: (_, record) => (
                <div>
                    <Button type="link" onClick={() => handleEdit(record)}>
                        <EditOutlined />
                        Sửa
                    </Button>
                    <Popconfirm title="Bạn có chắc chắn muốn xóa?" onConfirm={() => handleDelete(record)}>
                        <Button type="link" danger>
                            <DeleteOutlined />
                            Xóa
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // Hiển thị form thêm hoặc sửa người dùng
    const handleShowForm = () => {
        setShowForm(true);
        setIsEditing(false);
        setEditingUser(null);
        form.resetFields();
    };

    // Xử lý thêm người dùng
    const handleAddUser = (values) => {
        const newUser = { id: Date.now(), ...values };
        setData([...data, newUser]);
        setShowForm(false);
        form.resetFields();
    };

    // Xử lý sửa người dùng
    const handleEditUser = (values) => {
        const updatedUser = { ...editingUser, ...values };
        const newData = data.map((user) => (user.id === updatedUser.id ? updatedUser : user));
        setData(newData);
        setShowForm(false);
        setIsEditing(false);
        setEditingUser(null);
        form.resetFields();
    };

    // Xử lý xóa người dùng
    const handleDeleteUser = (record) => {
        const newData = data.filter((user) => user.id !== record.id);
        setData(newData);
    };

    // Xử lý sửa người dùng
    const handleEdit = (record) => {
        setIsEditing(true);
        setEditingUser(record);
        form.setFieldsValue(record);
        setShowForm(true);
    };

    // Xử lý xóa người dùng
    const handleDelete = (record) => {
        handleDeleteUser(record);
    };
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>User Management</Breadcrumb.Item>
            </Breadcrumb>
            <div className='user-management-container'>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" icon={<PlusOutlined />} onClick={handleShowForm}>
                        Thêm người dùng
                    </Button>
                </div>
                <Table columns={columns} dataSource={data} />
                <Modal
                    title={isEditing ? 'Sửa thông tin người dùng' : 'Thêm người dùng mới'}
                    visible={showForm}
                    onCancel={() => setShowForm(false)}
                    footer={null}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={isEditing ? handleEditUser : handleAddUser}
                    >
                        <Form.Item
                            name="name"
                            label="Họ và tên"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' }, { type: 'email', message: 'Email không hợp lệ' },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[{ required: true, message: 'Vui lòng nhập address' }, { type: 'address', message: 'Address không hợp lệ' },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                {isEditing ? 'Sửa' : 'Thêm mới'}
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default UserManagement