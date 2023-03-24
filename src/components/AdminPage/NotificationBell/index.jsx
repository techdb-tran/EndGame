import React, { useState, useEffect } from 'react';
import {VscBellDot, VscBell} from 'react-icons/vsc'
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actFetchAllOrder } from '../../../redux/features/orderSlice/orderSlice';


const NotificationBell = () => {
  const dispatch = useDispatch();
  const { allOrders } = useSelector(state => state.orders);
  useEffect(() => {
    dispatch(actFetchAllOrder())
  }, [dispatch]);
  const newOrders = allOrders.filter(order => order.status === "Chờ xác nhận");
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const content = (
    <div>
      <p>Bạn có {newOrders.length} đơn hàng chờ xác nhận</p>
    </div>
  );
  const bellShow =()=>{
      if(newOrders.length>0){
        return <VscBellDot style={{ height: '30px', width: '30px', margin: '30px' }} />
      }
      else{
        return <VscBell style={{ height: '30px', width: '30px', margin: '30px' }} />
      }
  }
  return (
    <Popover content={content} title="Thông báo" trigger="click" visible={visible}
    onVisibleChange={handleVisibleChange}>
      {bellShow()}
    </Popover>
  );
};

export default NotificationBell;