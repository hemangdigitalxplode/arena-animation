import React, { useState, useEffect } from "react";
import "./awards.scss";
import API from "../../api";
import { Circles } from "react-loader-spinner";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { rewardsBanner } from "../../assets";
import CallBackForm from "../../containers/callBackForm/CallBackForm";
import { Helmet } from "react-helmet";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Awards = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const handleKnowMoreClick = (rewardId) => {
    API.get(`/reward/${rewardId}`)
      .then((response) => {
        setSelectedReward(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedReward(null);
    setShowModal(false);
  };

  const fetchRewards = () => {
    setLoader(true);
    API.get("/reward")
      .then((response) => {
        setData(response?.data?.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRewards();
  }, []);

  return loader ? (
    <>
      <Circles
        height="120"
        width="120"
        color="#ffd800"
        ariaLabel="circles-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
        wrapperClass=""
        visible={true}
      />
    </>
  ) : (
    <div className="breadhead">
      <Helmet>
        <title>Our Rewards - Arena Animation</title>
        <meta
          name="description"
          content="Click here to learn about out student’s success. Our students participated in international and national level competitions and wins various rewards. Check here!"
        />
        <link
          rel="canonical"
          href="http://animationdelhincr.com/rewards"
        ></link>
      </Helmet>
      <Breadcrumb>
        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Rewards</Breadcrumb.Item>
      </Breadcrumb>
      <div className="top-banner-section">
        <Image src={rewardsBanner} alt="" fluid className="height-80vh" />
        <h1 className="reward-title">Rewards</h1>
      </div>
      <div className="second-section">
        <h3>AWARDS AND ACCOLADES</h3>
        <p className="second-desc">
          Arena Animation enables students to reach their career goals and opens
          up various avenues for them to achieve their highest creative
          potential. Arena Animation students participate and win at national
          and international level competitions.
        </p>
      </div>
      <div className="rewards-card-section">
        <Container>
          <Row className="rewards-card-row">
            {data?.map((reward) => (
              <Col md={6} lg={4} key={reward?.id} className="mb-5 px-3">
                <div className="reward-card-container">
                  <div className="reward-card-content">
                    <Image src={reward?.image} fluid />
                    <div className="text-center mt-3">{reward?.title}</div>
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      variant="outline-light"
                      onClick={() => handleKnowMoreClick(reward?.id)}
                    >
                      Know More
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <CallBackForm />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedReward?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display reward details here */}
          {selectedReward && (
            <div>
              <Image src={selectedReward?.image} rounded fluid />
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedReward?.description,
                }}
                className="mt-2"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Awards;
