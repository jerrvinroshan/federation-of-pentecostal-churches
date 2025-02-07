import { useState } from "react";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

export const Calendar = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startWeek = new Date(startOfMonth);
  startWeek.setDate(startWeek.getDate() - ((startWeek.getDay() + 6) % 7));
  const endWeek = new Date(endOfMonth);
  endWeek.setDate(endWeek.getDate() + ((7 - endWeek.getDay()) % 7));

  const days = [];
  let day = new Date(startWeek);
  while (day <= endWeek) {
    days.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }

  return (
    <div className="Calendar__Container">
      <div className="Calendar__Header">
        <h2 className="Calendar__Heading">
          {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h2>
        <div>
          <button
            className="Calendar__Btn"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
          >
            <img src={leftArrow} alt="Left Arrow" />
          </button>
          <button
            className="Calendar__Btn"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
          >
            <img src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
      <div className="Calendar__DayContainer">
        <div className="Calendar__Days">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d} className="Day__Label">{d}</div>
          ))}
        </div>
        <div className="Calendar__Grid">
          {days.map((day, index) => (
            <button
              key={index}
              className={`Calendar__Day ${
                day.getMonth() === currentDate.getMonth() ? "Current__Month" : "Other__Month"
              } ${day.toDateString() === today.toDateString() ? "today" : ""} ${
                day.toDateString() === selectedDate.toDateString() ? "selected" : ""
              }`}
              onClick={() => onDateChange(day)} // Pass selected date to parent
            >
              {day.getDate()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
