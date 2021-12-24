// Content.js
import React from "react";
import { CardGroup, Card, Button} from "react-bootstrap";
import g1 from "./12.jpg";
import g2 from "./11.jpg";
import g3 from "./13.jpg";
import g4 from "./14.jpg";

const Dokter = () => {
  return(
    <CardGroup>
  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g1} width="250" height="250"/>
    <Card.Body>
      <Card.Title>Augesvina</Card.Title>
      <Card.Text>
        0857 3340 1413
      </Card.Text>
      <Button variant="success">Add to Cart</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g2} width="250" height="250"/>
    <Card.Body>
    <Card.Title>Andrean L N A</Card.Title>
      <Card.Text>
        0822 3050 5578
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g3} width="250" height="250"/>
    <Card.Body>
    <Card.Title>Farhanang W A</Card.Title>
      <Card.Text>
        0819 0743 5155    
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g4} width="250" height="250"/>
    <Card.Body>
    <Card.Title>Bancar</Card.Title>
      <Card.Text>
        0813 1483 7246
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
  );
}

export default Dokter;