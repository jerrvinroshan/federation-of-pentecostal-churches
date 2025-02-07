import React from "react";


const HoverInfo = ({ location }) => {
  return (
    <div className="hover-info">
      <img src={location.image} alt={location.name} />
      <div>
        <h4>{location.name}</h4>
        <p>{location.address}</p>
      </div>
    </div>
  );
};

export default HoverInfo;
