import React, { useState, useEffect } from "react";
import "./applyNowModal.scss";
import { Modal, Row, Col, Alert } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button/Button";
import API from "../../api";
import { loadScript } from "../../api/helper";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .max(10, "Maximum 10 number allowed")
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  center_id: Yup.string().required("Center is required"),
//   course_id: Yup.string().required("Course is required"),
});

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  center_id: "",
//   course_id: "",
};

const ApplyNowModal = ({ handleClose, show }) => {
  const [alert, setAlert] = useState(null);
  const [centers, setCenters] = useState("");
  const [courses, setCourses] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    API.post("/form_submit", values)
      .then((response) => {
        if (response.data) {
          setAlert({
            type: "success",
            message: "Your request has been submitted, we will reach you soon.",
          });
          resetForm();
          setTimeout(() => {
            handleClose();
            window.location.href = "/thankyou.php";
          }, 3000);
        }
      })
      .catch((error) => {
        setAlert({
          type: "warning",
          message: error.message,
        });
        console.log(error);
      });
  };

  const getCenters = () => {
    API.get("/centers")
      .then((response) => {
        setCenters(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
    getCenters();
    getCourseList();
    setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 3000);
  }, [alert]);

  return (
    <div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="my-modal-lg"
      >
        <Modal.Header>
          <Modal.Title>Apply Now</Modal.Title>
          <div onClick={handleClose} style={{ cursor: "pointer" }}>
            <AiOutlineClose />
          </div>
        </Modal.Header>
        <Modal.Body>
          {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <Row className="form-row">
                  <Col lg={12} className="mb-4">
                    <Field
                      as="select"
                      id="center_id"
                      name="center_id"
                      className="inputField"
                    >
                      <option>Select Center</option>
                      {centers &&
                        centers.map((address) => (
                          <option value={address.id}>
                            Arena {address.title}
                          </option>
                        ))}
                    </Field>
                    {errors.center_id && touched.center_id ? (
                      <div className="form-error">{errors.center_id}</div>
                    ) : null}
                  </Col>
                  <Col lg={12} className="mb-4">
                    <Field
                      name="name"
                      id="name"
                      className="inputField"
                      placeholder="Name"
                    />
                    {errors.name && touched.name ? (
                      <div className="form-error">{errors.name}</div>
                    ) : null}
                  </Col>
                  <Col lg={12} className="mb-4">
                    <Field
                      name="email"
                      id="email"
                      className="inputField"
                      placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="form-error">{errors.email}</div>
                    ) : null}
                  </Col>
                  <Col lg={12} className="mb-4">
                    <Field
                      name="mobile"
                      id="mobile"
                      className="inputField"
                      placeholder="Mobile Number"
                    />
                    {errors.mobile && touched.mobile ? (
                      <div className="form-error">{errors.mobile}</div>
                    ) : null}
                  </Col>
                  {/* <Col lg={12} className="mb-4">
                    <Field
                      as="select"
                      id="course_id"
                      name="course_id"
                      className="inputField"
                    >
                      <option>Select Course</option>
                      {courses &&
                        courses?.map((course) => (
                          <option value={course.id}>{course.name}</option>
                        ))}
                    </Field>
                    {errors.course_id && touched.course_id ? (
                      <div className="form-error">{errors.course_id}</div>
                    ) : null}
                  </Col> */}
                  <Col lg={12}>
                    <div style={{ textAlign: "center" }}>
                      <Button title="Submit" />
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApplyNowModal;
