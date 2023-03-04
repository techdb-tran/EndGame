import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllOrder, actUpdateOrderStatus} from '../../../redux/features/orderSlice/orderSlice';
import { Table, Button } from 'antd';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(actFetchAllOrder());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleConfirm = (id) => dispatch(actUpdateOrderStatus({ id, status: 'Đã Xác nhận' }));
  const handleCancel = (id) => dispatch(actUpdateOrderStatus({ id, status: 'Chờ xác nhận' }));
  
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
      render: (img) => <img src={img} alt="" style={{maxWidth:'50px', maxHeight:'50px'}} />,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'active',
      key: 'active',
      render: (active, record) => (
        <>
          <Button type="primary" onClick={()=>handleConfirm(record.id)}>
            Xác nhận
          </Button>
          <Button type="danger" onClick={()=>handleCancel(record.id)}>
            Hủy
          </Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={orders} rowKey="id"/>;
};

export default OrdersTable;
