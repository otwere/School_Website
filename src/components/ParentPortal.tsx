import React, { useState } from "react";
import { Users, Calendar, FileText, Bell, CreditCard, MessageSquare, BookOpen, Settings, Upload, Download } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";

const ParentPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [{
    id: "dashboard",
    icon: <Users />,
    label: "Dashboard"
  }, {
    id: "attendance",
    icon: <Calendar />,
    label: "Attendance"
  }, {
    id: "grades",
    icon: <FileText />,
    label: "Grades"
  }, {
    id: "fees",
    icon: <CreditCard />,
    label: "Fees"
  }, {
    id: "homework",
    icon: <BookOpen />,
    label: "Homework"
  }, {
    id: "messages",
    icon: <MessageSquare />,
    label: "Messages"
  }, {
    id: "settings",
    icon: <Settings />,
    label: "Settings"
  }];

  // Mock Data
  const children = [{
    name: "John Doe",
    grade: "Grade 4",
    attendance: "95%",
    nextFee: "Due in 5 days"
  }, {
    name: "Jane Doe",
    grade: "Grade 2",
    attendance: "98%",
    nextFee: "Paid"
  }];

  const attendanceData = {
    "John Doe": [
      { date: "2025-01-25", status: "present" },
      { date: "2025-01-26", status: "present" },
      { date: "2025-01-27", status: "absent" },
      { date: "2025-01-28", status: "present" },
      { date: "2025-01-29", status: "present" }
    ],
    "Jane Doe": [
      { date: "2025-01-25", status: "present" },
      { date: "2025-01-26", status: "present" },
      { date: "2025-01-27", status: "present" },
      { date: "2025-01-28", status: "late" },
      { date: "2025-01-29", status: "present" }
    ]
  };

  const gradesData = {
    "John Doe": [
      { subject: "Mathematics", grade: "A", percentage: 92 },
      { subject: "Science", grade: "B+", percentage: 88 },
      { subject: "English", grade: "A-", percentage: 90 },
      { subject: "History", grade: "B", percentage: 85 }
    ],
    "Jane Doe": [
      { subject: "Mathematics", grade: "A+", percentage: 95 },
      { subject: "Science", grade: "A", percentage: 92 },
      { subject: "English", grade: "B+", percentage: 88 },
      { subject: "History", grade: "A-", percentage: 91 }
    ]
  };

  const feesData = {
    "John Doe": [
      { 
        term: "Term 1", 
        amount: 5000, 
        status: "Paid", 
        dueDate: "2024-09-01",
        amountPaid: 5000,
        dateOfPayment: "2024-09-01",
        modeOfPayment: "Online",
        transactionId: "TX123456",
        balanceAmount: 0
      },
      { 
        term: "Term 2", 
        amount: 5000, 
        status: "Pending", 
        dueDate: "2025-02-01",
        amountPaid: 0,
        dateOfPayment: "",
        modeOfPayment: "",
        transactionId: "",
        balanceAmount: 5000
      }
    ],
    "Jane Doe": [
      { 
        term: "Term 1", 
        amount: 5000, 
        status: "Paid", 
        dueDate: "2024-09-01",
        amountPaid: 5000,
        dateOfPayment: "2024-09-01",
        modeOfPayment: "Cash",
        transactionId: "TX654321",
        balanceAmount: 0
      },
      { 
        term: "Term 2", 
        amount: 5000, 
        status: "Paid", 
        dueDate: "2025-02-01",
        amountPaid: 5000,
        dateOfPayment: "2025-02-01",
        modeOfPayment: "Mpesa",
        transactionId: "TX987654",
        balanceAmount: 0
      }
    ]
  };

  const homeworkData = {
    "John Doe": [
      { subject: "Mathematics", title: "Algebra Worksheet", dueDate: "2025-02-05", status: "pending" },
      { subject: "Science", title: "Chemistry Lab Report", dueDate: "2025-02-03", status: "submitted" },
      { subject: "English", title: "Book Report", dueDate: "2025-02-07", status: "pending" }
    ],
    "Jane Doe": [
      { subject: "Mathematics", title: "Addition Practice", dueDate: "2025-02-05", status: "submitted" },
      { subject: "Science", title: "Plant Growth Chart", dueDate: "2025-02-03", status: "pending" },
      { subject: "English", title: "Story Writing", dueDate: "2025-02-07", status: "submitted" }
    ]
  };

  const messagesData = [
    {
      id: 1,
      from: "Mrs. Smith",
      subject: "Math Performance Update",
      date: "2025-01-29",
      content: "John has shown great improvement in algebra this month.",
      read: false
    },
    {
      id: 2,
      from: "Mr. Johnson",
      subject: "Science Project Reminder",
      date: "2025-01-28",
      content: "Don't forget about the upcoming science fair project due next week.",
      read: true
    },
    {
      id: 3,
      from: "School Admin",
      subject: "Holiday Schedule",
      date: "2025-01-27",
      content: "Please note the upcoming holiday schedule for February.",
      read: true
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {children.map((child, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-none border hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{child.name}</h3>
                      <p className="text-gray-600">{child.grade}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Attendance</p>
                      <p className="font-semibold">{child.attendance}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Next Fee</p>
                      <p className="font-semibold">{child.nextFee}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {[
                  { title: "Term Report Available", date: "Today", type: "academic" },
                  { title: "Fee Payment Reminder", date: "Yesterday", type: "finance" },
                  { title: "Parent-Teacher Meeting", date: "Next Week", type: "event" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.type === "academic"
                        ? "bg-green-100 text-green-800"
                        : activity.type === "finance"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "attendance":
        return (
          <div className="space-y-6">
            {children.map((child, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-4">{child.name}'s Attendance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData[child.name].map((record: { date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, idx: React.Key | null | undefined) => (
                        <tr key={idx} className="border-t">
                          <td className="px-4 py-2">{record.date}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              record.status === "present"
                                ? "bg-green-100 text-green-800"
                                : record.status === "absent"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {record.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "grades":
        return (
          <div className="space-y-6">
            {children.map((child, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-4">{child.name}'s Grades</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Subject</th>
                        <th className="px-4 py-2 text-left">Grade</th>
                        <th className="px-4 py-2 text-left">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gradesData[child.name].map((record: { subject: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; grade: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; percentage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => (
                        <tr key={idx} className="border-t">
                          <td className="px-4 py-2">{record.subject}</td>
                          <td className="px-4 py-2">{record.grade}</td>
                          <td className="px-4 py-2">{record.percentage}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "fees":
        return (
          <div className="space-y-6">
            {children.map((child, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-4">{child.name}'s Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Term</th>
                        <th className="px-4 py-2 text-left">Amount</th>
                        <th className="px-4 py-2 text-left">Due Date</th>
                        <th className="px-4 py-2 text-left">Amount Paid</th>
                        <th className="px-4 py-2 text-left">Date of Payment</th>
                        <th className="px-4 py-2 text-left">Mode of Payment</th>
                        <th className="px-4 py-2 text-left">Transaction ID</th>
                        <th className="px-4 py-2 text-left">Balance Amount</th>
                        <th className="px-4 py-2 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feesData[child.name].map((record: { term: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dueDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; amountPaid: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dateOfPayment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; modeOfPayment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; transactionId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; balanceAmount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, idx: React.Key | null | undefined) => (
                        <tr key={idx} className="border-t">
                          <td className="px-4 py-2">{record.term}</td>
                          <td className="px-4 py-2">KES : {record.amount}</td>
                          <td className="px-4 py-2">{record.dueDate}</td>
                          <td className="px-4 py-2">KES :{record.amountPaid}</td>
                          <td className="px-4 py-2">{record.dateOfPayment}</td>
                          <td className="px-4 py-2">{record.modeOfPayment}</td>
                          <td className="px-4 py-2">{record.transactionId}</td>
                          <td className="px-4 py-2">KES : {record.balanceAmount}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              record.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {record.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "homework":
        return (
          <div className="space-y-6">
            {children.map((child, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-4">{child.name}'s Homework</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Subject</th>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Due Date</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {homeworkData[child.name].map((record: { subject: string | number | boolean | React.ReactElement<never, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dueDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, idx: React.Key | null | undefined) => (
                        <tr key={idx} className="border-t">
                          <td className="px-4 py-2">{record.subject}</td>
                          <td className="px-4 py-2">{record.title}</td>
                          <td className="px-4 py-2">{record.dueDate}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              record.status === "submitted"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-4 py-2">
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Download className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Upload className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "messages":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Messages</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                New Message
              </button>
            </div>
            <div className="bg-white rounded-xl shadow">
              {messagesData.map((message, index) => (
                <div
                  key={message.id}
                  className={`p-4 ${index !== 0 ? "border-t" : ""} ${
                    !message.read ? "bg-blue-50" : ""
                  } hover:bg-gray-50 cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{message.from}</h4>
                      <p className="text-sm text-gray-600">{message.subject}</p>
                    </div>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        );


      case "settings":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Notifications
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>All notifications</option>
                      <option>Important only</option>
                      <option>None</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-700">
                      Receive weekly progress reports
                    </span>
                  </label>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <BackgroundWrapper variant="colored">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
              <div className="space-y-4">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold">Parent | Guardian Dashboard</h2>
                  <p className="text-gray-600">Welcome back! <span className="font-semibold ml-2 text-blue-700">Mr . Johnson</span></p>
                </div>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default ParentPortal;