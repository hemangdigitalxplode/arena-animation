import React, { useState, useEffect } from "react";
import "./getInTouch.scss";
import { Row, Col, Container,Breadcrumb } from "react-bootstrap";
import Button from "../../components/button/Button";
import API from "../../api";
import GoogleMap from "../../components/googleMap/GoogleMap";
import { Circles } from "react-loader-spinner";

//   {
//     id: 1,
//     location: "Preet Vihar",
//     area: "New Delhi",
//     fullAddress: "F-25 3rd Floor, above KFC, Preet Vihar, New Delhi",
//     phoneNo: "098702 33115",
//     img: Map,
//   },
//   {
//     id: 2,
//     location: "SOUTH EXTETENSON",
//     area: "New Delhi",
//     fullAddress:
//       "E 75, South Extension, Block E, South Extension l, New Delhi, Delhi 110049",
//     phoneNo: "099713 67152",
//     img: Map,
//   },
//   {
//     id: 3,
//     location: "CHANDIGARH TRICITY",
//     area: "Sector 34A",
//     fullAddress:
//       "Sco-13-15 Sector 34a, Level-I, Above Dominos Chandigarh, Chandigarh -160022",
//     phoneNo: "8800012691/880012692",
//     img: Map,
//   },
//   {
//     id: 4,
//     location: "PITAMPURA",
//     area: "New Delhi",
//     fullAddress:
//       "Metro Station, Building No 368, First Kohat Enclave, Above Yes Bank, Kohat Enclave, Pitam Pura, New Delhi, Delhi 110034",
//     phoneNo: "098118 57761",
//     img: Map,
//   },
//   {
//     id: 5,
//     location: "KAMILA NAGAR",
//     area: "New Delhi",
//     fullAddress:
//       "D-98, Kamla Nagar, near North Campus, DU, New Delhi, Delhi 110007",
//     phoneNo: "097112 25298",
//     img: Map,
//   },
//   {
//     id: 6,
//     location: "NOIDA-18",
//     area: "Noida Sector-18",
//     fullAddress:
//       "Arena Animation, P-6/702, 7th Floor, Ocean Complex, Sector-18, Noida.",
//     phoneNo: "9811001395/9811001368",
//     img: Map,
//   },
//   {
//     id: 7,
//     location: "NOIDA-62",
//     area: "Noida Sector-62",
//     fullAddress:
//       "B-23/A, Gauravdeep Heights, sector-62, Nodia(Behind Fortis Hospital)",
//     phoneNo: "9873000213/9810780148",
//     img: Map,
//   },
// ];

const GetInTouch = ({ handleCall, handleButtonClick }) => {
  const [centers, setCenters] = useState("");
  const [navigation, setNavigation] = useState("");
  const [loader, setLoader] = useState(false);

  const getCenters = () => {
    setLoader(true);
    API.get("/centers")
      .then((response) => {
        setLoader(false);
        setCenters(response?.data?.data);
        setNavigation(response?.data?.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const redirectToGoogleMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    getCenters();
  }, []);

  const handleChange = (item) => {
    setNavigation(item);
  };

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
    <div className="get-in-touch">
      <div className="breadhead">
        <Breadcrumb>
          <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* <div className="container-default"> */}
      <Container>
        <h1 className="title get-in-touch-title">Get In Touch</h1>
        <Row className="get-in-touch-row">
          <Col lg={3} className="get-in-touch-nav">
            {centers &&
              centers.map((address) => (
                <div
                  key={address.id}
                  className={
                    navigation.id === address.id ? "active" : "address-div"
                  }
                  onClick={() => handleChange(address)}
                >
                  <div>
                    <div className="address-heading">{address.title}</div>
                    <div className="address-div-subheading">
                      {address.title_second}
                    </div>
                  </div>

                  <div className="arrow">
                    {navigation.id === address.id ? "▶" : ""}
                  </div>
                </div>
              ))}
          </Col>
          <Col lg={8} className="get-in-touch-card">
            <div className="map-div">
              <GoogleMap
                lat={parseFloat(navigation?.latitude, 10)}
                lng={parseFloat(navigation?.longitude, 10)}
              />
            </div>
            <Row className="card-bottom">
              <Col lg={6} className="left">
                <div>Phone no. - {navigation?.phone}</div>
                <div className="fullAddress">{navigation?.address}</div>
              </Col>
              <Col lg={6} className="right">
                <div className="buttons">
                  <Button
                    title="Call Now"
                    onClick={() => handleCall(navigation?.phone)}
                  />
                  <Button title="Enquire Now" onClick={handleButtonClick} />
                </div>
                <div
                  className="location-link"
                  onClick={() =>
                    redirectToGoogleMaps(
                      navigation?.latitude,
                      navigation?.longitude
                    )
                  }
                >
                  Get Direction On Map
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default GetInTouch;
