import { Descriptions } from 'antd';
import { Link } from "react-router-dom";
import React from "react";

export default function Invoices(props) {
  return (
    <div id="donationTargetsList">
     <Descriptions title= <div id="donationTargetsTitle"> Donation Targets: </div> bordered size="middle" column={2}>
        {props.data.map(item => (
            <React.Fragment key={item.giftTargetId}>
            <Descriptions.Item label=<strong><u> Name: </u></strong> className="Name" style={{ fontSize: 16 }} className="donationName"> {item.name} </Descriptions.Item>
            <Descriptions.Item label=<strong><u> Details: </u></strong> style={{ fontSize: 16 }}> <Link to={"Target/"+item.giftTargetId}> Click for more info </Link> </Descriptions.Item>
            </React.Fragment>
        ))}
        </Descriptions>
    </div>
  );
}
