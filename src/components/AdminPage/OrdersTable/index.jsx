import React, { useState } from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllOrder, actUpdateOrderStatus } from '../../../redux/features/orderSlice/orderSlice';
import { Table, Button, Tag } from 'antd';
import SearchManagement from '../SearchManagement';
const OrdersTable = () => {
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

  const handleConfirm = (id) => { dispatch(actUpdateOrderStatus({ id, status: 'Đang vận chuyển' })) };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderCode',
      key: 'orderCode',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <img src={img} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
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
            Xác nhận
          </Button>
        </>
      ),
    },
  ]

  return <>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}><SearchManagement placeholder="search name or order code..." onSearch={handleSearch} /></div>
    <Table columns={columns} dataSource={filteredOrders.filter(order => order.status === 'Chờ xác nhận')} rowKey="id" />
  </>
};

export default OrdersTable;
