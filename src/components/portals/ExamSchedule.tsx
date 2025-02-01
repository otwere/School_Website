import React, { useState } from "react";
import { Calendar, Clock, MapPin, FileText, AlertCircle, Book, TrendingUp } from "lucide-react";
interface ExamScheduleProps {
  examData: {
    upcoming: Array<{
      subject: string;
      date: string;
      time: string;
      room: string;
      type: string;
      topics: string[];
    }>;
    past: Array<{
      term: string;
      year: string;
      subjects: Array<{
        subject: string;
        score: number;
        grade: string;
        teacherRemarks: string;
      }>;
      termAverage: number;
      termGrade: string;
      classRank: string;
    }>;
  };
}
const ExamSchedule: React.FC<ExamScheduleProps> = ({
  examData
}) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedTerm, setSelectedTerm] = useState<number>(0);
  return <div className="space-y-6">
      <div className="flex space-x-4">
        <button onClick={() => setActiveTab("upcoming")} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "upcoming" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
          Upcoming Exams
        </button>
        <button onClick={() => setActiveTab("past")} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "past" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
          Past Exams
        </button>
      </div>
      {activeTab === "upcoming" ? <div className="space-y-4">
          {examData.upcoming.map((exam, index) => <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exam.subject}</h3>
                  <div className="flex space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exam.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {exam.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Room {exam.room}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {exam.type}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Topics Covered:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exam.topics.map((topic, idx) => <li key={idx}>{topic}</li>)}
                </ul>
              </div>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Remember to bring all necessary materials and arrive 15
                  minutes before the exam starts.
                </p>
              </div>
            </div>)}
        </div> : <div className="space-y-6">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {examData.past.map((term, index) => <button key={index} onClick={() => setSelectedTerm(index)} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${selectedTerm === index ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"}`}>
                {term.term} {term.year}
              </button>)}
          </div>
          {examData.past[selectedTerm] && <div className="bg-gray-50/30 border rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  {examData.past[selectedTerm].term}{" "}
                  {examData.past[selectedTerm].year}
                </h3>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Term Average</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {examData.past[selectedTerm].termAverage}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Grade</p>
                    <p className="text-2xl font-bold text-green-600">
                      {examData.past[selectedTerm].termGrade}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Class Rank</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {examData.past[selectedTerm].classRank}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {examData.past[selectedTerm].subjects.map((subject, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Book className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">{subject.subject}</h4>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {subject.score}%
                        </span>
                        <span className={`px-3 py-1 rounded-full ${subject.grade === "A" ? "bg-green-100 text-green-800" : subject.grade === "B" ? "bg-blue-100 text-blue-800" : subject.grade === "C" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                          Grade {subject.grade}
                        </span>
                      </div>
                    </div>
                    <div className="relative pt-2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="absolute h-2 bg-blue-600 rounded-full" style={{
                  width: `${subject.score}%`
                }} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {subject.teacherRemarks}
                    </p>
                  </div>)}
              </div>
            </div>}
        </div>}
    </div>;
};
export default ExamSchedule;