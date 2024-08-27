import React, { useEffect, useState } from "react";
import "./studentLoan.scss";
import { studentLoanBanner } from "../../assets";
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
  Breadcrumb
} from "react-bootstrap";
import Button2 from "../../components/button/Button";
import CallBackForm from "../../containers/callBackForm/CallBackForm";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import API from "../../api";
import { Helmet } from "react-helmet";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .max(10, "Maximum 10 number allowed")
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
});

const initialValues = {
  name: "",
  email: "",
  mobile: "",
};

const StudentLoan = () => {
  const [alert, setAlert] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 3000);
  }, [alert]);
  return (
    <>
    <Helmet>
        <title>Students Loan Facilities - Arena Animation</title>
        <meta name="description" content="Learn about the financial solutions for your education at Arena Animation. Check numerous student loans, paving the way for your creative journey. Call us for more!" />
        <link rel="canonical" href='http://animationdelhincr.com/student-loan'></link>
   </Helmet>
      <div className="breadhead">
               
    
        <Breadcrumb>
          <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Loan Facility</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <div className="top-banner-section">
          <Image src={studentLoanBanner} alt="" fluid />
          <h1 className="title student-loan-title">
            Student <br /> Loan Facility
          </h1>
        </div>
        <div className="loan-description-section">
          <Container>
            <div className="top-section">
              <h3 className="text-center">
                Worried about funding your learning?
              </h3>
              <p className="text-center">
                At Arena Animation, we understand that financial difficulties
                often exist between you and your career goals.
                <br /> To ensure you get the training and career opportunities you
                deserve, Arena offers hassle-free student loans for all aspiring
                Arena students.*
              </p>
            </div>
            <div className="benefits-section">
              <h3 className="text-center">BENEFITS YOU GET</h3>
              <Row className="mt-4 font-weight">
                <Col lg={4} className="height-100per mb-3">
                  <div className="text-center benefit-border benefit-big-box">
                    <h2>
                      Loan facility for students enrolling in Arena Animation Course
                    </h2>
                    <p className="mt-4">
                      Note: Your course fee must be within
                      <strong> 1 lakh and Rs. 5 lakhs.</strong>
                    </p>
                  </div>
                </Col>
                <Col lg={8} className="height-100per">
                  <Row>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Actual time loan eligibility check post counselling session at Arena Animation
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Instant approval confirmation.
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Minimal documentation procedure with hassle-free processing.
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Post loan approval, the disbursement is usually done within 48 hours.
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Opportunity to spread repayments over Months / Years.
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="text-center benefit-border benefit-flex">
                        Periodic communication to you on your loan status.
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="text-center label-bg mb-2 py-1">
                <h5>*CONDITIONS APPLY</h5>
              </div>
              <div className="text-center margin-top-80px p-4">
                <h3>
                  GET FINANCIAL ASSISTANCE WITH ARENA ANIMATION'S AIR LOANS
                  FACILITY. JOIN A COURSE THAT HELPS YOU GET YOUR DREAM CAREER.
                </h3>
                <Button
                  variant="light"
                  className="fs-4 mt-4"
                  onClick={handleShow}
                >
                  <strong>Apply for Loan</strong>
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <CallBackForm />
        <div>
          <Modal
            centered
            show={show}
            onHide={handleClose}
            dialogClassName="my-modal-lg"
          >
            <Modal.Header>
              <Modal.Title>Loan Enquiry</Modal.Title>
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

                      <Col lg={12}>
                        <div style={{ textAlign: "center" }}>
                          <Button2 title="Submit" />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default StudentLoan;
