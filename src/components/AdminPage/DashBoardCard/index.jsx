import { Row, Col } from 'antd';
import Revenue from '../Revenue';
import NewCustomer from '../NewCustomer';
import NewOrder from '../NewOrder';
import Purchase from '../Purchase';
const DashBoardCard = () => {

    return (
        <div>
            <Row gutter={[115,10]} style={{display:'flex',justifyContent:'space-around', marginBottom:'20PX'}}>
                <Col span={6}>
                    <Revenue/>
                </Col>
                <Col span={6}>
                    <NewCustomer/>
                </Col>
                <Col span={6}>
                    <NewOrder/>
                </Col>
                <Col span={6} style={{width:'260px'}}>
                    <Purchase/>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoardCard;    
