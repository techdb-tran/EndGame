import React, {useState, useMemo, useEffect} from 'react';
import { Table, Button, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actFetchAllOrder,actUpdateOrderStatus } from '../../../redux/features/orderSlice/orderSlice';
import SearchManagement from '../SearchManagement';

const LogisticsManagement = () => {
  const dispatch = useDispatch();
  const { allOrders, loading, error } = useSelector((state) => state.orders);
  //HAM SEARCH
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const filteredOrders = useMemo(() => {
    return allOrders.filter((order) => {
      return order.productName.toLowerCase().includes(searchText.toLowerCase())
        || order.orderCode.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [allOrders, searchText]);
  useEffect(() => {
    dispatch(actFetchAllOrder());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleConfirm = (id) => { dispatch(actUpdateOrderStatus({ id, status: "Đã hoàn thành" })) };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderCode',
      key: 'orderCode',
    },
    {
      title: 'Tên Khách Hàng',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'customerAddress',
      key: 'customerAddress',
    },
    {
      title: 'Total',
      dataIndex: 'salesPrice',
      key: 'salesPrice',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        switch (status) {
          case 'Chờ xác nhận':
            color = 'orange';
            break;
          case 'Đang vận chuyển':
            color = 'green';
            break;
          case 'Đã hoàn thành':
            color = 'blue';
            break;
          default:
            break;
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'active',
      key: 'active',
      render: (active, record) => (
        <>
          <Button type="primary" onClick={() => handleConfirm(record.id)}>
            Xác nhận đã giao
          </Button>
        </>
      ),
    },
  ];

  return <>
    <div style={{display: 'flex', justifyContent:'flex-end'}}><SearchManagement placeholder="search name or order code..." onSearch={handleSearch} /></div>
    <Table columns={columns} dataSource={filteredOrders.filter(order => order.status === 'Đang vận chuyển')} rowKey="id" />;
  </>
};

export default LogisticsManagement;
