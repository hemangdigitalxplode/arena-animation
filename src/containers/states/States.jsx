import React from "react";
import "./states.scss";
import { Container } from "react-bootstrap";

const States = ({
  startedAt,
  workingInStudio,
  mentorsWithProfessionals,
  events,
  jobs,
  jobSuccessRate,
}) => {
  const data = [
    {
      id: 1,
      title: startedAt,
      text: "Arena was the first 3D Animation & Visual Effects college in Delhi",
    },
    {
      id: 2,
      title: workingInStudio,
      text: "Alumnis working in top studios and companies 50+",
    },
    {
      id: 3,
      title: mentorsWithProfessionals,
      text: "Mentors With Professional Industry Experience",
    },
    {
      id: 4,
      title: events,
      text: "Monthly and Annual Events & Competitions",
    },
    {
      id: 5,
      title: jobs,
      text: "Opportunities For Each Student After Course Completion",
    },
    {
      id: 6,
      title: jobSuccessRate,
      text: "Highest Student Course Start to Job Success Rate",
    },
  ];
  return (
    <Container>
      {/* <div className="container-default"> */}
      <div className="states-div">
        {startedAt &&
          workingInStudio &&
          mentorsWithProfessionals &&
          events &&
          jobs &&
          jobSuccessRate &&
          data?.map((i) => (
            <div key={i.id} className="sigle-stat">
              <div className="sigle-stat-title">{i.title}</div>
              <div className="sigle-stat-text">{i.text}</div>
            </div>
          ))}
      </div>
      {/* </div> */}
    </Container>
  );
};

export default States;
