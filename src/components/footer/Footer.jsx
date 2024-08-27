import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./footer.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { Logo } from "../../assets";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import API from "../../api";

// const addressData = [
//   {
//     id: 1,
//     location: "Preet Vihar",
//     area: "New Delhi",
//     fullAddress: "F-25 3rd Floor, above KFC, Preet Vihar, New Delhi",
//     phoneNo: "098702 33115",
//   },
//   {
//     id: 2,
//     location: "SOUTH EXTETENSON",
//     area: "New Delhi",
//     fullAddress:
//       "E 75, South Extension, Block E, South Extension l, New Delhi, Delhi 110049",
//     phoneNo: "099713 67152",
//   },
//   {
//     id: 3,
//     location: "CHANDIGARH TRICITY",
//     area: "Sector 34A",
//     fullAddress:
//       "Sco-13-15 Sector 34a, Level-I, Above Dominos Chandigarh, Chandigarh -160022",
//     phoneNo: "8800012691/880012692",
//   },
//   {
//     id: 4,
//     location: "PITAMPURA",
//     area: "New Delhi",
//     fullAddress:
//       "Metro Station, Building No 368, First Kohat Enclave, Above Yes Bank, Kohat Enclave, Pitam Pura, New Delhi, Delhi 110034",
//     phoneNo: "098118 57761",
//   },
//   {
//     id: 5,
//     location: "KAMILA NAGAR",
//     area: "New Delhi",
//     fullAddress:
//       "D-98, Kamla Nagar, near North Campus, DU, New Delhi, Delhi 110007",
//     phoneNo: "097112 25298",
//   },
//   {
//     id: 6,
//     location: "NOIDA-18",
//     area: "Noida Sector-18",
//     fullAddress:
//       "Arena Animation, P-6/702, 7th Floor, Ocean Complex, Sector-18, Noida.",
//     phoneNo: "9811001395/9811001368",
//   },
//   {
//     id: 7,
//     location: "NOIDA-62",
//     area: "Noida Sector-62",
//     fullAddress:
//       "B-23/A, Gauravdeep Heights, sector-62, Nodia(Behind Fortis Hospital)",
//     phoneNo: "9873000213/9810780148",
//     link: "tel:+919810780148",
//   },
// ];

const styles = {
  testimonialBox: {
    textAlign: "center",
    height: "350px",
    backgroundColor: "#333",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
  },
  testimonialImage: {
    width: "100px",
    height: "100px",
    marginBottom: "15px",
  },
  testimonialText: {
    color: "white",
  },
  heading: {
    fontSize: "29px",
    color: "white",
  },
};

