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
            {bestanimationcms && (
              <div dangerouslySetInnerHTML={{ __html: bestanimationcms }} />
            )}
            {/* <div className="heading-subheader">
              THE BEST ANIMATION <br /> INSTITUTE <br /> IN DELHI NCR
            </div>
            <div className="paraContainer">
              <div className="paraContainer-left">
                <div className="paraContainer-left-first">
                  Arena Creative Campus established in the year 1996, offers
                  world class training facilities in the field of Animation,
                  Visual Fx, Gaming, Graphics and Web Designing.
                </div>
                <div className="paraContainer-left-second">
                  Our innovative pedagogy focuses on fostering creative learning
                  with the help of highly experienced, qualified and committed
                  trainers who inspire students to strengthen their power of
                  imagination and breathe life into their imaginary characters.
                </div>
              </div>
              <div className="paraContainer-right">
                <div>
                  It is the first centre to start its operations in South India
                  and has now reached a stage where we can say Arena Animation
                  students are the most preferred professionals in the industry.
                </div>
                <div className="knowMore">
                  <div className="knowMore-text">KNOW MORE</div>
                  <img src={YellowArrow} className="arrow-knowMore" />
                </div>
              </div>
            </div> */}

            {/* </div> */}
            {/* </div> */}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default SubHeader;
