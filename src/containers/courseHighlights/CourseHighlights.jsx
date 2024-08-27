import React from "react";
import "./courseHighlights.scss";
import { Container, Row } from "react-bootstrap";
// import { BlackTick } from "../../assets";

// const data = [
//   {
//     id: 1,
//     point: "Job-oriented, industry centric curriculum",
//   },
//   {
//     id: 2,
//     point: "Placement assistance",
//   },
//   {
//     id: 3,
//     point: "Hands-on practical training using latest tools and software",
//   },
//   {
//     id: 4,
//     point: "Access to Onlinevarsity, our exclusive e-learning platform",
//   },
//   {
//     id: 5,
//     point: "Certified faculty",
//   },
//   {
//     id: 6,
//     point: "Access to Creosouls, a platform to showcase your portfolio",
//   },
//   {
//     id: 7,
//     point: "Exposure to industry interaction and workshops",
//   },
//   {
//     id: 8,
//     point: "Instant student loan facility to fund the studies",
//   },
// ];

const CourseHighlights = ({ highlight }) => {
  return (
    <Container className="course-highlights">
      {/* <div className="course-highlights container-default"> */}
      <div className="title course-highlights-title">COURSE Highlights</div>
      {/* <Row className="course-highlights-points"> */}
      {/* {data.map((i) => (
          <Col sm={12} lg={6} key={i.id} className="course-highlights-point">
            <img src={BlackTick} alt="Tick" className="Black-Tick" /> {i.point}
          </Col>
        ))} */}
      <Row
        className="course-highlights-points"
        dangerouslySetInnerHTML={{ __html: highlight }}
      />
      {/* </Row> */}
      {/* </div> */}
    </Container>
  );
};

export default CourseHighlights;
