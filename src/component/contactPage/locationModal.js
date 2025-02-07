import React from "react";


const LocationModal = ({ location, onClose }) => {
  if (!location) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={location.image} alt={location.name} />
        <h2>{location.name}</h2>
        <p>{location.address}</p>
        <p>{location.phone}</p>
      </div>
    </div>
  );
};

export default LocationModal;
