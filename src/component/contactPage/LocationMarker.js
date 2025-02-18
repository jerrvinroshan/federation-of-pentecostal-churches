import { useState } from "react";
import ContactHover from "./modal/ContactHover";
import PlaceIcon from "@mui/icons-material/Place";

const LocationMarker = ({ location, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`LocationMarker ${location.place}`}
      // style={{ left: `${location.x}px`, bottom: `${location.y}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(location)}
    >
      <PlaceIcon style={{ color: hovered ? '#ED1B24' : '#EEEE00' }} className="Marker__Icon" />
      {hovered && <ContactHover location={location} />}
    </div>
  );
};

export default LocationMarker;
