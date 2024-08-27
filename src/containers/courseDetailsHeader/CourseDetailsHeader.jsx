import React from "react";
import "./courseDetailsHeader.scss";
import Button from "../../components/button/Button";
import { Container } from "react-bootstrap";
// import { CouseDetailsHeader } from "../../assets";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const CourseDetailsHeader = ({
  title,
  bgURL,
  desc,
  duration,
  skillLevel,
  brouchure,
  handleShow,
}) => {
  // console.log(bgURL) 
  return (
    <>
    
    <Breadcrumb>
      <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item>
       Course Details
      </Breadcrumb.Item>
      <Breadcrumb.Item active> {title}</Breadcrumb.Item>
    </Breadcrumb>

    <div
      className="couseDetailsHeaderBackground"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <Container className="couseDetailsHeader-container">
        {/* <div className="couseDetailsHeader-container container-default"> */}

        <div className="couseDetailsHeader-content">
        <h1 className="title couseDetailsHeader-title">{title}</h1>
          <div className="couseDetailsHeader-content-top">
            <div className="couseDetailsHeader-content-top-text">
              Duration-{duration}
            </div>
          </div>

          <div className="couseDetailsHeader-content-top pt-0">
            <div className="couseDetailsHeader-content-top-text">
              Skill Level-{skillLevel}
            </div>
          </div>
          <div className="couseDetailsHeader-button">
            <a target="_blank" href={brouchure} rel="noreferrer">
              <Button title="Download Brochure" />
            </a>
            <Button title="Apply Now" onClick={handleShow} />
          </div>
          <div
            className="couseDetailsHeader-paras"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          {/* <div>
              <span>
                Arena's Graphic Design & Development for Print and Social Media
              </span>{" "}
              Arena's Graphic Design & Development for Print and Social Media is
              a comprehensive course that trains you in all aspects of graphic
              design, print design, and more. It exposes you to the
              fundamentals, techniques and trends in print & publishing required
              to succeed in the industry.
            </div>
            <div>
              This print and digital design course covers industry-endorsed
              techniques to make you an in-demand new media creative
              professional who is equipped with the skills to create rich
              multimedia content, visually appealing websites, logos for
              advertisements, concepts of digital graphics, image editing for
              print & publishing, and more.
            </div>
          </div> */}
        </div>
        {/* </div> */}
      </Container>
    </div>
    </>
  );
};





export default CourseDetailsHeader;
