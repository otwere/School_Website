import React from "react";
import { Book, Brain, Users, Target, Palette, Calculator, Globe } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const CBCSyllabus = () => {
  const subjects = [{
    title: "Literacy Activities",
    description: "Language development through reading, writing, and communication",
    icon: <Book className="w-8 h-8 text-yellow-500" />
  }, {
    title: "Mathematical Activities",
    description: "Number work, patterns, and basic problem solving",
    icon: <Calculator className="w-8 h-8 text-red-500" />
  }, {
    title: "Environmental Activities",
    description: "Understanding the world around us and environmental care",
    icon: <Globe className="w-8 h-8 text-green-500" />
  }, {
    title: "Scientific Exploration",
    description: "Hands-on learning through observation and experimentation",
    icon: <Brain  className="w-8 h-8 text-blue-500" />
  }];
  return <BackgroundWrapper>
      <div id="curriculum" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">CBC Syllabus</h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Our comprehensive curriculum follows the Competency Based Curriculum
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-navy-800 mb-4">{subject.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
              <p className="text-gray-600">{subject.description}</p>
            </div>)}
        </div>
      </div>
    </BackgroundWrapper>;
};
export default CBCSyllabus;