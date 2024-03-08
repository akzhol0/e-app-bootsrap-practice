import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import CarouselComponent from "./CarouselComponent";

interface CarouselComponentProps {
    title1: string;
    body1: string;
    title2: string;
    body2: string;
    title3: string;
    body3: string;
    img1: string;
    img2: string;
    img3: string;
  }

interface Products {
    items: CarouselComponentProps
}

function Products({items}: Products) {
  return (
    <Row className="d-flex gap-4 gap-md-0">
      <Col className="d-flex flex-column gap-1" xs={12} sm={6} md={8} lg={2}>
        <h5>Discover Hot Deals for Your Home!</h5>
        <small style={{ fontSize: "12px" }}>
          In Mansoury, daily you can find the highest discounts across all
          categories and products available on the website.
        </small>
        <Button className="text-light" variant="primary">
          Show All Products
        </Button>
      </Col>
      <Col className="d-none d-lg-flex gap-4" lg={10}>
        <CardComponent height="150px" title="Bosch 300 Series SHEM63W55N" price={998} img="/img/1.png"/>
        <CardComponent height="150px" title="C-34 Series SHEM63W55N" price={390} img="/img/2.png"/>
        <CardComponent height="150px" title="KEY 140-D Series SHEM63W55N" price={490} img="/img/3.png"/>
        <CardComponent height="150px" title="Bradley Series SHEM63W55N" price={990} img="/img/4.png"/>
      </Col>
      <Col className="w-100 d-flex justify-content-center justify-content-sm-between d-lg-none gap-4" xs={12} sm={2} md={2}>
        <CarouselComponent show={true} items={items} />
      </Col>
    </Row>
  );
}

export default Products;
