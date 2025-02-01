import React, { useState } from "react";
import { Clock, MapPin, User } from "lucide-react";
interface TimetableProps {
  timetableData: {
    [key: string]: Array<{
      time: string;
      subject: string;
      teacher: string;
      room: string;
    }>;
  };
}
const StudentTimetable: React.FC<TimetableProps> = ({
  timetableData
}) => {
  const [selectedDay, setSelectedDay] = useState("monday");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  return <div className="space-y-6">
      <div className="flex space-x-4">
        {days.map(day => <button key={day} onClick={() => setSelectedDay(day)} className={`px-4 py-2 rounded-lg capitalize transition-colors ${selectedDay === day ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
            {day}
          </button>)}
      </div>
      <div className="bg-white rounded-xl shadow-sm">
        <div className="grid grid-cols-1 divide-y">
          {timetableData[selectedDay].map((session, index) => <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">{session.subject}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {session.teacher}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Room {session.room}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-600">{session.time}</span>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default StudentTimetable;