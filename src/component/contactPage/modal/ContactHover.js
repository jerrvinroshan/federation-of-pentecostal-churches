
const ContactHover = ({ location }) => {
  return (
    <div className="ContactHover__Container">
      <img className="ContactHover__Img" src={location.image} alt={location.name} />
      <div className="ContactHover__ContentContainer">
        <h4 className="ContactHover__Heading">{location.name}</h4>
        <p className="ContactHover--p">{location.address}</p>
      </div>
    </div>
  );
};

export default ContactHover;
