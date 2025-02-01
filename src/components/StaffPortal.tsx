import React, { useState } from "react";
import { Users, Calendar, FileText, Bell, Clock, CheckSquare, MessageSquare, Settings } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
import StaffDashboard from "./portals/StaffDashboard";
const StaffPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const menuItems = [{
    id: "dashboard",
    icon: <Users />,
    label: "Dashboard"
  }, {
    id: "schedule",
    icon: <Calendar />,
    label: "Schedule"
  }, {
    id: "attendance",
    icon: <Clock />,
    label: "Attendance"
  }, {
    id: "grades",
    icon: <FileText />,
    label: "Grades"
  }, {
    id: "tasks",
    icon: <CheckSquare />,
    label: "Tasks"
  }, {
    id: "messages",
    icon: <MessageSquare />,
    label: "Messages"
  }, {
    id: "settings",
    icon: <Settings />,
    label: "Settings"
  }];
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <StaffDashboard />;
      // Add other cases for different tabs
      default:
        return null;
    }
  };
  return <BackgroundWrapper variant="colored">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                <h2 className="text-2xl font-bold">Staff Portal</h2>
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
export default StaffPortal;