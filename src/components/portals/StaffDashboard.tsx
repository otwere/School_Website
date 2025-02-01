import React from "react";
import { Users, BookOpen, Clock, Calendar, Bell, TrendingUp, AlertCircle } from "lucide-react";
import { staffMockData } from "../data/mockData";
const StaffDashboard = () => {
  return <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600">Total Students</p>
              <p className="text-2xl font-bold">
                {staffMockData.dashboard.totalStudents}
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600">Classes Today</p>
              <p className="text-2xl font-bold">
                {staffMockData.dashboard.classestoday}
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600">Pending Tasks</p>
              <p className="text-2xl font-bold">
                {staffMockData.dashboard.pendingTasks}
              </p>
            </div>
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600">Average Attendance</p>
              <p className="text-2xl font-bold">95%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-amber-600" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {staffMockData.classes[0].schedule.map((session, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {staffMockData.classes[0].subjects[0]}
                    </p>
                    <p className="text-sm text-gray-500">Room {session.room}</p>
                  </div>
                </div>
                <span className="text-gray-600">{session.time}</span>
              </div>)}
          </div>
        </div>
        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {staffMockData.dashboard.upcomingEvents.map((event, index) => <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>)}
          </div>
        </div>
        {/* Important Announcements */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            Important Announcements
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <div className="flex items-center space-x-2 text-red-600 mb-2">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Term Reports Due</span>
              </div>
              <p className="text-sm text-gray-600">
                Please submit all term reports by Friday.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <Bell className="w-5 h-5" />
                <span className="font-medium">Staff Meeting</span>
              </div>
              <p className="text-sm text-gray-600">
                General staff meeting on Monday at 8:00 AM.
              </p>
            </div>
          </div>
        </div>
        {/* Recent Student Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold mb-4">
            Recent Student Performance
          </h3>
          <div className="space-y-4">
            {staffMockData.classes[0].studentList.map((student, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">ID: {student.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">
                    {student.currentGrade}
                  </p>
                  <p className="text-sm text-gray-500">
                    Attendance: {student.attendance}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
        {/* Quick Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Pending Tasks</h3>
          <div className="space-y-4">
            {staffMockData.tasks.map((task, index) => <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{task.title}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${task.priority === "high" ? "bg-red-100 text-red-600" : task.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                <p className="text-sm text-gray-500">Due: {task.deadline}</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default StaffDashboard;