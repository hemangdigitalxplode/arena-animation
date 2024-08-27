import React from "react";
import { Link } from "react-router-dom";
import "./thankyou.scss";
import RewardsBanner2 from "../../assets/thanky.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";


var blogFirst = [
{
   "id":1,
   "title":"Blue Screen Vs Green Screen: Explained",
    "desc" : "As an aspiring VFX Artist, you must have seen tons of"
},


]


var [{title,desc}] = blogFirst



function Thankyou() {
  return (
    <>
      <Container>
        <Row className="mt-n5">
          <div className="top-banner-section">
            <Image src="" alt="" fluid className="height-80vh" />
           
          </div>

          <Col sm={12} md={12} className="mt-5 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible",animationDelay: "0.4s",animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
             <img alt="img" src={RewardsBanner2}/>
             
              </div>
    
            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Thankyou;
