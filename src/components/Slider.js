import React from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import download from "./download.svg";

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    
    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const style = {
        width: '15rem'
    };

    return(
        <div className="container">
            <Slider {...settings}>
                {/* {posts.map((index)=>{ */}
                    {/* return( */}
                    <div>
                        <Card style={style}>
                            <Card.Img variant="top" src={download} />
                            <Card.Body>
                                <Card.Title>Card Title  </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* ); */}
                {/* })} */}
            </Slider>
        </div>
    );
}

export default Sliders;

// import React from "react";
// import Slider from "react-slick";
// import { Card, Button } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import download from "./download.svg";

// const Sliders = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 3
//     };
    
//     const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     const style = {
//         width: '15rem'
//     };

//     return(
//         <div className="container">
//             <Slider {...settings}>
//                 {posts.map((index)=>{
//                     return(
//                     <div>
//                         <Card style={style}>
//                             <Card.Img variant="top" src={download} />
//                             <Card.Body>
//                                 <Card.Title>Card Title {index[1]} </Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of the card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     );
//                 })}
//             </Slider>
//         </div>
//     );
// }

// export default Sliders;