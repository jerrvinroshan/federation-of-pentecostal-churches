import{ useState, useEffect } from "react";
import eventData from "./data/eventDetails";
import { EventCalendarCard } from "./EventCalendarCard";

const EventCalendar = ({ selectedDate }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB"); // Format as DD/MM/YY
    const filteredEvents = eventData.filter((event) => event.date === formattedSelectedDate);
    setEvents(filteredEvents);
  }, [selectedDate]);

  return (
    <div className="EventCalendar__Container">
      {events.length > 0 ? (
        events.map((event) => <EventCalendarCard key={event.id} event={event} />)
      ) : (
        <p>No events for this day.</p>
      )}
    </div>
  );
};

export default EventCalendar;
