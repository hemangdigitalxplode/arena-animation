import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./applyNow.scss";
import Button from "../../components/button/Button";

const ApplyNow = () => {
  return (
    <div className="container-default">
      <h2 className="apply-now title">Apply Now</h2>
      <Form className="mt-4 apply-now-form">
        <Row >
          <Form.Group as={Col} lg={6} controlId="FirstName" className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} lg={6} controlId="LastName" className="mb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} lg={6} controlId="FatherName" className="mb-4">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control type="text" placeholder="Father's Name" />
          </Form.Group>
          <Form.Group as={Col} lg={6} controlId="FatherNo" className="mb-4">
            <Form.Label>Father's Mobile Number</Form.Label>
            <Form.Control type="Number" placeholder="Father's Mobile Number" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} lg={4} controlId="DateOfBirth" className="mb-4">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="Date" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Group as={Col} lg={4} controlId="Email" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} lg={4} controlId="PinCode" className="mb-4">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="Number" placeholder="Mobile" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} lg={4} controlId="Address" className="mb-4">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group as={Col} lg={4} controlId="City" className="mb-4">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} lg={4} controlId="PinCode" className="mb-4">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control type="Number" placeholder="Pin Code" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} lg={6} controlId="Course" className="mb-4">
            <Form.Label>Select Course</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option disabled>Choose...</option>
              <option>1 Week Free Course</option>
              <option>Graphics & Web Design</option>
              <option>Graphics, Web Design & Development</option>
              <option>UI/UX Design</option>
              <option>AVG-Trinity 3D</option>
              <option>DAE-Diploma in Animation Engineering</option>
              <option>Degree in VFx & Animation</option>
              <option>Game Design</option>
              <option>Game Design and Development</option>
              <option>Short Term Professional Course</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} lg={6} controlId="Education" className="mb-4">
            <Form.Label>
              Educational Qualification(Please tick as applicable)
            </Form.Label>
            <Form.Check label="SSLC/Class X" />
            <Form.Check label="PUC" />
            <Form.Check label="Degree" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-4" as={Col} lg={6} controlId="FatherName">
            <Form.Label>Upload SSLC Certificate</Form.Label>
            <Form.Control type="file" placeholder="Father's Name" />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} lg={6} controlId="FatherNo">
            <Form.Label>Upload PUC Certificate</Form.Label>
            <Form.Control type="file" placeholder="Father's Mobile Number" />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} lg={6} controlId="FatherName">
            <Form.Label>Upload Degree Certificate</Form.Label>
            <Form.Control type="file" placeholder="Father's Name" />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} lg={6} controlId="FatherNo">
            <Form.Label>Upload Adhar Card</Form.Label>
            <Form.Control type="file" placeholder="Father's Mobile Number" />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} lg={6} controlId="FatherNo">
            <Form.Label>Upload your passport size photo</Form.Label>
            <Form.Control type="file" placeholder="Father's Mobile Number" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="Remember">
            <Form.Check label="I hereby declare that the information provided by me is true. I also understand that the fee once paid is non-refundable. I also abide by the rules and regulations of the institute." />
          </Form.Group>
        </Row>

        <Row className="mb-4 from-submit">
          <div>
            <Button title="Submit" />
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default ApplyNow;
