import { Descriptions, Badge } from 'antd';
import { Link } from "react-router-dom";
import React from "react";

export default function Invoices(props) {
  return (
      <Descriptions title="Donation Targets" bordered column={2}>
        {props.data.map(item => (
            <React.Fragment key={item.giftTargetId}>
            <Descriptions.Item label="Name">{item.name} </Descriptions.Item>
            <Descriptions.Item label="Details"> <Link to={"Target/"+item.giftTargetId}>Click to get details </Link> </Descriptions.Item>
            </React.Fragment>
        ))}
        </Descriptions>
  );
}
