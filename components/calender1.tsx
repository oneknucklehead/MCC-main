import React from "react";
import classNames from "classnames";

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blankDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="w-[30%] mx-auto p-8 mt-4">
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
        {days.map((day) => (
          <div
            key={day}
            className={classNames("text-center p-2", {
              "bg-[#004225] text-white rounded-full": day === today,
            })}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
