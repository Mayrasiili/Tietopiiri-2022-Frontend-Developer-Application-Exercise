import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import { Card , Button} from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

export default function Targetdetails(props) {
    let params = useParams();
    let navigate = useNavigate();
    const [currentTarget, setCurrenttarget]= React.useState(props.data.find(item => item.giftTargetId === params.targetId));
  return (
      <div>
        <div><Button onClick={() => navigate("/")} type="primary" icon={<LeftCircleOutlined />}>Back to Donation Targets</Button> </div>
        {currentTarget && <>
            <Card title={currentTarget.name} style={{ width: 300 }}>
              <p>Id: {currentTarget.giftTargetId} </p>
              <p>Type: {currentTarget.type} </p>
              <p>Payment Code: {currentTarget.paymentCode} </p>
            </Card>
        </>}
        {!currentTarget && <>
            An eroori has ocuured
        </>}
      </div>
  );
}
