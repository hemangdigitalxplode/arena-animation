import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../button/Button";
import API from "../../api";
import { Container, ListGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = ({ handleShow, logo, handleCall }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCoursesMenu, settoggleCoursesMenu] = useState(false);
  const [toggleActivity, settoggleActivity] = useState(false);

  const [courses, setCourses] = useState("");
  // onMouseEnter={handleMouseEnterOnCoures}
  //       onMouseLeave={handleMouseLeaveOnCoures}
  const handleMouseEnterOnCoures = () => {
    settoggleCoursesMenu(true);
  };
  const handleMouseLeaveOnCoures = () => {
    settoggleCoursesMenu(false);
  };
  const handleMouseEnterOnActivity = () => {
    settoggleActivity(true);
  };
  const handleMouseLeaveOnActivity = () => {
    settoggleActivity(false);
  };

  const handleCoursesMenu = () => {
    settoggleCoursesMenu(!toggleCoursesMenu);
    settoggleActivity(false);
  };

  const handleActivityMenu = () => {
    settoggleActivity(!toggleActivity);
    settoggleCoursesMenu(false);
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
    <>
      <Container fluid className="navbar-top-container">
        <Container className="navbar-container">
          {/* <div className="navbar-container container-default"> */}
          <div className="logo">
            <a href="https://animationdelhincr.com">
              <img src={logo ? logo : Logo} alt="logo" className="logo-img" />
            </a>
          </div>
          <div className="navigation-items">
            <Link to="/">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Home
              </div>
            </Link>
            <div
              className="item-name"
              onMouseEnter={handleMouseEnterOnCoures}
              onMouseLeave={handleMouseLeaveOnCoures}
            >
              Courses
              {toggleCoursesMenu ? (
                <ListGroup className="courses-listGroup1">
                  {courses &&
                    courses.map((course) => (
                      <Link
                        key={course.id}
                        className="course-link"
                        to={`/course-details/${course.slug}`}
                        state={course.id}
                      >
                        <ListGroup.Item key={course.id}>
                          {course.name}
                        </ListGroup.Item>
                      </Link>
                    ))}
                </ListGroup>
              ) : null}
            </div>
            {/* <div
              className="item-name"
              onMouseEnter={handleMouseEnterOnActivity}
              onMouseLeave={handleMouseLeaveOnActivity}
            >
              Activities
              {toggleActivity ? (
                <ListGroup className="courses-listGroup">
                  <Link className="course-link" to="/activities">
                    <ListGroup.Item>Activities</ListGroup.Item>
                  </Link>
                  <Link className="course-link" to="/recent-activities">
                    <ListGroup.Item>Recent Activities</ListGroup.Item>
                  </Link>
                </ListGroup>
              ) : null}
            </div> */}
            <Link to="/rewards" rel="canonical">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Rewards
              </div>
            </Link>

            <Link to="/placement" rel="canonical">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Placements
              </div>
            </Link>

            <Link to="/blog" rel="canonical">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Blog
              </div>
            </Link>
            <Link to="/student-loan" rel="canonical">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Loan Facility
              </div>
            </Link>
            <div
              className="item-name"
              onClick={() => {
                settoggleCoursesMenu(false);
                settoggleActivity(false);
                handleShow();
              }}
            >
              Apply Now
            </div>

            {/* <Link to="/payment">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Online Fee Payment
              </div>
            </Link> */}
            <Link to="/contact" rel="canonical">
              <div
                className="item-name"
                onClick={() => {
                  settoggleCoursesMenu(false);
                  settoggleActivity(false);
                }}
              >
                Contact
              </div>
            </Link>
          </div>
          <Link
            to="https://wa.me/+919599200261"
            className="button-div t-dic"
            target="_blank"
          >
            WhatsApp
          </Link>
          <div
            className="button-div"
            onClick={() => {
              settoggleCoursesMenu(false);
              settoggleActivity(false);
            }}
          >
            <Dropdown className="ms-3">
              <Dropdown.Toggle
                className="btn-0"
                variant="success"
                id="dropdown-basic"
              >
                <Button
                  title="Call Now"
                  onClick={handleCall}
                  style={{ fontSize: "14px" }}
                  className="name"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="menuitems p-2">
                <Link to="tel:+918585908968" className="text-white">
                  {" "}
                  <BsFillTelephoneFill
                    className="h1 text-white"
                    style={{ fontSize: "18px", margin: "6px 0px" }}
                  />{" "}
                  DELHI CENTRE <br />{" "}
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
          </div>

          {/* </div> */}
        </Container>
      </Container>
      <div className="navbar-small-screen">
        <div className="logo">
          <Link to="https://animationdelhincr.com">
            <img
              src={Logo}
              alt="logo"
              className="logo-img"
              height={40}
              width={110}
            />
          </Link>
        </div>
        <div className="d-inherit">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
          )}

          <Dropdown className="ms-3">
            <Dropdown.Toggle
              className="btn-0"
              variant="success"
              id="dropdown-basic"
            >
              <BsFillTelephoneFill
                className="h1 text-white"
                style={{ marginLeft: "8px" }}
                value="Call Now"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="menuitems p-2">
              <Link to="tel:+918585908968" className="text-white">
                {" "}
                <BsFillTelephoneFill
                  className="h1 text-white"
                  style={{ fontSize: "18px", margin: "6px 0px" }}
                />{" "}
                DELHI CENTRE <br />{" "}
              </Link>
              <Link to="tel:+917290098162" className="text-white">
                {" "}
                <BsFillTelephoneFill
                  className="h1 text-white"
                  style={{ fontSize: "18px", margin: "6px 0px" }}
                />{" "}
                NOIDA CENTRE <br />{" "}
              </Link>
              {/* <Link to="tel:+918800012691" className="text-white"> <BsFillTelephoneFill className="h1 text-white" style={{fontSize:"18px",margin:"6px 0px"}} /> CHANDIGARH CENTRE </Link>  */}
            </Dropdown.Menu>
          </Dropdown>

          {toggleMenu && (
            <div className="scale-up-center navbar-menu">
              <div className="navigation-items">
                <Link to="/" className="border-topc">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </div>
                </Link>
                {/* <div className="item-name" onClick={() => setToggleMenu(false)}>
                  Courses
                </div> */}
                <div className="item-name" onClick={handleCoursesMenu}>
                  Courses {toggleCoursesMenu ? "▼" : "▲"}
                  {toggleCoursesMenu ? (
                    <ListGroup className="courses-listGroup">
                      {courses &&
                        courses.map((course) => (
                          <Link
                            className="course-link"
                            to={`/course-details/${course.slug}`}
                            state={course.id}
                            onClick={() => setToggleMenu(false)}
                          >
                            <ListGroup.Item key={course.id}>
                              {course.name}
                            </ListGroup.Item>
                          </Link>
                        ))}
                    </ListGroup>
                  ) : null}
                </div>
                {/* <div
                  className="item-name"
                  onClick={() => {
                    handleActivityMenu();
                  }}
                >
                  Activities{toggleActivity ? "▼" : "▲"}
                  {toggleActivity ? (
                    <ListGroup className="courses-listGroup">
                      <Link
                        className="course-link"
                        to="/activities"
                        onClick={() => setToggleMenu(false)}
                      >
                        <ListGroup.Item>Activities</ListGroup.Item>
                      </Link>
                      <Link
                        className="course-link"
                        to="/recent-activities"
                        onClick={() => setToggleMenu(false)}
                      >
                        <ListGroup.Item>Recent Activities</ListGroup.Item>
                      </Link>
                    </ListGroup>
                  ) : null}
                </div> */}
                <Link to="/rewards" className="border-topc" rel="canonical">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Rewards
                  </div>
                </Link>

                <Link to="/placement" rel="canonical">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Placements
                  </div>
                </Link>
                <Link to="/blog" rel="canonical">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Blog
                  </div>
                </Link>
                <Link to="/student-loan" rel="canonical">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Loan Facility
                  </div>
                </Link>
                <div
                  className="item-name"
                  onClick={() => {
                    handleShow();
                    setToggleMenu(false);
                  }}
                >
                  Apply Now
                </div>
                {/* <Link to="/payment">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Online Fee Payment
                  </div>
                </Link> */}
                <Link to="/contact" className="border-topc" rel="canonical">
                  <div
                    className="item-name"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
