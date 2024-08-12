import React, { useState, useEffect } from "react";
import {
  format,
  addMonths,
  subMonths,
  addYears,
  subYears,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";

interface Event {
  id: number;
  date: string;
  title: string;
  color: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({});
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectedStartTime, setSelectedStartTime] = useState<string>(
    new Date().toISOString().split("T")[1].substring(0, 5)
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string>("00:30");
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [view, setView] = useState<string>("day");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setSelectedDate(format(new Date(), "yyyy-MM-dd"));
    setSelectedStartTime(format(new Date(), "HH:mm"));
  }, []);

  const addEvent = () => {
    if (newEvent.title && newEvent.color) {
      const event = {
        id: events.length + 1,
        date: `${selectedDate}T${selectedStartTime}`,
        title: newEvent.title,
        color: newEvent.color,
      };
      setEvents([...events, event]);
      setNewEvent({});
      setModalIsOpen(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "startTime") {
      setSelectedStartTime(value);
    } else {
      setSelectedEndTime(value);
    }
  };

  const handleCalendarDateChange = (date: Date) => {
    setCalendarDate(date);
    setSelectedDate(format(date, "yyyy-MM-dd"));
  };

  const renderMonthView = () => {
    const monthsOfYear = Array.from(
      { length: 12 },
      (_, i) => new Date(calendarDate.getFullYear(), i, 1)
    );
    return (
      <div className="overflow-y-auto max-h-[600px]">
        <div className="grid grid-cols-4 gap-1">
          {monthsOfYear.map((date, index) => (
            <div
              key={index}
              className="h-32 border p-1 text-center cursor-pointer"
              onClick={() => {
                handleCalendarDateChange(date);
                setView("day"); // Switch to the day view when a month is clicked
              }}
            >
              <div className="text-lg">{format(date, "MMMM")}</div>
              <div className="grid grid-cols-3 h-[9vh] overflow-y-auto">
                {events
                  .filter(
                    (event) =>
                      new Date(event.date).getFullYear() ===
                        date.getFullYear() &&
                      new Date(event.date).getMonth() === date.getMonth()
                  )
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`p-1 m-1 overflow-x-auto rounded text-white ${event.color}`}
                    >
                      {event.title}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderHourRows = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    return hours.map((hour) => {
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Converts 0 to 12, 13 to 1, etc.
      const period = hour < 12 ? "AM" : "PM"; // Determines AM/PM
      return (
        <div key={hour} className="h-16 border-t border-gray-200">
          <div className="text-right pr-2 text-xs text-[#003B39]">{`${formattedHour}:00 ${period}`}</div>
        </div>
      );
    });
  };

  const renderWeekView = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const startOfWeek = new Date(calendarDate.setDate(calendarDate.getDate()));
    const weekDays = Array.from(
      { length: 7 },
      (_, i) => new Date(startOfWeek.getTime() + i * 86400000)
    );

    return (
      <div className="overflow-y-auto max-h-[600px]">
        <div className="grid grid-cols-8 gap-1">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-1">
          <div className="col-span-1">{renderHourRows()}</div>
          {weekDays.map((date, index) => (
            <div key={index} className="col-span-1 border-l relative">
              {Array.from({ length: 24 }, (_, hour) => (
                <div key={hour} className="relative h-16 border-b"></div>
              ))}
              {events
                .filter((event) =>
                  event.date.startsWith(format(date, "yyyy-MM-dd"))
                )
                .map((event) => {
                  const start = new Date(event.date);
                  const end = new Date(
                    `${format(date, "yyyy-MM-dd")}T${selectedEndTime}`
                  );
                  const top = start.getHours() * 4 + start.getMinutes() / 15;
                  const height =
                    (end.getTime() - start.getTime()) / (1000 * 60 * 15);
                  return (
                    <div
                      key={event.id}
                      className={`absolute left-0 right-0 p-1 m-1 rounded text-white text-sm ${event.color}`}
                      style={{
                        top: `${top}rem`,
                        height: `${height}rem`,
                      }}
                    >
                      {event.title}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    const start = startOfWeek(startOfMonth(calendarDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(calendarDate), { weekStartsOn: 1 });

    const days = [];
    let day = start;

    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
          <div key={dayName} className="text-center font-semibold mt-8">
            {dayName}
          </div>
        ))}
        {days.map((date, index) => (
          <div
            key={index}
            className={`h-24 border p-1 text-center cursor-pointer ${
              format(date, "MM") !== format(calendarDate, "MM")
                ? "bg-gray-200"
                : "bg-white"
            }`}
            onClick={() => {
              setSelectedDate(format(date, "yyyy-MM-dd"));
              setModalIsOpen(true);
            }}
          >
            <div className="text-lg">{format(date, "d")}</div>
            {events
              .filter(
                (event) =>
                  new Date(event.date).toISOString().split("T")[0] ===
                  format(date, "yyyy-MM-dd")
              )
              .map((event) => (
                <div
                  key={event.id}
                  className={`p-1 mt-1 rounded text-white text-sm ${event.color}`}
                >
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 w-[90%] h-[80vh] mx-auto">
      <div className="flex">
        <div className="w-1/4 pr-4 flex justify-between flex-col">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="mb-2 text-[8rem]">{format(calendarDate, "dd")}</div>
            <div> {format(calendarDate, "LLLL-yyyy")}</div>
            {/* <div className="mb-2">
              <strong>Time:</strong> {format(new Date(), "HH:mm")}
            </div> */}
            <div className="mb-2">
              {/* <strong>Week:</strong>*/}{" "}
              {format(calendarDate, "wo 'week of' yyyy")}
            </div>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="p-4 bg-[#003B39] text-white rounded-lg"
          >
            Add Event
          </button>
        </div>
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <button
                onClick={() =>
                  handleCalendarDateChange(subMonths(calendarDate, 1))
                }
                className="px-2 py-1 border rounded-lg mr-2"
              >
                &lt;
              </button>
              <button
                onClick={() =>
                  handleCalendarDateChange(subYears(calendarDate, 1))
                }
                className="px-2 py-1 border rounded-lg mr-2"
              >
                &lt;&lt;
              </button>
              <span className="pl-8 pr-8">
                {format(calendarDate, "MMMM yyyy")}
              </span>
              <button
                onClick={() =>
                  handleCalendarDateChange(addYears(calendarDate, 1))
                }
                className="px-2 py-1 border rounded-lg ml-2"
              >
                &gt;&gt;
              </button>
              <button
                onClick={() =>
                  handleCalendarDateChange(addMonths(calendarDate, 1))
                }
                className="px-2 py-1 border rounded-lg ml-2"
              >
                &gt;
              </button>
            </div>
            <div>
              <button
                onClick={() => setView("week")}
                className={`px-4 py-2 ${
                  view === "week" ? "bg-[#003B39] text-white" : "bg-gray-200"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setView("day")}
                className={`px-4 py-2 ${
                  view === "day" ? "bg-[#003B39] text-white" : "bg-gray-200"
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setView("month")}
                className={`px-4 py-2 ${
                  view === "month" ? "bg-[#003B39] text-white" : "bg-gray-200"
                }`}
              >
                Month
              </button>
            </div>
          </div>
          {view === "day" && renderDayView()}
          {view === "week" && renderWeekView()}
          {view === "month" && renderMonthView()}
        </div>
      </div>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-[#003B39] bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[30vw]">
            <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title || ""}
              onChange={handleInputChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <div className="flex space-x-4">
              <input
                type="time"
                name="startTime"
                value={selectedStartTime}
                onChange={handleTimeChange}
                className="mb-2 p-2 border rounded w-full"
              />
              <input
                type="time"
                name="endTime"
                value={selectedEndTime}
                onChange={handleTimeChange}
                className="mb-2 p-2 border rounded w-full"
              />
            </div>
            <select
              name="color"
              value={newEvent.color || ""}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded w-full"
            >
              <option value="">Select Color</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-[#003B39]">Blue</option>
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-purple-500">Purple</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={addEvent}
                className="px-4 py-2 bg-[#003B39] text-white rounded-lg mr-2"
              >
                Add Event
              </button>
              <button
                onClick={() => setModalIsOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
