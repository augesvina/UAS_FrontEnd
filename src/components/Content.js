// Content.js
import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import g1 from "./1.png";
import g2 from "./2.png";
import g3 from "./3.png";
import g4 from "./4.png";
import g5 from "./5.png";
import g6 from "./6.png";
import g7 from "./7.png";
import g8 from "./8.png";

const content = () => {
  return (
    <div>
      <CardGroup>
        <Card style={{ width: "18rem" }} className="box">
          <Card.Img variant="top" src={g1} width={300} height={300}/>
          <Card.Body>
            <Card.Title>Cat Choize</Card.Title>
            <Card.Text>Rp 13.827</Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="box">
          <Card.Img variant="top" src={g2} width={300} height={300}/>
          <Card.Body>
            <Card.Title>Friskies</Card.Title>
            <Card.Text>Rp 10.937</Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="box">
          <Card.Img variant="top" src={g3} width={300} height={300}/>
          <Card.Body>
            <Card.Title>Cordura Necklace</Card.Title>
            <Card.Text>Rp 208.983</Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="box">
          <Card.Img variant="top" src={g4} width={300} height={300}/>
          <Card.Body>
            <Card.Title>Sweet Pillow by UNDFT</Card.Title>
            <Card.Text>Rp. 86.028</Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>
      </CardGroup>,

      <CardGroup>
  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g5} width={300} height={300}/>
    <Card.Body>
      <Card.Title>Coach Jacket by AbR</Card.Title>
      <Card.Text>Rp 206.894</Card.Text>
      <Button variant="success">Add to Cart</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g6} width={300} height={300}/>
    <Card.Body>
    <Card.Title>Friskies - Gravy Swirlers</Card.Title>
      <Card.Text>Rp 38.927</Card.Text>
      <Button variant="success">Add to Cart</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g7} width={300} height={300}/>
    <Card.Body>
    <Card.Title>Pedigree for Adult Dog</Card.Title>
      <Card.Text>Rp 63.085</Card.Text>
      <Button variant="success">Add to Cart</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem" }} className="box">
    <Card.Img variant="top" src={g8} width={300} height={300}/>
    <Card.Body>
    <Card.Title>Cesar for Puppy</Card.Title>
      <Card.Text>Rp 20.813</Card.Text>
      <Button variant="success">Add to Cart</Button>
    </Card.Body>
  </Card>
</CardGroup>
    </div>
  );
};

export default content;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import { Card, Button } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import download from "./download.svg";

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//     };
//     return (
//       <div>
//         {/* <h2> Multiple items </h2> */}
//         <Slider {...settings}>
//           <Card style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={download} />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//               <Button variant="success">Add to Cart</Button>
//             </Card.Body>
//           </Card>
//         </Slider>
//       </div>
//     );
//   }
// }
