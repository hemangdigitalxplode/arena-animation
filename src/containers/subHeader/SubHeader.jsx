import React from "react";
import "./subHeader.scss";
import { Container } from "react-bootstrap";
// import { Layer, SubHeaderBack } from "../../assets";
import { YellowArrow } from "../../assets";
const SubHeader = ({ bestanimationcms }) => {
  return (
    <Container fluid className="subHeadingBackground">
      {/* <img src={SubHeaderBack} alt="image" className="image" /> */}
      {/* <div className="absolute-div container-default"> */}
      <Container className="top-of-absolute">
        <Container className="absolute-div">
          {/* <img src={Layer} alt="Image" className="Layer-Image" /> */}
          {/* <div className="container-default"> */}
          <Container>
            {/* {bestanimationcms && (
              <div dangerouslySetInnerHTML={{ __html: bestanimationcms }} />
            )} */}


            <div className="heading-subheader">
              THE BEST ANIMATION <br /> INSTITUTE <br /> IN DELHI NCR
            </div>
            <div className="paraContainer">
              <div className="paraContainer-left col-lg-7">
                <div className="paraContainer-left-first">
                Aptech Limited, one of India's biggest non-formal vocational training for over 30 years, created Arena Animation, the Best Animation Institute brand, in 1996. Arena Animation is a pioneer and a worldwide-known institute that provides non-formal academic training programs in animation alongside related topics.
                </div>
                <div className="paraContainer-left-second">
                Arena Animation, with its strong industry connections and affiliations, has been producing relevant academic courses that impart skills that make students highly employable. Arena students work as Graphic Designers, Web Designers, 2D/3D Animators, 2D/3D Designers, AV Editors, Technical Trainers, 3D Modelers, Multimedia Programmers, Compositors, Visualizers, Content Developers, and Pre and Post Production Executives in major animation studios and entertainment companies.
                </div>
              </div>
              <div className="paraContainer-right">
                <div>
                The Best Institute for Animation in Delhi proudly maintains an amazing placement history spanning 25 years and continues to raise the standard for more successful professions!
                </div>
                {/* <div className="knowMore">
                  <div className="knowMore-text">KNOW MORE</div>
                  <img src={YellowArrow} className="arrow-knowMore" />
                </div> */}
              </div>
            </div>

            {/* </div> */}
            {/* </div> */}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default SubHeader;
