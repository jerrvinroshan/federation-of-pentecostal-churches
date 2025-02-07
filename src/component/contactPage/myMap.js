import { useState } from "react";
import locations from "./data/locationsData";
import LocationModal from "./locationModal";
import LocationMarker from "./locationMaker";

import mapImage from "../../assets/image/map.svg";


const MyMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="map-container">
      <img src={mapImage} alt="Map" className="map-image" />
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          location={location}
          onClick={setSelectedLocation}
        />
      ))}
      <LocationModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </div>
  );
};

export default MyMap;
