import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./eligibilityDurationFees.scss";
import { nl2br } from "../../api/helper";

const EligibilityDurationFees = ({
  eligibilityCriteria,
  courseDurationDetail,
  courseFeeDetail,
}) => {
  return (
    <Container className="eligibilityDurationFees">
      {/* <div className="container-default eligibilityDurationFees"> */}
      <Row className="eligibilityDurationFees-content">
        <Col lg={4} className="content-div">
          <div className="content-title">Eligibility Criteria</div>
          <div className="d-flex justify-content-center">
            <div className="content-text">{eligibilityCriteria}</div>
          </div>
        </Col>
        <Col lg={4} className="content-div">
          <div className="content-title">COURSE DURATION</div>
          <div className="d-flex justify-content-center">
            <div className="content-text">{courseDurationDetail}</div>
          </div>
        </Col>
        <Col lg={4} className="content-div">
          <div className="content-title">Course Fees</div>
          <div className="d-flex justify-content-center">
          <div
            className="content-text"
            dangerouslySetInnerHTML={{ __html: nl2br(courseFeeDetail) }}
          />
            {/* <div className="content-text">{nl2br(courseFeeDetail)}</div> */}
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default EligibilityDurationFees;
