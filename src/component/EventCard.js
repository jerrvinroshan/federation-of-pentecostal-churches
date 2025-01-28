import eventImg from "../assets/image/event-title.png";

const EventCard = (props) => {
  return (
    <div className="EventCard__Container">
      <img className="EventCardImg" src={eventImg} alt={props.alt} />
      <div className="EventCard__Content">
        <h3 className="EventCard__Heading">{props.EventName}</h3>
        <div className="EventCard__ContentDetail">
          <div className="EventCard__Time-Date">
            <p className="EventCard__Date">{props.date}</p>
            <p className="EventCard__Time">
              {props.startTime} - {props.endTime}
            </p>
          </div>
          <div className="EventCard__ContentDescription">
            <p className="EventCard__Location">{props.location}</p>
            <p className="EventCard__Description">{props.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
