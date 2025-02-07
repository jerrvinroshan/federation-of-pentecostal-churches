import CloseIcon from "@mui/icons-material/Close";

export const ContactPopUp = ({ location, onClose }) => {
  if (!location) {
    return null;
  }
  return (
    <div className="ContactPopUp__Container">
      <div className="ContactPopUp__ContentContainer">
        <CloseIcon onClick={onClose}/>
        <div className="ContactPopUp__DetailsContainer">
          <img className="ContactPopUp__DetailsImg" src={location.image} alt={location.name}/>
          <div>
            <h2>{location.name}</h2>
            <div>
              <a href="#">{location.address}</a>
              <a href="tel:+919568569859">{location.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};