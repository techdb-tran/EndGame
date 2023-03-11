import React, {useEffect, useState} from 'react'
import { Card } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import axios from 'axios'
const NewCustomer = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:4000/users')
          .then((response) => {
            setUsers(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    return (
        <>
            <Card style={{width:'260px'}}>
                <Card.Meta
                    title="New Customer"
                    description={users.length}
                    avatar={
                        <div>
                            {(users.length > 0) ? (
                                <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '48px' }} />
                            ) : (
                                <ArrowDownOutlined style={{ color: '#f5222d', fontSize: '48px' }} />
                            )}
                            <UsergroupAddOutlined style={{ color: '#13c2c2', fontSize: '32px' }} />
                        </div>
                    }
                    style={{ fontSize: '20px', fontWeight: 'bold', color: '#f00' }}
                />
            </Card>
        </>
    )
}

export default NewCustomer