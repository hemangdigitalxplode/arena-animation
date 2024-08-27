import React, { useEffect, useState } from "react";
import "./ourCourses.scss";
import CouresCard from "../../components/couresCard/CouresCard";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import API from "../../api";

const OurCoures = ({ coursesCMS }) => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [courses, setCourses] = useState("");

  const handleViewMore = () => {
    setItemsToShow(courses?.length); // Show all items
  };

  const getCourseList = () => {
    API.get("/course")
      .then((response) => {
        setCourses(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCourseList();
  }, []);

  return (
    <Container id="our-courses" className="ourCourse-container">
      <div className="heading-ourcourse">OUR COURSES</div>
      <Row className="cards-container">
        {courses &&
          courses?.slice(0, itemsToShow)?.map((i) => (
            <Col key={i.id} lg={6} sm={6} className="card-container mb-4">
              <Link state={i.id} to={`/course-details/${i.slug}`}>
                <CouresCard title={i.name} src={i.video} />
              </Link>
            </Col>
          ))}
      </Row>
      <div className="text-center">
        {itemsToShow < courses?.length && (
          <button className="button-style" onClick={handleViewMore}>
            Load More
          </button>
        )}
      </div>
      {coursesCMS && <div dangerouslySetInnerHTML={{ __html: coursesCMS }} />}
    </Container>
  );
};

export default OurCoures;
