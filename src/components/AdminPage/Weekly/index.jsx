import React from 'react'
import { CaretUpOutlined, EyeOutlined , CaretDownOutlined} from '@ant-design/icons';
import { AreaChart, Cell, Pie, PieChart, XAxis, YAxis, Area, Tooltip } from 'recharts'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Card from 'antd/es/card/Card'
const Weekly = () => {
    const rangeData = [
        {
            "day": "05-01",
            "temperature": [
                -1,
                10
            ]
        },
        {
            "day": "05-02",
            "temperature": [
                2,
                15
            ]
        },
        {
            "day": "05-03",
            "temperature": [
                3,
                12
            ]
        },
        {
            "day": "05-04",
            "temperature": [
                4,
                12
            ]
        },
        {
            "day": "05-05",
            "temperature": [
                12,
                16
            ]
        },
        {
            "day": "05-06",
            "temperature": [
                5,
                16
            ]
        },
        {
            "day": "05-07",
            "temperature": [
                3,
                12
            ]
        },
        {
            "day": "05-08",
            "temperature": [
                0,
                8
            ]
        },
        {
            "day": "05-09",
            "temperature": [
                -3,
                5
            ]
        }
    ]

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>Statistical</Breadcrumb.Item>
                <Breadcrumb.Item>Weekly</Breadcrumb.Item>
            </Breadcrumb>
            <div className='span-btn'>
                <Link to='/admin/statistical'><span>Quarterly</span></Link>
                <Link to='/admin/statistical/monthly'><span>Monthly</span></Link>
                <span>Weekly</span>
            </div>
            <div className='top-dashboard'>
                <div className='revenue'>
                    <h3>Revenue History</h3>
                    <AreaChart
                        width={730}
                        height={250}
                        data={rangeData}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
                        <Tooltip />
                    </AreaChart>
                </div>
                <div>
                    <h3>Units</h3>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
            <div className='card-statistical'>
                <Card title="Weekly to date" bordered={false} style={{ width: 300 }}>
                    <span><h1>1820$</h1></span>
                    <p><CaretUpOutlined />+184$</p>
                </Card>
                <Card title="Site Traffic" bordered={false} style={{ width: 300 }}>
                    <span><h1>1065</h1>
                    </span>
                    <p><CaretDownOutlined />-98<EyeOutlined /></p>
                </Card>
                <Card title="Ads Budget" bordered={false} style={{ width: 300 }}>
                    <span><h1>990$</h1>
                    </span>
                    <p><CaretDownOutlined />-10$</p>
                </Card>
            </div>
        </>
    )
}

export default Weekly