import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import API from "../../api";
import "./recentActivities.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loader, setLoader] = useState(false);

  const getActivities = () => {
    setLoader(true);
    API.get("/event?page=1&limit=10")
      .then((response) => {
        setLoader(false);
        setActivities(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getActivities();
  }, []);

  return loader ? (
    <Circles
      height="120"
      width="120"
      color="#ffd800"
      ariaLabel="circles-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <Container>
      <div className="title recent-act-title">Recent Activities</div>
      <Row className="recent-activities-list">
        {activities &&
          activities?.map((item) => (
            <Col lg={6} md={6} sm={12}>
              <Link to={`/activity/${item.id}`} state={item.id}>
                <Card className="activity-card">
                  <Card.Img
                    className="activity-img"
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title className="activity-title">
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.sort_description}</Card.Text>
                    <Card.Text>
                      {format(parseISO(item.created_at), "dd MMM yyyy")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default RecentActivities;
