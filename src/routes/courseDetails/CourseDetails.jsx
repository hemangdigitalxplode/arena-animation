import React, { useEffect, useState } from "react";
import "./courseDetails.scss";
import { Circles } from "react-loader-spinner";
import CareerOptions from "../../containers/careerOptions/CareerOptions";
import CourseDetailsHeader from "../../containers/courseDetailsHeader/CourseDetailsHeader";
import CourseHighlights from "../../containers/courseHighlights/CourseHighlights";
import EligibilityDurationFees from "../../containers/eligibilityDurationFees/EligibilityDurationFees";
import ToolsAndSoftware from "../../containers/toolsAndSoftware/ToolsAndSoftware";
import WhatYouLearn from "../../containers/whatYouLearn/WhatYouLearn";
import StudentWork from "../../containers/studentWork/StudentWork";
import StudentsSpeak from "../../containers/studentsSpeak/StudentsSpeak";
import AskedQuestions from "../../containers/askedQuestions/AskedQuestions";
import CallBackForm from "../../containers/callBackForm/CallBackForm";
import { useLocation } from "react-router-dom";
import API from "../../api";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NewFaq from "../../containers/NewFaq/NewFaq";

const CourseDetails = ({ handleShow }) => {
  const routes = [
    {
      title:
        "Real Game Development Curses & Couching in Delhi and Noida - Arena Animation ",
      description:
        "Discover your inner creativity with Arena Animation’s specialized courses. Master in animation, VFX, graphics and multimedia skills for a dynamic career. Visit us!",
      path: "/course-details/real-game-development",
    },
    {
      title:
        "3d Animation Course in Noida | 3d Animation Course in Delhi NCR - Arena Animation",
      description:
        "Learn 3D animation skills with us today to improve your skills. Get exciting career opportunities with our proven 3D animation course in Delhi & Noida. Enroll now! ",
      path: "/course-details/trinity-3d-programe",
    },
    {
      title:
        "Game Design Course in Noida & Delhi NCR | Game Design Institute in Delhi",
      keywords:
        "game design course, game design course in delhi, game design course in Noida",
      description:
        "Want to master the field of game designing with innovative courses? Choose Arena Animation for the best game design course in Delhi & Noida. Visit & enroll now!",
      path: "/course-details/3d-digital-game-art-and-design",
    },
    {
      title:
        "Animation Courses | Best Animation Courses in Delhi & Noida - Arena Animation",
      description:
        "Visit Arena Animation to explore top-notch animation courses in Delhi & Noida. Reach out to us today to get yourself enroll for a promising career. ",
      path: "/course-details/animation-prime",
    },
    {
      title:
        "Animation-VFX Prime | Animation VFX Courses in Noida & Delhi - Arena Animation",
      description:
        "Explore the diverse world of animation at Arena Animation. Master essential skills with our innovative course. Reach out to us & enroll now for a creative journey.",
      path: "/course-details/any-vfx-prime",
    },

    {
      title:
        "Broadcast Prime VFX Courses and Classes in Noida 7 Delhi - Arena Animation",
      description:
        "Lauch your career in the field of animation, VFX, graphics & more. Time to elevate your skills with wide range of creative courses at Arena Animation. Visit us now!",
      path: "/course-details/broadcast-prime",
    },
    {
      title:
        "Ad Design Courses in Delhi | Ad Design Institute in Noida, Delhi NCR",
      description:
        "Lead by experienced professionals, Arena Animation offers the best AD design courses in Delhi & Noida. Be-industry ready with the best institute in Delhi.",
      path: "/course-details/degital-ad-design-and-marketing",
    },
    {
      title:
        "Graphics Course in Delhi | Graphics Course Center in Noida – Arena Animation",
      description:
        "Enroll in our comprehensive graphics course in Delhi at Arena Animation. Master design skills and unleash your creativity. Join us for a creative journey! Visit now!",
      path: "/course-details/graphics-web-design-and-development",
    },

    {
      title:
        "Motion Graphic Designer Course | Motion Graphics Institute in Noida & Delhi",
      description:
        "Acquire the valuable skills needed for motion graphic designer at Arena Animation. With our innovative motion graphic designer course, you can enhance your skills.",
      path: "/course-details/motion-graphic-design",
    },
    {
      title:
        "3d Animation Course in Noida | 3d Animation Course in Delhi NCR - Arena Animation",
      description:
        "Learn 3D animation skills with us today to improve your skills. Get exciting career opportunities with our proven 3D animation course in Delhi & Noida. Enroll now!",
      path: "/course-details/trinity-3d-program",
    },
    {
      title:
        "UI UX Certification Course | UI UX Course in Delhi | UI UX Institute in Noida",
      description:
        "Looking for trusted UI UX certification course in Delhi to grow your skills in design thinking? Choose Arena Animation today. Contact us now to enroll yourself!",
      path: "/course-details/ui-ux-design",
    },

    {
      title:
        "VFX Compositing & Editing Courses in Noida and Delhi - Arena Animation",
      description:
        "With an in-depth course offered by Arena Animation, learn the creative possibilities in animation. Learn about 2D and 3D animation techniques. Enroll right away!",
      path: "/course-details/vfx-composting-and-editing",
    },
    {
      title:
        "VFX Film Making Courses in Noida | VFX Course in Delhi NCR - Arena Animation",
      keywords:
        "vfx and animation course, vfx course, vfx course in delhi, vfx institute in delhi, vfx institute in noida, vfx course in noida, vfx film making courses in delhi",
      description:
        "Searching for VFX & animation course from top VFX institute in Delhi & Noida? Arena Animation is here with the best VFX film making courses in Delhi. Enroll now!",
      path: "/course-details/vfx-film-making",
    },
    {
      title:
        "VFX Institute | VFX Courses Institute in Delhi & Noida - Arena Animation",
      description:
        "Start you animation career journey by enrolling yourself at Arena Animation, India's leading VFX institute. Time to master the art & visual effects. Call us now!",
      path: "/course-details/vfx-prime",
    },

    {
      title:
        "Visual Content Development Courses in Noida and Delhi - Arena Animation",
      description:
        "Arena Animation is here with the top courses with enhance your skills in animation, VFX, graphic and multimedia for a fruitful career in the industry. Enroll now!",
      path: "/course-details/visual-content-development-for-print-and-social-media",
    },
  ];
  const location = useLocation();
  const route = routes.find((route) => route.path === location.pathname);
  let slug = location.pathname.split("/");
  slug = slug[slug.length - 1];
  const [courseId, setCourseId] = useState(null);
  const [courseList, setCourseList] = useState("");
  const [courseDetail, setCourseDetail] = useState(null);
  const [studentWork, setStudentWork] = useState(null);
  const [loader, setLoader] = useState(false);
  const [careerOption, setCareerOption] = useState("");
  // FAQ questions here
  const [newFaq,setNewFaq] = useState("")
  // console.log(courseList);

  
  const getStudentWork = () => {
    setLoader(true);
    courseId && API.get("/home")
      .then((response) => {
        setLoader(false);
        setStudentWork(response?.data?.data?.portfolio);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Object.entries(courseList).forEach((data) => {
  //   const urlSlug = data[1].slug;
  //   if (urlSlug === slug) {
  //     setCourseId(data[1]?.id);
  //   }
  // });

  useEffect(() => {
    if (courseList && slug) {
      Object.entries(courseList).forEach(([key, data]) => {
        const urlSlug = data.slug;
        if (urlSlug === slug) {
          setCourseId(data.id);
        }
      });
    }
  }, [courseList, slug]); 

    useEffect(() => {
      API.get("/course")
        .then((response) => {
          setCourseList(response?.data?.data); 
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

  const getCourse = (courseId) => {
    console.log("route");
    console.log(
      "this is the id mentioned in coursedetail.jsx and here it is " + courseId
    );
    setLoader(true);
    courseId && API.get(`/course/${courseId}`)

      .then((response) => {
        setLoader(false);
        setCourseDetail(response?.data?.data);
        setNewFaq(response?.data?.data)
        setCareerOption(response?.data?.data?.course_career[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourse(courseId);
    getStudentWork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

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
        height: "80vh",
      }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <Container fluid className="course-details">
      <Helmet>
        <title>
          {route?.title ||
            "Animation Courses in Delhi & Noida | Best Institute for Animation Courses"}
        </title>
        <meta
          name="description"
          content={
            route?.description ||
            "best animation institute, animation institute, animation institute in noida, animation courses in noida, animation institute in delhi, animation courses in delhi, best institute for animation in delhi, best institute for animation courses in delhi, top institute for animation courses in delhi, best institute for animation courses in noida, top institute for animation courses in noida, top institute for animation in delhi"
          }
        />
        <meta name="keywords" content={route?.keywords}></meta>
        <link rel="canonical" href={route?.path}></link>
      </Helmet>
      <CourseDetailsHeader
        title={courseDetail?.name}
        bgURL={courseDetail?.image}
        desc={courseDetail?.description}
        duration={courseDetail?.course_duration}
        skillLevel={courseDetail?.skill_level}
        brouchure={courseDetail?.brouchure}
        handleShow={handleShow}
      />
      <CourseHighlights highlight={courseDetail?.course_highlight} />
      <WhatYouLearn courseTerms={courseDetail?.course_term} />
      <ToolsAndSoftware coursetools={courseDetail?.course_tool} />
      {courseId!==null && <CareerOptions
        careerOptions={courseDetail?.course_career}
        careerOption={careerOption}
        handleShow={handleShow}
      />}
      <EligibilityDurationFees
        eligibilityCriteria={courseDetail?.eligibility_criteria}
        courseDurationDetail={courseDetail?.course_duration_detail}
        courseFeeDetail={courseDetail?.course_fee_detail}
      />
      <StudentWork workImgs={studentWork} />
      <StudentsSpeak />

   
      {/* New Faq's here */}
      <NewFaq
      newFaq={newFaq.course_faq}
      />
    
      <CallBackForm />
    </Container>
  );
};

export default CourseDetails;

