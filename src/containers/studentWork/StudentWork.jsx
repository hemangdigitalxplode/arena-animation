import React, { useEffect, useState } from "react";
import "./studentWork.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import API from "../../api";

const StudentWork = ({ workImgs }) => {
  const location = useLocation(); // Get the current URL location
  const [itemsToShow, setItemsToShow] = useState(
    location.pathname === "/student-work" ? null : 8
  );

  const [studentWork, setStudentWork] = useState(null); // Initialize with null

  const getStudentWork = () => {
    API.get("/home")
      .then((response) => {
        setStudentWork(response?.data?.data?.portfolio);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/student-work") {
      // Fetch data from API when location is "/student-work"
      getStudentWork();
    }
  }, [location]);

  useEffect(() => {
    // Scroll to the top whenever the location changes to "/student-work"
    if (location.pathname === "/student-work") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // If studentWork data is available (from API), use it, otherwise use workImgs prop
  const dataToShow = studentWork || workImgs;

  return (
    <Container fluid className="student-work-background-image">
      <Container className="student-work-background-image">
        {/* <div className="container-default student-work-background-image"> */}
        <div className="student-work-title">STUDENT WORK</div>
        <div className="student-work-text">
          Check out the outstanding creative works done by Arena Animation
          students.
        </div>
        <Row className="">
          {dataToShow &&
            dataToShow
              ?.slice(0, itemsToShow !== null ? itemsToShow : dataToShow.length)
              ?.map((img) => (
                <Col
                  lg={3}
                  xs={6}
                  key={img.id}
                  className="mb-3 student-work-image "
                >
                  <img src={img.image} alt="student-work-arena-animation" className="imgTag" />
                </Col>
              ))}
        </Row>
        <div className="text-center">
          {itemsToShow !== null && location.pathname !== "/student-work" && (
            <Link to="/student-work">
              <button className="button-style">See More</button>
            </Link>
          )}
        </div>
        {/* </div> */}
      </Container>
    </Container>
  );
};

export default StudentWork;
