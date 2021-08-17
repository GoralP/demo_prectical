import React from "react";
import { Timeline } from "antd";
import { Row, Col } from "reactstrap";
import { Progress } from "antd";

const TimeLineDemo = () => {
  return (
    <Row>
      <Col sm={6} className="border">
        <Timeline>
          <Timeline.Item>Step 1</Timeline.Item>
          <Timeline.Item>Step 2</Timeline.Item>
          <Timeline.Item>Step 3</Timeline.Item>
          <Timeline.Item>Step 4</Timeline.Item>
        </Timeline>
      </Col>
      <Col sm={6}>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress percent={60} success={{ percent: 30 }} type="circle" />
        <Progress type="circle" percent={100} />
      </Col>
    </Row>
  );
};

export default TimeLineDemo;
