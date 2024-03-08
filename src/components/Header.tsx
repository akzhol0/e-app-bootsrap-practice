import React from "react";
import { Container } from "react-bootstrap";
import TopComponent from "./TopComponent";
import NavBarComponent from "./NavBarComponent";
import CarouselComponent from "./CarouselComponent";
import CarouselItems1 from "../service/Carouselitems1";

function Header() {
  return (
    <div>
      <Container fluid className="bg-primary">
        <Container>
          <TopComponent />
        </Container>
      </Container>
      <Container fluid className="bg-white">
        <Container>
          <NavBarComponent />
          <CarouselComponent show={false} items={CarouselItems1} />
        </Container>
      </Container>
    </div>
  );
}

export default Header;
