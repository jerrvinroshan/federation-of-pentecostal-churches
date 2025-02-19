import img from "../../../assets/image/ChurchZoneIMg.png";
import CloseIcon from "@mui/icons-material/Close";

export const ContactPopUp = ({ location, onClose }) => {
  if (!location) {
    return null;
  }
  return (
    <div className="ContactPopUp__Container">
      <CloseIcon
        style={{ color: "white", cursor: "pointer" }}
        onClick={onClose}
      />
      <div className="ContactPopUp__ContentContainer">
        <img className="ContactPopUp__Img" src={location.image} />
        <div className="ContactPopUp__DetailContainer">
          <h2 className="ContactPopUp__Heading">{location.name}</h2>
          <div className="ContactPopUp__LocationContainer">
            <a className="ContactPopUp__Location" href="#">
              {location.address}
            </a>
            <a
              className="ContactPopUp__Contact"
              href={`tel:+91${location.phone}`}
            >
              {location.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
