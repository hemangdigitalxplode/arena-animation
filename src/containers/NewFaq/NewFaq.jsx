import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewFaq.scss";
import API from "../../api";

const NewFaq = ({newFaq}) => {
  const [show, setShow] = useState(false);
  const [faq, setFaq] = useState("");

  const getFaqs = () => {
    API.get("/faq")
      .then((response) => {
        setFaq(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <Container>
      {/* <div className="container-default"> */}
      <Row className="askedQuestions-container">
        <Col lg={6} className="left">
          <div className="askquestions-title">Frequently Asked Questions</div>
          <div className="askquestion-desc">
            We've gathered answers to questions you might have about our courses
            and services. It's here to make things easy for you.
            <br/>
            Let's get started!
          </div>
          {/* <div className="help">vist help center →</div> */}
        </Col>
        <Col lg={6} className="right-new">
           <div className="right-new" dangerouslySetInnerHTML={{ __html: newFaq }}>
           
            </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default NewFaq;
