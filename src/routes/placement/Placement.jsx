import React, { useState, useEffect } from "react";
import "./placement.scss";
import API from "../../api";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Circles } from "react-loader-spinner";
import { placementBanner } from "../../assets";
import CallBackForm from "../../containers/callBackForm/CallBackForm";
import SeoTag from "../seotag/SeoTag";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Helmet } from "react-helmet";

const Placement = ({ handleShow }) => {

  const title = "Testing Placement";
  const description = "Placement Page";
  const pageurl = "Page url";

  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(16); // State variable to track the number of visible columns

  const loadMore = () => {
    setVisibleColumns(data?.images?.length); // Show all columns when "Load More" is clicked
  };

  const getPlacement = () => {
    setLoader(true);
    API.get("/placement")
      .then((response) => {
        setLoader(false);
        setData(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlacement();
  }, []);

  return loader ? (
    <>

      <SeoTag title={title} description={description} pageurl={pageurl} />

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
        <title>Placement Opportunities - Arena Animation</title>
        <meta name="description" content="Check out our various placement opportunities and gain detailed insights into successful career paths. Navigate our placement programs to kickstart your career." />
        <link rel="canonical" href='http://animationdelhincr.com/placement'></link>
   </Helmet>
      <Breadcrumb>
        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Placement</Breadcrumb.Item>
      </Breadcrumb>
      <div className="top-banner-section">
        <Image src={placementBanner} alt="" fluid className="height-100vh" />
        <div className="text-section">
          <h1 className="title placement-title">PLACEMENT </h1>
          <div className="placement-desc">
            Arena Animation offers industry-relevant courses in animation,
            filmmaking, VFX, gaming, web graphics, UI-UX, broadcast, multimedia
            and more. Arena helps you prepare for global careers in this new-age
            media and entertainment industry.
          </div>
        </div>
      </div>
      <div className="gray-section">
        <div className="gray-section-text">
          To make you a job-ready creative professional, Arena Animation helps
          you with industry-relevant skills, sharpens your talent with
          technique, gives you industry exposure through formal and informal
          events, showcases your skills in various platforms, ensures your
          job-readiness with Employability Enhancement and helps you with
          interview preparations.
        </div>
      </div>

      <div className="gray-section">
        <div className="gray-section-text">
          <h3>JOB PLACEMENTS</h3>
          <p className="job-placement-desc">
            Our job placement assistance has ensured bright careers for our
            students in leading media and entertainment companies. Some notable
            names include
          </p>
        </div>
      </div>
      <Container>
        <Row className="mt-4 align-items-center">
          {data &&
            data?.images?.slice(0, visibleColumns).map((img, i) => (
              <Col xs={4} md={4} lg={3} key={i} className="mb-3 py-2">
                <img src={img.image} alt="" className="placement-img" />
              </Col>
            ))}
        </Row>
        {data?.images?.length > 16 && visibleColumns === 16 && (
          <div className="text-center">
            <button className="button-style" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
        <div className="text-center">
          <Button
            variant="light"
            className="font-size-button mt-4 "
            onClick={handleShow}
          >
            I WISH TO JOIN A COURSE AT ARENA
          </Button>
        </div>
        <CallBackForm />
      </Container>
    </div>
  );
};

export default Placement;
