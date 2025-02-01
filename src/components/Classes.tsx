import React, { useState } from "react";
import { Users, Clock, BookOpen, Award, ChevronRight } from "lucide-react";
const Classes = () => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const grades = [{
    name: "Pre-Primary 1",
    age: "4-5 years",
    students: "20 per class",
    subjects: ["Early Literacy", "Numeracy", "Creative Arts", "Physical Activities"],
    schedule: "8:00 AM - 2:00 PM",
    features: ["Play-based learning", "Phonics instruction", "Motor skills development", "Social interaction"],
    stats: {
      teacherRatio: "1:10",
      classrooms: 4,
      activities: 8
    }
  }, {
    name: "Pre-Primary 2",
    age: "5-6 years",
    students: "20 per class",
    subjects: ["Advanced Literacy", "Basic Math", "Environmental Activities", "Music"],
    schedule: "8:00 AM - 2:30 PM",
    features: ["Structured learning", "Reading fundamentals", "Basic writing skills", "Interactive activities"],
    stats: {
      teacherRatio: "1:10",
      classrooms: 4,
      activities: 10
    }
  }, {
    name: "Grade 1",
    age: "6-7 years",
    students: "25 per class",
    subjects: ["English", "Mathematics", "Science", "Social Studies"],
    schedule: "7:30 AM - 3:30 PM",
    features: ["Core curriculum", "Project-based learning", "Digital literacy", "Physical education"],
    stats: {
      teacherRatio: "1:12",
      classrooms: 5,
      activities: 12
    }
  }, {
    name: "Grade 2",
    age: "7-8 years",
    students: "25 per class",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Art"],
    schedule: "7:30 AM - 3:30 PM",
    features: ["Advanced reading", "Critical thinking", "Scientific exploration", "Cultural studies"],
    stats: {
      teacherRatio: "1:12",
      classrooms: 5,
      activities: 12
    }
  }, {
    name: "Grade 3",
    age: "8-9 years",
    students: "25 per class",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "ICT"],
    schedule: "7:30 AM - 3:30 PM",
    features: ["Research skills", "Problem solving", "Team projects", "Technology integration"],
    stats: {
      teacherRatio: "1:12",
      classrooms: 5,
      activities: 14
    }
  }, {
    name: "Grade 4",
    age: "9-10 years",
    students: "25 per class",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "ICT", "Languages"],
    schedule: "7:30 AM - 3:30 PM",
    features: ["Advanced concepts", "Leadership skills", "Independent projects", "Community service"],
    stats: {
      teacherRatio: "1:12",
      classrooms: 5,
      activities: 15
    }
  }];
  return <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 *:text-blue-500 font-sans">Our Classes</h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Structured learning environments for every age group
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grades.map(grade => <div key={grade.name} className={`group relative   bg-white/90 rounded-xl shadow-none hover:scale-95 hover:bg-slate-50  transition-all duration-300 overflow-hidden cursor-pointer border ${selectedGrade === grade.name ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-50" : "border-transparent"}`} onClick={() => setSelectedGrade(selectedGrade === grade.name ? null : grade.name)}>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      {grade.name}
                    </h3>
                    <p className="text-gray-600">Age : {grade.age}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {grade.students}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {grade.schedule}
                </div>
                {selectedGrade === grade.name && <div className="mt-6 space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {grade.subjects.map(subject => <span key={subject} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                            {subject}
                          </span>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {grade.features.map(feature => <li key={feature} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Teacher Ratio</p>
                        <p className="font-semibold text-gray-900">
                          {grade.stats.teacherRatio}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Classrooms</p>
                        <p className="font-semibold text-gray-900">
                          {grade.stats.classrooms}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Activities</p>
                        <p className="font-semibold text-gray-900">
                          {grade.stats.activities}
                        </p>
                      </div>
                    </div>
                  </div>}
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform origin-left transition-transform duration-300 ${selectedGrade === grade.name ? "scale-x-100" : "scale-x-0"}`} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Classes;