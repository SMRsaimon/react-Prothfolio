import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

const WorkCard = (props) => {
  const { img, title, description, technology, gitLink, liveLink } = props.data;

  return (
    <>
      <div className="col-md-4 p-4">
        <Card className="card-container">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Body>
            {technology.map((x) => (
              <span>{x}</span>
            ))}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default WorkCard;
// 313552a6
