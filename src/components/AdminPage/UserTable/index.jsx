import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { actDeleteUser, actFetchAllUsers, actUpdateUser } from '../../../redux/features/users/usersSlice';
import SearchManagement from '../SearchManagement';
const UserTable = ({onUpdateUser}) => {
    const { allUsers, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchAllUsers());
    }, [dispatch]);

    const reversedUser = useMemo(()=>{
        return allUsers.slice().reverse()
    },[allUsers])


    const handleDeleteUser = (id) => {
        dispatch(actDeleteUser(id));
    };

    const handleEditUser = (id) => {
        const user = allUsers.find(item => item.id===id);
        dispatch(actUpdateUser(id))
        onUpdateUser(user);
    };
    //ham pagination
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 7, // số lượng hàng trên một trang
    });
    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };
    
    // Add Power to User data
    const userData = reversedUser.map((user) => {
        let power = "Customer";
        if (user.isAdmin) {
            power = "Admin";
        }
        return { ...user, power };
    });
        //HAM SEARCH
        const [searchText, setSearchText] = useState('');

        const handleSearch = (value) => {
            setSearchText(value);
        };
        const filteredUsers = useMemo(() => {
            return userData.filter((user) => {
                return user.email.toLowerCase().includes(searchText.toLowerCase())
                    || user.username.toLowerCase().includes(searchText.toLowerCase());
            });
        }, [userData, searchText]);
    
    const columns = [
        {
            title: 'Họ và Tên',
            dataIndex: 'username',
            key: 'username',
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
            title: 'Power',
            dataIndex: 'power',
            key: 'power',
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
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Col span={5}><SearchManagement placeholder="search username or email" onSearch={handleSearch}/></Col>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={filteredUsers} rowKey="id" pagination={pagination}
                    onChange={handleTableChange} />
            )}
        </div>
    );
};

export default UserTable;
