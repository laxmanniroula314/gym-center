import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px"
};

const center = {
  lat: 26.4525, // Biratnagar, Nepal Latitude
  lng: 87.2718  // Biratnagar, Nepal Longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBmxtxc1lr08UUm2D5Mek4JDDYyp_ioZ9w">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
