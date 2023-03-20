import { Table, DatePicker, Tag } from 'antd';
import { useState } from 'react';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'orderCode',
    key: 'orderCode',
  },
  {
    title: 'Tên hàng hóa',
    dataIndex: 'productName',
    key: 'orderCode',
  },
  {
    title: 'Loại hàng',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Tổng tiền hàng',
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
          color = 'red';
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
    title: 'Ngày hoàn thành',
    dataIndex: 'completedDate',
    key: 'completedDate',
  }
];


const OrderHistory = () => {
  const {allOrders} = useSelector(state => state.orders);
  const reversedOrders = allOrders.slice().reverse();
  const completedOrders = reversedOrders.filter(order=>order.status ==="Đã hoàn thành")
  const [filteredData, setFilteredData] = useState(completedOrders);
  const handleDateChange = (date, dateString) => {
    const filtered = completedOrders.filter(
      (item) =>
        moment(item.completedDate).isSameOrAfter(dateString, 'day') &&
        moment(item.completedDate).isSameOrBefore(dateString, 'day')
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <DatePicker onChange={handleDateChange} />
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
};

export default OrderHistory;
