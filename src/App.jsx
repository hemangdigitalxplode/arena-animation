import React, { useState, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./routes/blog/BlogList";
import "./App.css";
import ApplyNowModal from "./components/applyNowModal/ApplyNowModal";
import BlogDetails from "./routes/blog/BlogDetails"; 
import Oscar2020 from "./routes/blog/Oscar2020";
import CanAnimation from "./routes/blog/CanAnimation";
import { Helmet } from 'react-helmet';
import GettheBasicsRight from "./routes/blog/GettheBasicsRight";
import Designing from "./routes/blog/Designing";
import Thankyou from "./routes/thankyou/Thankyou";
import Custom404 from "./routes/404/Custom404";
import TermsConditions from "./components/TermsCondition/TermsConditions";
import AboutUs from "./components/AboutUs/AboutUs";
import Animation2D from "./routes/blog/Animation2D";
import Animation3D from "./routes/blog/Animation3D";
const StudentLoan = lazy(() => import("./routes/studentLoan/StudentLoan"));
const StudentWork = lazy(() => import("./containers/studentWork/StudentWork"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Container = lazy(() => import("./routes/home/Container"));
const Payment = lazy(() => import("./routes/payment/Payment"));
const CourseDetails = lazy(() =>
  import("./routes/courseDetails/CourseDetails")
);
const Contact = lazy(() => import("./routes/contact/Contact"));
const ApplyNow = lazy(() => import("./routes/applyNow/ApplyNow"));
const Activieties = lazy(() => import("./routes/activities/Activieties"));
const RecentActivities = lazy(() =>
  import("./routes/recentActivities/RecentActivities")
);
const Awards = lazy(() => import("./routes/awards/awards"));
const ActivityDetails = lazy(() =>
  import("./routes/activityDetails/ActivityDetails")
);
const Blog = lazy(() => import("./routes/blog/BlogDetails"));
const Placement = lazy(() => import("./routes/placement/Placement"));

function App() {
  const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="app">

      <BrowserRouter basename={basename}>
      <Helmet/>

        <Routes>
          <Route path="/" element={<Layout handleShow={handleShow} />}>
            <Route index element={<Container handleShow={handleShow} />} />
              {/* <Route path="/oscar-2020" component={Oscar2020} exact /> */}
              <Route
              path="/blog"
              element={<BlogDetails handleShow={handleShow} />}
            />
                 <Route path="/blog/blue-screen-vs-green-screen" element={<BlogList />} />
                 <Route path="/blog/can-animation" element={<CanAnimation/>} />
                 <Route path="/blog/get-the-basics-right" element={<GettheBasicsRight/>} />
                 <Route path="/blog/ux-designing" element={<Designing/>} />
                 <Route path="/blog/oscar-2020" element={<Oscar2020 />} />
                 {/* New blogs route created here */}
                 <Route path="/blog/2d-animation-course" element={<Animation2D/>} />
                 <Route path="/blog/3d-animation-course" element={<Animation3D/>} />

                 
            <Route
              path="/course-details/:id"
              element={<CourseDetails handleShow={handleShow} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route
              path="/placement"
              element={<Placement handleShow={handleShow} />}
            />
            <Route path="/activities" element={<Activieties />} />
            <Route path="/recent-activities" element={<RecentActivities />} />
            <Route path="/rewards" element={<Awards />} />
            <Route path="/activity/:id" element={<ActivityDetails />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/thank-you" element={<Thankyou/>} />
            <Route path="/student-work" element={<StudentWork />} />
            <Route path="/terms-&-conditions" element={<TermsConditions/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route
              path="/student-loan"
              element={<StudentLoan handleShow={handleShow} />}
            />
            <Route path="*" element={<Custom404/>}/>
          </Route>
 
        </Routes>
      </BrowserRouter>
      <ApplyNowModal handleClose={handleClose} show={show} />
    </div>
  );
}

export default App;
