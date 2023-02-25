import { useState } from 'react';
import { Tabs } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { TabPane } = Tabs;

const quarterlyData = [
{ name: 'Quarter 1', revenue: 3700 },
{ name: 'Quarter 2', revenue: 3800},
{ name: 'Quarter 3', revenue: 5100},
{ name: 'Quarter 4', revenue: 6100}, ];
const monthlyData = [  
{ month: 'Jan', revenue: 1000 },
{ month: 'Feb', revenue: 1200 },
{ month: 'Mar', revenue: 1500 },
{ month: 'Apr', revenue: 1300 },
{ month: 'May', revenue: 1100 },
{ month: 'Jun', revenue: 1400 },
{ month: 'Jul', revenue: 1600 },
{ month: 'Aug', revenue: 1800 },
{ month: 'Sep', revenue: 1700 },
{ month: 'Oct', revenue: 1900 },
{ month: 'Nov', revenue: 2000 },
{ month: 'Dec', revenue: 2200 },];
const weeklyData = [
{ week: 'Week 1', revenue: 300 },
{ week: 'Week 2', revenue: 400 },
{ week: 'Week 3', revenue: 500 },
{ week: 'Week 4', revenue: 450 },];

const RevenueChart = () => {
  const [activeTab, setActiveTab] = useState('quaterly');

  const handleTabChange = (key) => {
    setActiveTab(key);
  }

  const renderChart = () => {
    switch (activeTab) {
      case 'quaterly':
        return (
          <LineChart width={600} height={300} data={quarterlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <LineChart width={600} height={300} data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <LineChart width={600} height={300} data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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