import { useState } from 'react';
import { Tabs } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { TabPane } = Tabs;

const quarterlyData = [
{ name: 'Quarter 2/2022', revenue: 3700 },
{ name: 'Quarter 3/2022', revenue: 3800},
{ name: 'Quarter 4/2022', revenue: 5100},
{ name: 'Quarter 1/2023', revenue: 6100}, ];
const monthlyData = [  
{ month: 'Mar/2022', revenue: 1000 },
{ month: 'Apr/2022', revenue: 1200 },
{ month: 'May/2022', revenue: 1500 },
{ month: 'Jun/2022', revenue: 1300 },
{ month: 'Jul/2022', revenue: 1100 },
{ month: 'Aug/2022', revenue: 1400 },
{ month: 'Sep/2022', revenue: 1600 },
{ month: 'Oct/2022', revenue: 1800 },
{ month: 'Nov/2022', revenue: 1700 },
{ month: 'Dec/2022', revenue: 1900 },
{ month: 'Jan/2023', revenue: 2000 },
{ month: 'Feb/2023', revenue: 2200 },];
const weeklyData = [
{ week: 'Week 1/Feb', revenue: 300 },
{ week: 'Week 2/Feb', revenue: 400 },
{ week: 'Week 3/Feb', revenue: 500 },
{ week: 'Week 4/Feb', revenue: 450 },];

const RevenueChart = () => {
  const [activeTab, setActiveTab] = useState('quaterly');
  const handleTabChange = (key) => {
    setActiveTab(key);
  }

  const renderChart = () => {
    switch (activeTab) {
      case 'quaterly':
        return (
          <LineChart width={1200} height={400} data={quarterlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        );
      case 'monthly':
        return (
          <LineChart width={1200} height={400} data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        );
      case 'weekly':
        return (
          <LineChart width={1200} height={400} data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="week" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <Tabs defaultActiveKey="quaterly" onChange={handleTabChange}>
        <TabPane tab="Quaterly" key="quaterly">
          {renderChart()}
        </TabPane>
        <TabPane tab="Monthly" key="monthly">
          {renderChart()}
        </TabPane>
        <TabPane tab="Weekly" key="weekly">
          {renderChart()}
        </TabPane>
      </Tabs>
    </div>)
}
export default RevenueChart;