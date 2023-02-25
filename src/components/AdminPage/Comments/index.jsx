import React from 'react'
import { Breadcrumb } from 'antd'
const Comments = () => {
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
            <Breadcrumb.Item>Subcribes</Breadcrumb.Item>
            <Breadcrumb.Item>Comment</Breadcrumb.Item>
          </Breadcrumb>
            Đây là Comment
        </div>
    )
}

export default Comments