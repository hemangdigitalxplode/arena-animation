import React, { useState, useEffect } from "react";
import "./activieties.scss";
import API from "../../api";
import { Circles } from "react-loader-spinner";
import { Container } from "react-bootstrap";

const Activieties = () => {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);

  const getActivities = () => {
    setLoader(true);
    API.get("/cms/2")
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
        height: "40vh",
      }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <Container>
      <div className="title activities-title">Activities</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: data && data?.cms_contant }}
      />
    </Container>
  );
};

export default Activieties;
