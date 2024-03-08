import React from "react";
import { Carousel, Col, Row, Image } from "react-bootstrap";
import CardComponent from "./CardComponent";
import CardArray from "../service/CardArray";

function Collections() {
  return (
    <div>
      <h1 id="products" className="text-center fw-bold text-secondary">
        Products You May Like
      </h1>
      <Row className="p-5 d-none d-md-flex">
        {CardArray.map((item) => (
          <Col sm={6} md={4} lg={3}>
            <CardComponent
              title={item.title}
              price={item.price}
              img={item.img}
              height="220px"
            />
          </Col>
        ))}
      </Row>
      <Carousel className="w-full p-md-5 d-block d-md-none">
        {CardArray.map((item) => (
          <Carousel.Item>
            <Image className="w-100" src={item.img} />
            <Carousel.Caption className="text-dark">
              <h3>{item.title}</h3>
              <p>{item.price}$</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Collections;
