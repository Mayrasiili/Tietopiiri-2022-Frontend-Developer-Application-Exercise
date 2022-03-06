import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import { Card , Button} from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function Targetdetails(props) {
    let params = useParams();
    let navigate = useNavigate();
    const [currentTarget, setCurrenttarget]= React.useState(props.data.find(item => item.giftTargetId === params.targetId));

  return (
      <div id="donationBox">
        <div id="donationButton"><Button onClick={() => navigate("/")} type="primary" icon={<LeftCircleOutlined />}>Back to Donation Targets</Button> </div>
        {currentTarget && <>
            <Card id="donationCard" title={currentTarget.name} style={{ width: 300 }}>
             <div id="donationCardText">
                <p><u> Id:</u> {currentTarget.giftTargetId} </p>
                <p><u> Type:</u> {currentTarget.type} </p>
                <p><u>Payment Code:</u> {currentTarget.paymentCode} </p>
             </div>
            </Card>
        </>}
        {!currentTarget && <> <div id="errorstateDetail"> <ExclamationCircleOutlined style={{ fontSize: 200, color: "#ff3061"}} /> <p id="errorstateDetailText"> We're sorry, an error has occurred </p> </div>
        </>}
      </div>
  );
}
