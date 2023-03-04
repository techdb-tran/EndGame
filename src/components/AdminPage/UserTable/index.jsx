import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { actDeleteUser, actFetchAllUsers } from '../../../redux/features/users/usersSlice';
const UserTable = () => {
    const dispatch = useDispatch();
    const { allUsers, isLoading } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(actFetchAllUsers());
    }, []);

    const handleDeleteUser = (id) => {
        dispatch(actDeleteUser(id));
    };

    const handleEditUser = (id) => {
        console.log('Edit nè');
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
            title: 'Họ và Tên',
            dataIndex: 'username',
            key: 'username',
            sorter: (a, b) => a.username.localeCompare(b.username),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        // {
        //     title: 'Pass Word',
        //     dataIndex: 'password',
        //     key: 'password',
        // },
        {
            title: 'Gioi tinh',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Active',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEditUser(record.id)} icon={<EditOutlined />} />
                    <Button onClick={() => handleDeleteUser(record.id)} icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={allUsers} rowKey="id" pagination={pagination}
                    onChange={handleTableChange} />
            )}
        </div>
    );
};

export default UserTable;
