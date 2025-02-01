import React, { useState } from "react";
import { BookOpen, Calendar, Award, Clock, Bell, FileText, Users, Bookmark, CreditCard, Download, ChevronRight, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
import { studentMockData } from "./data/mockData";
import StudentCard from "./portals/StudentCard";
import MealCard from "./portals/MealCard";
import ReportCard from "./portals/ReportCard";
import StudentTimetable from "./portals/StudentTimetable";
import ExamSchedule from "./portals/ExamSchedule";
const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const menuItems = [{
    id: "dashboard",
    icon: <BookOpen />,
    label: "Dashboard"
  }, {
    id: "timetable",
    icon: <Clock />,
    label: "Timetable"
  }, {
    id: "exams",
    icon: <FileText />,
    label: "Exams"
  }, {
    id: "cards",
    icon: <CreditCard />,
    label: "IDs & Meal Cards"
  }, {
    id: "academics",
    icon: <Award />,
    label: "Report Card"
  }];
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600">Attendance</p>
                    <p className="text-2xl font-bold">
                      {studentMockData.dashboard.attendance}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600">Current GPA</p>
                    <p className="text-2xl font-bold">
                      {studentMockData.grades.currentTerm.gpa}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600">Assignments</p>
                    <p className="text-2xl font-bold">
                      {studentMockData.dashboard.assignments.completed}/
                      {studentMockData.dashboard.assignments.total}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-amber-600">Next Exam</p>
                    <p className="text-2xl font-bold">5d</p>
                  </div>
                  <FileText className="w-8 h-8 text-amber-600" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {studentMockData.dashboard.upcomingEvents.map((event, index) => <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`p-2 rounded-lg ${event.type === "exam" ? "bg-red-100" : event.type === "assignment" ? "bg-blue-100" : "bg-green-100"}`}>
                          {event.type === "exam" ? <FileText className="w-5 h-5 text-red-600" /> : event.type === "assignment" ? <BookOpen className="w-5 h-5 text-blue-600" /> : <Calendar className="w-5 h-5 text-green-600" />}
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </div>)}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Grades</h3>
                <div className="space-y-4">
                  {studentMockData.grades.currentTerm.subjects.map((subject, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{subject.name}</p>
                            <p className="text-sm text-gray-500">
                              Teacher: {subject.teacher}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-blue-600">
                            {subject.grade}
                          </p>
                          <p className="text-sm text-gray-500">
                            {subject.score}%
                          </p>
                        </div>
                      </div>)}
                </div>
              </div>
            </div>
          </div>;
      case "timetable":
        return <StudentTimetable timetableData={studentMockData.timetable} />;
      case "exams":
        return <ExamSchedule examData={studentMockData.exams} />;
      case "cards":
        return <div className="space-y-8">
            <StudentCard studentData={studentMockData.personalInfo} />
            <MealCard mealData={studentMockData.mealCard} />
          </div>;
      case "academics":
        return <div className="space-y-8">
            <ReportCard reportData={studentMockData.reportCard} />
          </div>;
      default:
        return null;
    }
  };
  return <BackgroundWrapper variant="colored">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex">
            <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
              <div className="space-y-4">
                {menuItems.map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </button>)}
              </div>
            </div>
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Student Portal</h2>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Bell className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default StudentPortal;