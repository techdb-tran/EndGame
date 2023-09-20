import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button, Col, Modal } from 'antd';
import { EditOutlined, DeleteOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { actDeleteUser, actFetchAllUsers, actSearchUsers, actUpdateUser } from '../../../redux/features/users/usersSlice';
import SearchManagement from '../SearchManagement';
const UserTable = ({onUpdateUser}) => {
    const [query, setQuery] = useState('');
    const { allUsers, userSearch, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchAllUsers());
    }, [dispatch]);
    useEffect(()=>{
        dispatch(actSearchUsers(query))
    },[dispatch,query])
    const reversedUser = useMemo(()=>{
        return allUsers.slice().reverse()
    },[allUsers])
    const reversedSearchUser = useMemo(()=>{
        return userSearch.slice().reverse()
    },[userSearch])

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
    const userSearchData = reversedSearchUser.map((user) => {
        let power = "Customer";
        if (user.isAdmin) {
            power = "Admin";
        }
        return { ...user, power };
    });
        //HAM SEARCH
        const handleSearch = (value) => {
            setQuery(value);
        };
        const filteredUsers =()=>{
            if(query){
                return userSearchData;
            }
            else{
                return userData;
            }
        }
        const [isModalVisible, setIsModalVisible] = useState(false);

        const handleDeleteUser = (id) => {
                Modal.confirm({
                    title: 'Bạn có chắc chắn muốn xóa người dùng này?',
                    icon: <ExclamationCircleOutlined />,
                    okText: 'Xóa',
                    cancelText: 'Hủy bỏ',
                    onOk: () => {
                      dispatch(actDeleteUser(id));
                    },
                  });
        };
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
            title: 'Giới tính',
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
            <Col span={5}><SearchManagement placeholder="search user..." onSearch={handleSearch}/></Col>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={filteredUsers()} rowKey="id" pagination={pagination}
                    onChange={handleTableChange} />
            )}
        </div>
    );
};

export default UserTable;