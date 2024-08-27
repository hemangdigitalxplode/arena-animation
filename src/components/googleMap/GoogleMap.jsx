import React from "react";
import "./googleMap.scss";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Rings } from "react-loader-spinner";

const containerStyle = {
  width: "100%",
  height: "320px",
  borderRadius: "24px",
};

const MyComponent = ({ lat, lng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOtPPlkcFthnWLYlcXCIfDakO3tM-GHPY",
  });
  const center = { lat: lat, lng: lng };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <MarkerF position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ) : (
    <Rings
      height="80"
      width="80"
      color="#ffd800"
      radius="6"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "320px",
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default MyComponent;
