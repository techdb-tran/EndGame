import React from 'react'
import { PlusCircleTwoTone } from '@ant-design/icons'
import { Breadcrumb, Button, Col, Row } from 'antd'
import "./User.css"
const User = () => {
    return (
        <div>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>User Management</Breadcrumb.Item>
            </Breadcrumb>
            <div className='user-management-container'>
                <Row>
                    <Col span={20}>
                        <h1>User Management</h1>
                    </Col>
                    <Col span={4}>
                        <Button>Add User <PlusCircleTwoTone /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div className="card">
                            <div className="imgBx">
                            </div>
                            <div className="content">
                                <div className="details">
                                    <h2>Pen<br/><span>Founder</span></h2>
                                    <div className="data">
                                        <h3>342<br/><span>Posts</span></h3>
                                        <h3>120k<br/><span>Follower</span></h3>
                                        <h3>285<br/><span>Following</span></h3>
                                    </div>
                                    <div className="actionBtn">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="card">
                            <div className="imgBx">
                                <img src="" alt=""/>
                            </div>
                            <div className="content">
                                <div className="details">
                                    <h2>Sang<br/><span>Co-Founder</span></h2>
                                    <div className="data">
                                        <h3>342<br/><span>Posts</span></h3>
                                        <h3>120k<br/><span>Follower</span></h3>
                                        <h3>285<br/><span>Following</span></h3>
                                    </div>
                                    <div className="actionBtn">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="card">
                            <div className="imgBx">
                                <img src="" alt=""/>
                            </div>
                            <div className="content">
                                <div className="details">
                                    <h2>Iviettech<br/><span>Chairman of the Board</span></h2>
                                    <div className="data">
                                        <h3>342<br/><span>Posts</span></h3>
                                        <h3>120k<br/><span>Follower</span></h3>
                                        <h3>285<br/><span>Following</span></h3>
                                    </div>
                                    <div className="actionBtn">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="card">
                            <div className="imgBx">
                                <img src="" alt=""/>
                            </div>
                            <div className="content">
                                <div className="details">
                                    <h2>Mr. Son<br/><span>SoftBank CEO</span></h2>
                                    <div className="data">
                                        <h3>342<br/><span>Posts</span></h3>
                                        <h3>120k<br/><span>Follower</span></h3>
                                        <h3>285<br/><span>Following</span></h3>
                                    </div>
                                    <div className="actionBtn">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default User