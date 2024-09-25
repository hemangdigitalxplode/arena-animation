import React, { useState, useEffect } from "react";
import "./careerOptions.scss";
import { Row, Col, Container } from "react-bootstrap";
// import { Storyboards } from "../../assets";
// import { set } from "date-fns";

const CareerOptions = ({ careerOptions, careerOption, handleShow }) => {
  const [navigation, setNavigation] = useState();

  useEffect(()=>{
    setNavigation(careerOption);
  },[careerOption])
  const handleChange = (item) => {
    setNavigation(item);
  };
console.log(careerOptions)
  return (
    <Container className="CareerOptions">
      {/* <div className="CareerOptions container-default"> */}
      <div className="title CareerOptions-title">Career Options</div>
      <Row className="careerOption-content">
        <Col lg={3} className="careerOption-content-nav">
          {careerOptions &&
            careerOptions?.map((i) => (
              <div
                className={navigation?.id === i?.id ? "active" : `nav-item`}
                onClick={() => handleChange(i)}
              >
                {i?.title}
              </div>
            ))}
        </Col>
        <Col lg={8} className="careerOption-content-card">
          <div className="careerOption-img-div">
            <img
              src={navigation?.career_image}
              alt="Storyboards"
              className="careerOption-img"
            />
          </div>
          <Row className="careerOption-text-div">
            <Col lg={5} className="left">
              <div className="CareerOption-title">{navigation?.title}</div>
              <div onClick={handleShow} role="button">
                <div className="IamIntersted">I am Interested</div>
              </div>
            </Col>
            <Col lg={6} className="right">
              {navigation?.career_description}
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default CareerOptions;
