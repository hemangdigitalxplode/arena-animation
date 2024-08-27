import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import API from "../../api";
import FaviconSetter from "./FaviconSetter";

const Layout = ({ handleShow }) => {
  const [centers, setCenters] = useState("");
  const [setting, setSetting] = useState("");

  const getCenters = () => {
    API.get("/centers")
      .then((response) => {
        setCenters(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getSetting = () => {
    API.get("setting/1")
      .then((response) => {
        setSetting(response?.data?.data?.setting);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCenters();
    getSetting();
  }, []);

  
  const phoneNumber = setting?.phone;
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <FaviconSetter url={setting?.path + setting?.favicon} />
      <Navbar
        handleShow={handleShow}
        logo={setting?.path + setting?.logo}
        handleCall={handleCall}
      />
      <div className="padding-top">
        <Outlet />
      </div>
      <Footer
        centers={centers}
        handleShow={handleShow}
        phoneNo={setting?.phone}
        handleCall={handleCall}
      />
    </div>
  );
};

export default Layout;
