import React from 'react'
import { AreaChart, Area, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Breadcrumb } from 'antd';
import './Statistical.css'
import { Link } from 'react-router-dom';
const data = [
  {
    "name": "Q1",
    "2023": 4000,
    "2022": 2400
  },
  {
    "name": "Q2",
    "2023": 3000,
    "2022": 1398
  },
  {
    "name": "Q3",
    "2023": 2000,
    "2022": 9800
  },
  {
    "name": "Q4",
    "2023": 2780,
    "2022": 3908
  },
]

const Statistical = () => {
  return (
    <>
      <Breadcrumb className='bread-crumb'>
        <Breadcrumb.Item>Statistical</Breadcrumb.Item>
        <Breadcrumb.Item>Quarterly</Breadcrumb.Item>
      </Breadcrumb>
      <div className='span-btn'>
        <span>Quarterly</span>
        <Link to='/admin/statistical/monthly'><span>Monthly</span></Link>
        <Link to='/admin/statistical/weekly'><span>Weekly</span></Link>
      </div>
      <div className='top-dashboard'>
        <div className='revenue'>
          <h3>Revenue History</h3>
          <BarChart width={630} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2023" fill="#8884d8" />
            <Bar dataKey="2022" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <h3>Units</h3>
          <AreaChart width={630} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="2023" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="2022" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
      </div>
    </>
  )
}

export default Statistical