const Footer = ({ centers, handleShow, handleCall, phoneNo }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    API.get("/course")
      .then((response) => {
        setCourses(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Container>
        <p className="text-white text-center headingFont mt-6 mb-4">
          What Our Student's Say
        </p>
        <Carousel
          interval={null}
          indicators={false}
          className="custom-carousel"
        >
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <div style={styles.testimonialBox}>
                  <Image
                    src="https://lh3.googleusercontent.com/a-/ALV-UjVbmCUbOi3y7ZjTwePwA1-M9jPLSDXc6xLSMOqnArx7fL03jgY=w300-h300-p-rp-mo-br200"
                    roundedCircle
                    style={styles.testimonialImage}
                    alt="testimonial"
                  />
                  <h1 style={styles.heading}>Gagan Singh</h1>
                  <p style={styles.testimonialText}>
                    I want to Thanks Arena animaton. recently I got selected in
                    kuku Fm and got a handsome sallery package. It's like dream
                    come true for me and it's all happened because of Arena
                    animaton. The faculty is very supportive, friendly.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div style={styles.testimonialBox}>
                  <Image
                    src="https://lh3.googleusercontent.com/a-/ALV-UjWzA9g-D3dG7N0oFNVj0Ai0gzE7p0B1yv3CpEcHA36xicpVb2rGcQ=w75-h75-p-rp-mo-br100"
                    roundedCircle
                    style={styles.testimonialImage}
                    alt="testimonial"
                  />
                  <h1 style={styles.heading}>Shakti Chandra</h1>
                  <p style={styles.testimonialText}>
                    I had a wonderful learning experience at Arena Animation
                    Preet Vihar. The trainers are incredibly supportive and
                    knowledgeable. The institute offers hands-on training and
                    real-life industry projects, which helped me gain practical
                    skills.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <div style={styles.testimonialBox}>
                  <Image
                    src="https://lh3.googleusercontent.com/a/ACg8ocKq9kSINRZDjFBvxhV6PwITKEioFgv6hq3AbgXhhsQFgY6yyA=w45-h45-p-rp-mo-br100"
                    roundedCircle
                    style={styles.testimonialImage}
                  />
                  <h1 style={styles.heading}>Jitanshu Tomar</h1>
                  <p style={styles.testimonialText}>
                    Arena Animation Preet Vihar exceeded my expectations in
                    terms of quality education. The courses are well-structured,
                    covering various aspects of animation. The institute also
                    provides placement assistance, and many of my batchmates
                    secured excellent job opportunities.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div style={styles.testimonialBox}>
                  <Image
                    src="https://lh3.googleusercontent.com/a/ACg8ocKq7aKOJk27aFu-Z7VC8bXjqeo1cZ5_Zqg_p9gNDMAFEQffdA=w45-h45-p-rp-mo-br100"
                    roundedCircle
                    style={styles.testimonialImage}
                  />
                  <h1 style={styles.heading}>Keshav Verma</h1>
                  <p style={styles.testimonialText}>
                    Arena Institute is the best institute for learning and
                    growing professionally. They have the best faculty you can
                    learn with. Teaching updated softwares is not the only
                    delight of it, you will also learn how to develop your
                    professional character for your future.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Address container  */}
      <Container className="footerContainer">
        {/* <div className="container-default footerContainer"> */}
        <div className="logo-div">
          <Link to="https://animationdelhincr.com" aria-label="Arena Animation">
            <img src={Logo} alt="" className="logo-img" />
          </Link>
        </div>
        <div className="addressTable">
          {centers &&
            centers.map((address) => (
              //(footer stats here) // Responsive Footer done
              <Row className="address-main-div mb-3" key={address.id}>
                <Col lg={12} sm={12} className="mb-3">
                  <address className="h-card">
                    <div className="bold yellow mb-2">{address.title}</div>
                    <div className="text-f">
                      {address.title_second}{" "}
                      <a
                        href="#"
                        className="text-icon fa fa-map-marker"
                        aria-label="location"
                      ></a>
                    </div>
                  </address>
                </Col>
                <Col lg={12} sm={12} className="text-f mb-3">
                  Ph no. -{" "}
                  <span className="h-card">
                    <Link
                      onClick={handleCall}
                      className="ytext p-tel"
                      href={`tel:${address.phone}`}
                    >
                      {address.phone}
                    </Link>
                  </span>
                </Col>
                <Col lg={12} sm={12} className="text-f yellow ytext mb-3">
                  {address.address}
                </Col>
                <Col className="d-flex" lg={12} sm={12}>
                  <Link
                    to={address.face_url}
                    aria-label="Arena Animation Facebook Profile"
                  >
                    <FaFacebook className="mx-2" />
                  </Link>
                  <Link
                    to={address.insta_url}
                    aria-label="Arena Animation Instagram Profile"
                  >
                    <FaInstagram className="mx-2" />
                  </Link>
                  <Link
                    to={address.linkedin_url}
                    aria-label="Arena Animation Linkedin Profile"
                  >
                    <FaLinkedin className="mx-2" />
                  </Link>
                </Col>
              </Row>
            ))}
        </div>

        <Container className="mt-3">
          <Row className="newFooter d-flex justify-content-between">
            <Col xs={12} sm={6} md={3}>
              <div className="textClr">About Us</div>
              <Link
                to="https://animationdelhincr.com"
                aria-label="Arena Animation Delhi"
              >
                <img src={Logo} alt="" className="logo-img mt-3" />
              </Link>
              <p className="mt-2 font-weight-bold textClr">Arena Animation</p>
              <p className="customFont">
                With a legacy of nurturing 11,500+ talents, Arena Creative
                Campus Delhi & Noida proudly maintains an outstanding placement
                history spanning 25 years and remains relentless
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-none d-sm-block d-flex flex-column flex-md-row"
            >
              <div className="textClr">Quick Links</div>
              <div className="mt-3">
                <div className="d-flex flex-column gap-2">
                  <Link
                    to="https://animationdelhincr.com"
                    className="customFont"
                  >
                    Apply Now
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/student-loan"
                    className="customFont"
                  >
                    Loan Facility
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/contact"
                    className="customFont"
                  >
                    Contact Us
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/about-us"
                    className="customFont"
                  >
                  About Us
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/blog"
                    className="customFont"
                  >
                    Blog
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/placement"
                    className="customFont"
                  >
                    Placement
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/rewards"
                    className="customFont"
                  >
                    Reward
                  </Link>
                  <Link
                    rel="canonical"
                    to="https://animationdelhincr.com/terms-&-conditions"
                    className="customFont"
                  >
                  Terms & Conditions
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-none d-sm-block">
              <div className="textClr ml-3">Our Courses</div>
              <div className="mt-3">
                {courses
                  .slice(0, Math.ceil(courses.length / 2))
                  .map((course) => (
                    <div key={course.id}>
                      <Link
                        to={`/course-details/` + course.slug}
                        className="customFont"
                      >
                        {course.name}
                      </Link>
                    </div>
                  ))}
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-none d-sm-block">
              <div className="mt">
                {courses.slice(Math.ceil(courses.length / 2)).map((course) => (
                  <div key={course.id}>
                    <Link
                      to={`/course-details/` + course.slug}
                      className="customFont"
                    >
                      {course.name}
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        <div className="contact-info">
          <Dropdown className="ms-3">
            <Dropdown.Toggle
              className="btn-0"
              variant="success"
              id="dropdown-basic"
            >
              <Button title={` Call Now `} onClick={handleCall} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="menuitems p-2">
              <Link to="tel:+918585908968" className="text-white">
                {" "}
                <BsFillTelephoneFill
                  className="h1 text-white"
                  style={{ fontSize: "18px", margin: "6px 0px" }}
                />{" "}
                DELHI CENTRE
                <br />{" "}
              </Link>
              <Link to="tel:+917290098162" className="text-white">
                {" "}
                <BsFillTelephoneFill
                  className="h1 text-white"
                  style={{ fontSize: "18px", margin: "6px 0px" }}
                />{" "}
                NOIDA CENTRE <br />
              </Link>
              {/* <Link to="tel:+918800012691" className="text-white"> <BsFillTelephoneFill className="h1 text-white" style={{fontSize:"18px",margin:"6px 0px"}} /> CHANDIGARH CENTRE </Link>  */}
            </Dropdown.Menu>
          </Dropdown>
          <Link to="#applybutton">
            <Button title="Apply Now" />
          </Link>
          <Link to="https://wa.me/+919599200261">
            <Button title="WhatsApp" />
          </Link>
        </div>
        <div className="copyRight mt-4">
          Copyright © 2023. Digital Xplode All Rights Reserved.
        </div>
        {/* </div> */}
      </Container>
    </>
  );
};

export default Footer;
