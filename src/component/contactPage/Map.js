import { useState } from "react";
import locations from "./data/locationsData";
import { ContactPopUp } from "./modal/ContactPopUp";
import LocationMarker from "./LocationMarker";
import "../../assets/locationmaker.css";

import Map from "../../assets/image/map.svg";

export const ContactMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <>
      <div className="Map__Container">
        <img className="ContactMap__Img" src={Map} />
        {locations.map((location) => (
          <LocationMarker
            key={location.id}
            location={location}
            onClick={setSelectedLocation}
          />
        ))}
        <ContactPopUp
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      </div>
    </>
  );
};
