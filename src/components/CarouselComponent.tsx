import React from "react";
import { Carousel, Image } from "react-bootstrap";

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

interface CarouselComponentProps1 {
  items: CarouselComponentProps;
  show: boolean;
}

function CarouselComponent({items, show}: CarouselComponentProps1) {
  return (
    <Carousel className={show ? 'show' : ''}>
      <Carousel.Item className="d-flex">
        <Image className="object-fit-cover" src={items.img1} />
        <Carousel.Caption className="text-dark">
          <h3>{items.title1}</h3>
          <p>{items.body1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="object-fit-cover" src={items.img2} />
        <Carousel.Caption className="text-dark">
          <h3>{items.title2}</h3>
          <p>{items.body2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="object-fit-cover" src={items.img3} />
        <Carousel.Caption className="text-dark">
          <h3>{items.title3}</h3>
          <p>{items.body3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
