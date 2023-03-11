import React from 'react';
import UserForm from '../UserForm';
import { Breadcrumb} from 'antd';
const UserManagement = () => {
    return(
      <>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>User Management</Breadcrumb.Item>
      </Breadcrumb>
      <UserForm/>
      </>
    )
}

export default UserManagement