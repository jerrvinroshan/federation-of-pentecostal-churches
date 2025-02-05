import React, { useState } from "react";
import eventData from "./data/mainEvent";
import { EventCalendarCard } from "./EventCalendarCard";

const MainEvent = () => {
  const [events] = useState(eventData);

  return (
    <div className="EventCalendar__Container">
      {events.map((event) => (
        <EventCalendarCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default MainEvent;
