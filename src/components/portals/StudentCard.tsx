import React, { useState } from "react";
import { Download, User, Calendar, Droplets, Phone, MapPin, School, Hash, BookOpen } from "lucide-react";

interface StudentCardProps {
  studentData: {
    name: string;
    grade: string;
    studentId: string;
    photo: string;
    admissionYear: string;
    dateOfBirth: string;
    bloodGroup: string;
    address: string;
    emergencyContact: string;
    stream: string; // Added stream field
  };
}

const StudentCard: React.FC<StudentCardProps> = ({ studentData }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      console.log("Downloading student card...");
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-gray-50/30 rounded-xl shadow-none border">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">Student Profile</h3>
          <p className="text-sm text-gray-500">ID : {studentData.studentId}</p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          {isDownloading ? "Processing..." : "Export PDF"}
        </button>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-40 h-40 rounded-lg overflow-hidden ring-2 ring-gray-100">
                <img
                  src={studentData.photo}
                  alt={studentData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                {studentData.grade}
              </span>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900">{studentData.name}</h4>
              <p className="text-sm text-gray-500">Class of {studentData.admissionYear}</p>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Hash className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Student ID</p>
                  <p className="text-base text-gray-900">{studentData.studentId}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                  <p className="text-base text-gray-900">{studentData.dateOfBirth}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Blood Group</p>
                  <p className="text-base text-gray-900">{studentData.bloodGroup}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Stream : Blue</p>
                  <p className="text-base text-gray-900">{studentData.stream}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <School className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Admission Year</p>
                  <p className="text-base text-gray-900">{studentData.admissionYear}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Emergency Contact</p>
                  <p className="text-base text-gray-900">{studentData.emergencyContact}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-base text-gray-900">{studentData.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(StudentCard);