import React from 'react'
import { UpSquareTwoTone} from '@ant-design/icons';
import { Breadcrumb, Col } from 'antd';
import './DashBoard.css'
import Card from 'antd/es/card/Card';

const DashBoard = () => {
  return (
    <>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
      <div className='dash-board-wrapper'>
      <Col span={5}>
      <div className='left-content'>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
      </div>
      </Col>
      <Col span={12}>
      <div className='middle-content' >
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
      </div>
      </Col>
      <Col span={5}>
      <div className='right-content'>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
        <Card className='card-item'>
            <div>
                <h1>$80.955</h1>
                <p><UpSquareTwoTone twoToneColor="green"/>21%</p>
            </div>
        </Card>
      </div>
      </Col>
    </div>
    </>
  )
}

export default DashBoard