import React from 'react'
import { Breadcrumb } from 'antd'
const User = () => {
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>User Management</Breadcrumb.Item>
          </Breadcrumb>
            Đây là User Management
        </div>
    )
}

export default User