import CloseIcon from "@mui/icons-material/Close";

import img from "../../../assets/image/ChurchZoneIMg.png";

export const ContactPopUp = () => {
  return (
    <div className="ContactPopUp__Container">
      <div className="ContactPopUp__ContentContainer">
        <CloseIcon />
        <div className="ContactPopUp__DetailsContainer">
          <img className="" src={img} alt=""/>
          <div>
            <h2>Church Name</h2>
            <div>
              <a href="#">A/235A, Kulakachi Road, Nandhankadu, Marthandam.</a>
              <a href="tel:+919568569859">95685 69859</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
