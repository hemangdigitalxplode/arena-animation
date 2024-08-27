import React, { useState, useEffect } from "react";
import "./callBackForm.scss";
// import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../components/button/Button";
import { Alert, Container } from "react-bootstrap";
import API from "../../api";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .max(10, "Maximum 10 number allowed")
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  center: Yup.string().required("Center is required"),
});

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  center: "",
};

const CallBackForm = () => {
  const [alert, setAlert] = useState(null);
  const [centers, setCenters] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();
    API.post("/request_form", values)
      .then((response) => {
        if (response.data) {
          setAlert({
            type: "success",
            message: "Your request has been submitted, we will reach you soon.",
          });
          resetForm();
        }

        console.log(response.data);
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
  useEffect(() => {
    getCenters();
    setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 3000);
  }, [alert]);

  return (
    <Container className="CallBackForm">
      {/* // <div className="CallBackForm container-default"> */}
      <div className="CallBackForm-title title">Request Call Back</div>
      <div
        className="CallBackForm-form-outer-div"
        style={{ width: "80%", margin: "auto" }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
              <div className="CallBackForm-form-inner-div">
                <div className="form-field-div">
                  <label>Name</label>
                  <Field
                    id="name"
                    name="name"
                    className="formInput form-control"
                  />
                </div>
                {errors.name && touched.name ? (
                  <div className="form-error">{errors.name}</div>
                ) : null}
                <div className="form-field-div">
                  <label>Phone No.</label>
                  <Field
                    id="mobile"
                    name="mobile"
                    className="formInput form-control"
                  />
                </div>
                {errors.mobile && touched.mobile ? (
                  <div className="form-error">{errors.mobile}</div>
                ) : null}
                <div className="form-field-div">
                  <label>Email Address</label>
                  <Field
                    id="email"
                    name="email"
                    className="formInput form-control"
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className="form-error">{errors.email}</div>
                ) : null}
                <div className="form-field-div">
                  <label>Perferred Center</label>
                  <Field
                    as="select"
                    id="center"
                    name="center"
                    className="formInput form-control"
                  >
                    <option> </option>
                    {centers &&
                      centers?.map((center) => (
                        <option key={center.id} value={center.id}>{center.title}</option>
                      ))}
                  </Field>
                </div>
                {errors.center && touched.center ? (
                  <div className="form-error">{errors.center}</div>
                ) : null}
              </div>
              <div className="form-bottom pt-0">
                <div className="text-capcha">
                  <div className="text" style={{visibility:"hidden"}}>
                    By selecting 'Submit,' I grant the company permission to
                    contact me and share information via email, SMS, or phone.
                  </div>
                  {/* <div className="capcha">
                    <ReCAPTCHA sitekey="Your client site key" />
                  </div> */}
                </div>
                <div className="form-submit pt-0">
                  <Button title="Submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default CallBackForm;
