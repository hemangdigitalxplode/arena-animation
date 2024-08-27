import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./payment.scss";
import Button from "../../components/button/Button";
import API from "../../api";
import { loadScript } from "../../api/helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// toast.configure()

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  course_id: Yup.string().required("Course is required"),
  amount: Yup.string().required("Amount is required"),
});

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  course_id: "",
  amount: "",
  student_id: "",
};

const Payment = () => {
  const toast_options = {
    autoClose: 2000,
    className: "",
    position: toast.POSITION.TOP_RIGHT,
  };

  const [existingStudent, setExistingStudent] = useState(true);

  const [courses, setCourses] = useState("");

  const getCourseList = () => {
    API.get("/course")
      .then((response) => {
        setCourses(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = async (values, { resetForm }) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return false;
    }

    // creating a new order
    const { data } = await API.post("/student_razorpay", values);
    if (!data) {
      alert();
      toast.error("Server error. Are you online?", toast_options);
      return false;
    }

    if (data.status === true) {
      const { key, amount, currency, order_id } = data.data;

      // Getting the order details back
      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Arena",
        description: "Wallet Load",
        image: "Logo",
        order_id: order_id,
        handler: async (response) => {
          const { data } = await API.post("/student_verify", response);
          if (data.status) {
            console.log(data.message);
            resetForm();
            toast.success("data.message", toast_options);
            return true;
          } else {
            console.log("error");
            toast.error("Server error. Are you online?", toast_options);
            return false;
          }
        },
        prefill: {
          name: values.name,
          email: values.email,
          contact: values.mobile,
        },
        theme: {
          color: "#61dafb",
        },
        modal: {
          ondismiss: function () {
            console.error("Payment Window Closed.");
            toast.error("Payment Window Closed.", toast_options);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error(response.error.description);
        toast.error(response.error.description, toast_options);
      });

      paymentObject.open();
    } else {
      console.error("There is some error.");
      toast.error("There is some error.", toast_options);
      return false;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourseList();
  }, []);

  return (
    <div className="payment-container">
      <Container className="payment-inner-div">
        {/* <div className="container-default payment-inner-div"> */}
        <div className="payment-title-div">
          <div>
            <div
              className={
                existingStudent ? "payment-title" : "payment-title-onclick"
              }
              onClick={() => setExistingStudent(false)}
            >
              New Student
            </div>
            <div
              className={
                existingStudent ? "drow-sign-display-none" : "drow-sign"
              }
            >
              ▼
            </div>
          </div>
          <div>
            <div
              // className="payment-title"
              onClick={() => setExistingStudent(true)}
              className={
                existingStudent ? "payment-title-onclick" : "payment-title"
              }
            >
              Existing Student
            </div>
            <div
              className={
                existingStudent ? "drow-sign" : "drow-sign-display-none"
              }
            >
              ▼
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
      <Container className="form-container">
        {/* <div className="container-default form-container"> */}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="Payment-form">
              <Row className="padding-top-80px">
                {existingStudent && (
                  <Col lg={12} className="mb-4 ">
                    <Field
                      className="payment-input"
                      placeholder="Student Id"
                      name="student_id"
                      id="student_id"
                    />
                    {/* { existingStudent && errors.student_id && touched.student_id ? (
                      <div className="form-error">{errors.student_id}</div>
                    ) : null} */}
                  </Col>
                )}

                <Col lg={6} className="mb-4">
                  <Field
                    className="payment-input"
                    placeholder="Name"
                    name="name"
                    id="name"
                  />
                  {errors.name && touched.name ? (
                    <div className="form-error">{errors.name}</div>
                  ) : null}
                </Col>
                <Col lg={6} className="mb-4">
                  <Field
                    className="payment-input"
                    placeholder="Mobile No."
                    name="mobile"
                    id="mobile"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="form-error">{errors.mobile}</div>
                  ) : null}
                </Col>
                <Col lg={12} className="mb-4">
                  <Field
                    className="payment-input"
                    placeholder="Email I'd"
                    name="email"
                    id="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="form-error">{errors.email}</div>
                  ) : null}
                </Col>
                <Col lg={6} className="mb-4">
                  <Field
                    as="select"
                    placeholder="Course Enrolled"
                    className="payment-input"
                    name="course_id"
                    id="course_id"
                  >
                    <option>Course Enrolled</option>
                    {courses &&
                      courses?.map((course) => (
                        <option value={course.id}>{course.name}</option>
                      ))}
                  </Field>
                  {errors.course_id && touched.course_id ? (
                    <div className="form-error">{errors.course_id}</div>
                  ) : null}
                </Col>
                <Col lg={6} className="mb-4">
                  <Field
                    as="select"
                    placeholder="Amount"
                    className="payment-input"
                    name="amount"
                    id="amount"
                  >
                    <option>Amount</option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                    <option value="30000">30000</option>
                    <option value="40000">40000</option>
                  </Field>
                  {errors.amount && touched.amount ? (
                    <div className="form-error">{errors.amount}</div>
                  ) : null}
                </Col>
                <Col lg={12} className="payment-button-div">
                  <Button title="Continue to Pay" />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Payment;
