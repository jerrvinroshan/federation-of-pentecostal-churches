export const ZoneCard = ({ pastorName, image, title, contact }) => {
  return (
    <div className="ZoneCard__Container">
      <img className="ZoneCard__Img" src={image} alt={pastorName} />
      <div className="ZoneCard__ContentContainer">
        <div className="ZoneCard__HeadContentContainer">
          <h2 className="ZoneCard__Heading">{pastorName}</h2>
          <p className="ZoneCard__Title">{title}</p>
        </div>
        <p className="ZoneCard__Contact">Contact : {contact}</p>
      </div>
    </div>
  );
};
