import { Table, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment/moment';

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'orderCode',
    key: 'orderCode',
  },
  {
    title: 'Ngày hoàn thành',
    dataIndex: 'completedDate',
    key: 'completedDate',
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity',
  },
];

const data = [
  {
    key: '1',
    orderCode: 'DH001',
    completedDate: '2022-02-20',
    quantity: 5,
  },
  {
    key: '2',
    orderCode: 'DH002',
    completedDate: '2022-02-22',
    quantity: 3,
  },
  {
    key: '3',
    orderCode: 'DH003',
    completedDate: '2022-02-24',
    quantity: 8,
  },
];

const OrderHistory = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleDateChange = (date, dateString) => {
    const filtered = data.filter(
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
