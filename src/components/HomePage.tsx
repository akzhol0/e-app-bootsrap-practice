import React from "react";
import "../styles/globalStyles.css";
import Header from "./Header";
import { Col, Container, Row, Image, NavDropdown } from "react-bootstrap";
import Products from "./Products";
import CarouselItems2 from "../service/CarouseIitems2";
import Posters from "./Posters";
import Collections from "./Collections";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <div className="my-5">
            <Products items={CarouselItems2} />
          </div>
          <div className="my-5">
            <Posters />
          </div>
          <Container className="my-5">
            <Collections/>
          </Container>
        </Container>
      </main>
      <footer className="mt-5">
        <Footer/>
      </footer>
    </div>
  );
}

export default HomePage;
