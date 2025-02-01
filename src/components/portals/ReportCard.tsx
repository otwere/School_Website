import React from "react";
import { Download, Book, TrendingUp, Award } from "lucide-react";
interface ReportCardProps {
  reportData: {
    term: string;
    year: string;
    studentName: string;
    grade: string;
    subjects: Array<{
      name: string;
      score: number;
      grade: string;
      teacherRemarks: string;
    }>;
    attendance: {
      present: number;
      total: number;
    };
    classTeacherRemarks: string;
    principalRemarks: string;
    nextTermDate: string;
  };
}
const ReportCard: React.FC<ReportCardProps> = ({
  reportData
}) => {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log("Downloading report card...");
  };
  const calculateAverage = () => {
    const total = reportData.subjects.reduce((acc, subject) => acc + subject.score, 0);
    return (total / reportData.subjects.length).toFixed(2);
  };
  return <div className="bg-gray-50/30 rounded-xl border shadow-none p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold">Academic Report Card</h3>
          <p className="text-gray-600">
            {reportData.term} - {reportData.year}
          </p>
        </div>
        <button onClick={handleDownload} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <Download className="w-4 h-4" />
          <span>Download</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <span className="text-sm text-blue-600">Average Score</span>
          </div>
          <p className="text-2xl font-bold">{calculateAverage()}%</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-6 h-6 text-green-600" />
            <span className="text-sm text-green-600">Class Position</span>
          </div>
          <p className="text-2xl font-bold">5 of 25</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Book className="w-6 h-6 text-purple-600" />
            <span className="text-sm text-purple-600">Attendance</span>
          </div>
          <p className="text-2xl font-bold">
            {Math.round(reportData.attendance.present / reportData.attendance.total * 100)}
            %
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h4 className="font-medium mb-4">Subject Performance</h4>
        <div className="space-y-4">
          {reportData.subjects.map((subject, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium">{subject.name}</h5>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${subject.grade === "A" ? "bg-green-100 text-green-800" : subject.grade === "B" ? "bg-blue-100 text-blue-800" : subject.grade === "C" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                  Grade {subject.grade}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{
                  width: `${subject.score}%`
                }} />
                  </div>
                </div>
                <span className="font-medium">{subject.score}%</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {subject.teacherRemarks}
              </p>
            </div>)}
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Class Teacher's Remarks</h4>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
            {reportData.classTeacherRemarks}
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Principal's Remarks</h4>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
            {reportData.principalRemarks}
          </p>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 text-right font-bold">
            Next Term Begins : {reportData.nextTermDate}
          </p>
        </div>
      </div>
    </div>;
};
export default ReportCard;