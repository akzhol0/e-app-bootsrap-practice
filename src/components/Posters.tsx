import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function Posters() {
  return (
    <div className="d-flex flex-column gap-4">
      <Row className="d-flex justify-content-center gap-4 gap-sm-0">
        <Col xs={12} sm={4}>
          <Image className="w-100" src="/img/Frame 2 (1).png" />
        </Col>
        <Col xs={12} sm={4}>
          <Image className="w-100" src="/img/Frame 3 (1).png" />
        </Col>
        <Col xs={12} sm={4}>
          <Image className="w-100" src="/img/Frame 4 (1).png" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center gap-4 gap-sm-0">
        <Col xs={12} sm={6}>
          <Image className="w-100" src="/img/Frame 5 (1).png" />
        </Col>
        <Col xs={12} sm={6}>
          <Image className="w-100" src="/img/Frame 6 (1).png" />
        </Col>
      </Row>
    </div>
  );
}

export default Posters;
