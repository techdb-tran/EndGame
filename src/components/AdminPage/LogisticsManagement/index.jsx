import React from 'react';
import { Table, Button, Space } from 'antd';

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'orderCode',
    key: 'orderCode',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">Xác nhận</Button>
        <Button type="danger">Hủy</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    orderCode: 'DH001',
    customerName: 'Nguyễn Văn A',
    address: 'Số 730, Hai Bà Trưng, Minh An, Hội An',
    status: 'Đang chờ xác nhận',
  },
  {
    key: '2',
    orderCode: 'DH002',
    customerName: 'Nguyễn Thị B',
    address: 'Số 12, Khuê Mỹ, Mỹ Khê, Đà Nẵng',
    status: 'Đang vận chuyển',
  },
  {
    key: '3',
    orderCode: 'DH003',
    customerName: 'Trần Văn C',
    address: 'Số 120, Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh',
    status: 'Đã giao hàng',
  },
];

const LogisticsManagement = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default LogisticsManagement;
