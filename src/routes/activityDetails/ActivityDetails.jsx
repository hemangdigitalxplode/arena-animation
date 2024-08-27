import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Row, Col, Image, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import API from "../../api";
import "./activityDetails.scss";

const ActivityDetails = () => {
  const location = useLocation();
  const activityId = location.state;
  const [activity, setActivity] = useState("");
  const [loader, setLoader] = useState(false);

  const getActivity = (id) => {
    setLoader(true);
    API.get(`/event/${id}`)
      .then((response) => {
        setLoader(false);
        setActivity(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getActivity(activityId);
  }, [activityId]);

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
    <Container className="acivity-container">
      {/* <div className="container-default acivity-container"> */}
      <div className="activity-banner">
        <Image
          src={activity && activity?.event?.image}
          alt=""
          className="bannner"
        />
      </div>
      <div className="activity-title">{activity && activity?.event?.title}</div>
      <div className="activity-desc">
        {activity && activity?.event?.description}
      </div>
      <Row className="mt-4">
        {activity &&
          activity?.album?.album_images?.map((img) => (
            <Col key={img.id} lg={4} className="mb-4">
              <Image src={img?.image} alt="" className="album-img" />
            </Col>
          ))}
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default ActivityDetails;
