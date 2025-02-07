import React, { useState } from "react";
import HoverInfo from "./hoverInfo";
// import "./LocationMarker.css";
import PlaceIcon from "@mui/icons-material/Place";

const LocationMarker = ({ location, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="location-marker"
      style={{ left: `${location.x}px`, top: `${location.y}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(location)}
    >
      <PlaceIcon style={{color:"yellow"}} className="marker-icon"/>
      {hovered && <HoverInfo location={location} />}
    </div>
  );
};

export default LocationMarker;
