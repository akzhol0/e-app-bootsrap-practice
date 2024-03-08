import React from "react";
import { Button, Card } from "react-bootstrap";

interface CardComponentProps {
  title: string;
  price: number;
  img: string;
  height: string;
}

function CardComponent({ title, price, img, height }: CardComponentProps) {
  return (
    <Card className="border-1 p-1">
      <Card.Img
        className="object-fit-cover"
        style={{ height: `${height}` }}
        variant="top"
        src={img}
      />
      <Card.Body>
        <Card.Title className="h6">{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Text style={{ marginBottom: 0 }}>
            {price}$ <sub className="text-decoration-line-through text-secondary">1900$</sub>
          </Card.Text>
          <Button size="sm" variant="outline-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
