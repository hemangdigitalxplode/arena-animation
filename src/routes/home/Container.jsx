import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import API from "../../api";
import FromOurDairy from "../../containers/FromOurDairy/FromOurDairy";
import Header from "../../containers/header/Header";
import OurCoures from "../../containers/ourCourses/OurCoures";
import States from "../../containers/states/States";
import StudentWork from "../../containers/studentWork/StudentWork";
import SubHeader from "../../containers/subHeader/SubHeader";
import Button from "../../components/button/Button";
// import AskedQuestions from "../../containers/askedQuestions/AskedQuestions";
// import StudentsSpeak from "../../containers/studentsSpeak/StudentsSpeak";
// import CallBackForm from "../../containers/callBackForm/CallBackForm";
import { Helmet } from "react-helmet";
const Container = ({ handleShow }) => {
  const [blogs, setBlogs] = useState([]);
  const [homePage, setHomePage] = useState("");
  const [loader, setLoader] = useState(false);
  const getBlogs = () => {
    API.get("/our_dairy")
      .then((response) => {
        setBlogs(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getHomePage = () => {
    setLoader(true);
    API.get("/home")
      .then((response) => {
        setLoader(false);
        setHomePage(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getHomePage();
    getBlogs();
  }, []);

  return (
    <>
      {loader ? (
        <Circles
          height="120"
          width="120"
          color="#ffd800"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div>
          <div className="apply-now-button-sticky">
            <Button title="Apply Now" onClick={handleShow} />
          </div>
          <div style={{ minHeight: "100vh" }}>
            <Header banners={homePage.banner} />
          </div>
          <Helmet>
            <title>
              Animation Courses in Delhi & Noida | Best Institute for Animation
              Courses
            </title>
            <meta
              name="keywords"
              content="best animation institute, animation institute, animation institute in noida, animation courses in noida, animation institute in delhi, animation courses in delhi, best institute for animation in delhi, best institute for animation courses in delhi, top institute for animation courses in delhi, best institute for animation courses in noida, top institute for animation courses in noida, top institute for animation in delhi"
            />
            <meta
              name="description"
              content="Give a boost to your career with animation courses with the top & best animation institute in Delhi & Noida only at Arena Animation. Enroll now & get expert faculty."
              data-rh="true"
            />
            <meta name="title" content="Helmet title" data-rh="true" />
          </Helmet>
          <SubHeader
            bestanimationcms={homePage?.best_animation_cms?.cms_contant}
          />
          <OurCoures coursesCMS={homePage?.arena_south_ext_cms?.cms_contant} />
          <States
            startedAt={homePage.started_at}
            workingInStudio={homePage.working_in_studio}
            mentorsWithProfessionals={homePage.mentors_with_professionals}
            events={homePage.events}
            jobs={homePage.jobs}
            jobSuccessRate={homePage.job_success_rate}
          />
          <StudentWork workImgs={homePage.portfolio} />
          <FromOurDairy blogs={blogs} />
          {/* <StudentsSpeak />
          <AskedQuestions />
          <CallBackForm /> */}
        </div>
      )}
    </>
  );
};

export default Container;
