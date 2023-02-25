import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { Popover } from 'antd';

const NotificationBell = () => {
  const [notifications] = useState([
    { title: 'Thông báo 1', content: 'Nội dung thông báo 1' },
    { title: 'Thông báo 2', content: 'Nội dung thông báo 2' },
    { title: 'Thông báo 3', content: 'Nội dung thông báo 3' },
  ]);
  
  const content = (
    <div>
      {notifications.map((notification, index) => (
        <div key={index}>
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