import React, { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const EventsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const events = [{
    date: "2024-02-15",
    title: "Sports Day",
    type: "sports",
    color: "bg-blue-100 text-blue-800"
  }, {
    date: "2024-02-20",
    title: "Parent-Teacher Meeting",
    type: "academic",
    color: "bg-green-100 text-green-800"
  }, {
    date: "2024-02-25",
    title: "Science Fair",
    type: "academic",
    color: "bg-purple-100 text-purple-800"
  }];
  const getDaysInMonth = (date: Date) => {
    const days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // Add empty days for the start of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    return days;
  };
  return <BackgroundWrapper>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">School Calendar</h2>
              <div className="flex items-center space-x-4">
                <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-lg font-semibold">
                  {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric"
                })}
                </span>
                <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day} className="text-center font-semibold py-2">
                  {day}
                </div>)}
              {getDaysInMonth(currentMonth).map((day, index) => <div key={index} className={`aspect-square p-2 border rounded-lg ${day ? "hover:bg-gray-50" : ""}`}>
                  {day && <>
                      <span className="text-sm">{day}</span>
                      {/* Event indicators */}
                      <div className="mt-1 space-y-1">
                        {events.filter(event => new Date(event.date).getDate() === day && new Date(event.date).getMonth() === currentMonth.getMonth()).map((event, eventIndex) => <div key={eventIndex} className={`text-xs p-1 rounded ${event.color} truncate`}>
                              {event.title}
                            </div>)}
                      </div>
                    </>}
                </div>)}
            </div>
            {/* Upcoming Events */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default EventsCalendar;