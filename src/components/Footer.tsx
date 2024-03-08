import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import TopComponent from "./TopComponent";

function Footer() {
  const ColArticles = [
    {
      strong: "Online Support",
      small: "Dedicated Support Team",
      img: "/img/Icon.png",
      id: 1,
    },
    {
      strong: "Free Shipping",
      small: "Purchases Over $100",
      img: "/img/truck.png",
      id: 2,
    },
    {
      strong: "Timeless Shopping",
      small: "24/7 Purchasing",
      img: "/img/f.png",
      id: 3,
    },
    {
      strong: "Product Returns",
      small: "No-Questions-Asked Returns",
      img: "/img/free.png",
      id: 4,
    },
  ];

  return (
    <div>
      <Container>
        <Image className="w-100" src="/img/Products.png" />
        <div className="my-5">
          <Row className="d-flex">
            {ColArticles.map((item) => (
              <Col className="pb-4" xs={12} sm={6} xl={3}>
                <div className="d-flex justify-content-center gap-3">
                  <Image src={item.img} />
                  <span>
                    <strong>{item.strong}</strong>
                    <br />
                    <small>{item.small}</small>
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Container className="p-0" fluid>
        <p className="py-3 bg-primary text-center text-light fw-light p-0 m-0">
          © All Rights Reserved for Mansoury - 2024
        </p>
      </Container>
    </div>
  );
}

export default Footer;
