import React, { useState, useEffect } from "react";
import "./studentsSpeak.scss";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import API from "../../api";

const StudentsSpeak = () => {
  const [reveiws, setReveiws] = useState("");
  const getReviews = () => {
    API.get("/testimonials")
      .then((response) => {
        setReveiws(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Container fluid className="">
      <div className="studentsSpeak-title title">Students' Speak</div>
      <Container className="studentsSpeak">
        {/* <div className="studentsSpeak container-default"> */}
        <div className="studentsSpeak-carousel">
          <Carousel fade>
            {reveiws &&
              reveiws.map((review) => (
                <Carousel.Item key={review.id}>
                  <Row className="carouselItem">
                    <Col lg={4} className="left">
                      <img src={review.image} alt="" className="student-img" />
                    </Col>
                    <Col lg={8} className="right">
                      <div className="top-text-div">{review.message}</div>
                      <div className="bottom-text-div">
                        <div className="name">{review.name}</div>
                        <div className="position">{review.designation}</div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        {/* </div> */}
      </Container>
    </Container>
  );
};

export default StudentsSpeak;
