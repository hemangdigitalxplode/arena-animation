import React from "react";
import "./toolsAndSoftware.scss";
import { Row, Col, Container } from "react-bootstrap";
// import {
//   AbodeLightroom2,
//   AbodeLightroom,
//   AbodeMediaEncoder,
//   AdobeAfterEffects2,
//   AdobeAfterEffects,
//   AdobeAudition,
//   AdobeIllustrator,
//   AdobeInCopy,
//   AdobeInDesign,
//   AbodePhotoshop,
//   AbodePhotoshop2,
//   AbodePremierePro,
//   AdobeXd,
//   AdobeXd2,
//   AdobeXd3,
//   AutoDesk3dsMax,
//   AutoDeskMaya,
//   CorelDraw,
// } from "../../assets/toolsAndSoftware";

// const data = [
//   {
//     id: 1,
//     img: AbodePhotoshop2,
//     text: "Adobe Photoshop",
//   },
//   {
//     id: 2,
//     img: AdobeIllustrator,
//     text: "Adobe Illustrator",
//   },
//   {
//     id: 3,
//     img: AdobeAfterEffects2,
//     text: "Adobe After Effects",
//   },
//   {
//     id: 4,
//     img: AbodePremierePro,
//     text: "Adobe Photoshop",
//   },
//   {
//     id: 5,
//     img: AdobeInDesign,
//     text: "Adobe inDesign",
//   },
//   {
//     id: 6,
//     img: AdobeXd2,
//     text: "Adobe XD",
//   },
//   {
//     id: 7,
//     img: AbodeMediaEncoder,
//     text: "Adobe Media Encoder",
//   },
//   {
//     id: 8,
//     img: AbodeLightroom,
//     text: "Adobe Lightroom",
//   },
//   {
//     id: 7,
//     img: AdobeAudition,
//     text: "Adobe Audition",
//   },
//   {
//     id: 10,
//     img: CorelDraw,
//     text: "Corel Draw",
//   },
//   {
//     id: 11,
//     img: AdobeInCopy,
//     text: "Adobe inCopy",
//   },
//   {
//     id: 12,
//     img: AdobeXd3,
//     text: "Adobe XD",
//   },
//   {
//     id: 13,
//     img: AbodePhotoshop,
//     text: "Adobe Photoshop",
//   },
//   {
//     id: 14,
//     img: AbodeLightroom2,
//     text: "Adobe Lightroom",
//   },
//   {
//     id: 15,
//     img: AdobeAfterEffects,
//     text: "Adobe After Effects",
//   },
//   {
//     id: 16,
//     img: AutoDeskMaya,
//     text: "Autodesk Maya",
//   },
//   {
//     id: 17,
//     img: AutoDesk3dsMax,
//     text: "Autodesk 3DS Max",
//   },
//   {
//     id: 18,
//     img: AdobeXd,
//     text: "Adobe XD",
//   },
// ];

const ToolsAndSoftware = ({ coursetools }) => {
  return (
    <Container className="toolAndSoftware">
      {/* <div className="container-default toolAndSoftware"> */}
      <div className="title toolAndSoftware-title">Tools & Software</div>
      <Row className="toolAndSoftware-toolsList">
        {coursetools &&
          coursetools?.map((i) => (
            <Col
              lg={2}
              xs={4}
              sm={3}
              key={i.id}
              className="toolAndSoftware-tool"
            >
              <div>
                <img
                  src={i.tool_image}
                  alt=""
                  className="toolAndSoftware-img"
                />
              </div>
              <div>{i.title}</div>
            </Col>
          ))}
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default ToolsAndSoftware;
