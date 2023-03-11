import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';

const NotificationBell = ()=> {
  const {allOrders} = useSelector(state=>state.orders);
  const newOrders = allOrders.filter(order => order.status==="Chờ xác nhận");
  const [notifications] = useState([
    { title: '', content: `Bạn có ${newOrders.length} đơn hàng chờ xác nhận`,},
    { title: '', content: `` },
    { title: '', content: '__________'},
  ]);
  
  const content = (
    <div>
      {notifications.map((notification, index) => (
        <div key={index} style={{width:'150px', color: 'orange', fontWeight:'bold'}} >
          <h4>{notification.title}</h4>
          <p>{notification.content}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Popover content={content} title="Thông báo" trigger="click">
      <BsBell style={{height:'30px', width:'30px', margin:'30px'}} />
    </Popover>
  );
};

export default NotificationBell;