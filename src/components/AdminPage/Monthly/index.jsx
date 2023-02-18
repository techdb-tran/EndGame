import React from 'react'
import { CaretUpOutlined, EyeOutlined , CaretDownOutlined} from '@ant-design/icons';
import { Breadcrumb } from 'antd'
import { AreaChart, Pie, PieChart, Cell, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts'
import { Link } from 'react-router-dom'
import Card from 'antd/es/card/Card'
const Monthly = () => {
    const data = [
        {
            month: '2015.01',
            a: 4000,
            b: 2400,
            c: 2400,
        },
        {
            month: '2015.02',
            a: 3000,
            b: 1398,
            c: 2210,
        },
        {
            month: '2015.03',
            a: 2000,
            b: 9800,
            c: 2290,
        },
        {
            month: '2015.04',
            a: 2780,
            b: 3908,
            c: 2000,
        },
        {
            month: '2015.05',
            a: 1890,
            b: 4800,
            c: 2181,
        },
        {
            month: '2015.06',
            a: 2390,
            b: 3800,
            c: 2500,
        },
        {
            month: '2015.07',
            a: 3490,
            b: 4300,
            c: 2100,
        },
    ];

    const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const getPercent = (value, total) => {
        const ratio = total > 0 ? value / total : 0;

        return toPercent(ratio, 2);
    };

    const renderTooltipContent = (o) => {
        const { payload, label } = o;
        const total = payload.reduce((result, entry) => result + entry.value, 0);

        return (
            <div className="customized-tooltip-content">
                <p className="total">{`${label} (Total: ${total})`}</p>
                <ul className="list">
                    {payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{ color: entry.color }}>
                            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    const dataUnits = [
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
                <Breadcrumb.Item>Monthly</Breadcrumb.Item>
            </Breadcrumb>
            <div className='span-btn'>
                <Link to='/statistical'><span>Quarterly</span></Link>
                <span>Monthly</span>
                <Link to='/statistical/weekly'><span>Weekly</span></Link>
            </div>
            <div className='top-dashboard'>
                <div className='revenue'>
                    <h3>Revenue History</h3>
                    <AreaChart
                        width={500}
                        height={300}
                        data={data}
                        stackOffset="expand"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={toPercent} />
                        <Tooltip content={renderTooltipContent} />
                        <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
                <div>
                    <h3>Units</h3>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={dataUnits}
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
                <Card title="Monthly to date" bordered={false} style={{ width: 300 }}>
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

export default Monthly