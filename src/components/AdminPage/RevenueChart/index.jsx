import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllOrder } from '../../../redux/features/orderSlice/orderSlice';
const { TabPane } = Tabs;

const RevenueChart = () => {
  const dispatch = useDispatch();
  const {allOrders} = useSelector(state=>state.orders)
  useEffect(()=>{
    dispatch(actFetchAllOrder())
  },[dispatch]);
  
  const completedOrder = allOrders.slice().filter(order=>order.status === 'Đã hoàn thành')
  const result = Object.values(completedOrder.reduce((acc,{completedDate, salesPrice})=>{
    const month = completedDate.split('-')[1];
    acc[month] = (acc[month]||0)+Number(salesPrice)
    return acc;
  },{}))
  console.log(result)

  const [activeTab, setActiveTab] = useState('quaterly');
  const handleTabChange = (key) => {
    setActiveTab(key);
  }
  const quarterlyData = [
    { name: 'Quarter 2/2022', revenue: Number(result[3]+result[4]+result[5]) },
    { name: 'Quarter 3/2022', revenue: Number(result[6]+result[7]+result[8])},
    { name: 'Quarter 4/2022', revenue: Number(result[9]+result[10]+result[11])},
    { name: 'Quarter 1/2023', revenue: Number(result[0]+result[1]+result[2])}, ];
    const monthlyData = [  
    { month: 'Apr/2022', revenue: result[3] },
    { month: 'May/2022', revenue: result[4] },
    { month: 'Jun/2022', revenue: result[5] },
    { month: 'Jul/2022', revenue: result[6] },
    { month: 'Aug/2022', revenue: result[7] },
    { month: 'Sep/2022', revenue: result[8] },
    { month: 'Oct/2022', revenue: result[9] },
    { month: 'Nov/2022', revenue: result[10] },
    { month: 'Dec/2022', revenue: result[11] },
    { month: 'Jan/2023', revenue: result[0] },
    { month: 'Feb/2023', revenue: result[1]},
    { month: 'Mar/2023', revenue: result[2]}];
    const weeklyData = [
    { week: 'Week 1/Feb', revenue: 2000000 },
    { week: 'Week 2/Feb', revenue: 900000 },
    { week: 'Week 3/Feb', revenue: 6000000 },
    { week: 'Week 4/Feb', revenue: 9000000},];
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