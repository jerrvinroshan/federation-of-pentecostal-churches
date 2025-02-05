export const EventCalendarCard = ({ event }) => {
  return (
    <div className="EventCalendarCard__Container">
      <img
        className="EventCalendarCard--Img"
        src={event.image}
        alt={event.alt}
      />
      <div className="EventCalendarCard__ContentContainer">
        <div className="EventCalendarCard__ContentContainerHeading">
          <h2 className="EventCalendarCard--h2">{event.title}</h2>
          <div className="EventCalendarCard__Date-TimeContainer">
            <div className="EventCalendarCard__DateContainer">
              <p className="EventCalendarCard__strong">Date:</p>
              <p className="EventCalendarCard__Date">{event.date}</p>
            </div>
            <div className="EventCalendarCard__TimeContainer">
              <p className="EventCalendarCard__strong">Time:</p>
              <p className="EventCalendarCard__Time">{event.time}</p>
            </div>
          </div>
        </div>
        <p className="EventCalendarCard__Place">{event.place}</p>
        <p className="EventCalendarCard__Description">{event.description}</p>
      </div>
    </div>
  );
};
