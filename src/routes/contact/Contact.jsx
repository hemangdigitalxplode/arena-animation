import React, { useEffect, useRef } from "react";
import CallBackForm from "../../containers/callBackForm/CallBackForm";
import GetInTouch from "../../containers/getInTouch/GetInTouch";
import { Helmet } from "react-helmet";

const Contact = () => {
  const callBackFormRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleButtonClick = () => {
    const yOffset = -80; // Offset of 200px
    const element = callBackFormRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <> <Helmet>
    <title>Contact Us - Arena Animation</title>
    <meta name="description" content="You can contact our experienced professionals to know about courses, fee’s structure, placements, course durations and more. Call or mail us now to get a quote!" />
    <link rel="canonical" href='http://animationdelhincr.com/contact'></link>
</Helmet>
      <GetInTouch
        handleCall={handleCall}
        handleButtonClick={handleButtonClick}
      />
      <div ref={callBackFormRef}>
        <CallBackForm />
      </div>
    </>
  );
};

export default Contact;
