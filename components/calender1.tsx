import React, { useState } from "react";
import classNames from "classnames";

// A placeholder function for adding an event (you would replace this with actual backend logic)
const addEvent = (date: Date, event: string) => {
  console.log(`Event "${event}" added on ${date}`);
};

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<{ [key: string]: string[] }>({}); // Store events for each date
  const [hoveredDate, setHoveredDate] = useState<string | null>(null); // Track which date is being hovered

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blankDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Get the month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month];

  // Handle hovering over a date
  const handleMouseOver = (day: number) => {
    const dateKey = `${year}-${month + 1}-${day}`;
    setHoveredDate(dateKey);
  };

  const handleMouseOut = () => {
    setHoveredDate(null);
  };

  // Handle adding an event to the date
  const handleAddEvent = (date: string) => {
    const eventName = prompt("Enter the event name:");
    if (eventName) {
      setEvents((prevEvents) => {
        const newEvents = { ...prevEvents };
        if (!newEvents[date]) newEvents[date] = [];
        newEvents[date].push(eventName);
        return newEvents;
      });
    }
  };

  return (
    <div className="mx-auto p-8 mt-4">
      {" "}
      {/* Original width restored */}
      {/* Month and Year display */}
      <div className="text-center text-2xl font-bold mb-4">
        {monthName} {year}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}

        {blankDays.map((_, index) => (
          <div key={index} className="text-center">
            &nbsp;
          </div>
        ))}

        {days.map((day) => {
          const dateKey = `${year}-${month + 1}-${day}`;
          return (
            <div
              key={day}
              className="text-center border p-2 relative"
              onMouseOver={() => handleMouseOver(day)}
              onMouseOut={handleMouseOut}
              onClick={() => handleAddEvent(dateKey)}
            >
              {day}
              {events[dateKey] && (
                <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {events[dateKey].length}
                </div>
              )}

              {hoveredDate === dateKey && events[dateKey] && (
                <div className="absolute top-full left-0 bg-white border p-2 mt-2 shadow-lg z-10 w-full">
                  <ul>
                    {events[dateKey].map((event, index) => (
                      <li key={index} className="mb-1">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
