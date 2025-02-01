import React from "react";
import { Target, Star, Award } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const SchoolValues = () => {
  return <BackgroundWrapper>
      <div id="schoolvalues" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Our School Values
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Building tomorrow's leaders with strong values
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-center">
                To be the leading institution in nurturing globally competitive
                learners through innovative education and holistic development.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-6 mx-auto">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                To provide quality education through modern teaching
                methodologies, fostering creativity, critical thinking, and
                character development.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-6 mx-auto">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Our Motto</h3>
              <p className="text-gray-600 text-center">
                "Excellence Through Knowledge and Character"
              </p>
              <p className="text-sm text-gray-500 text-center mt-4 italic">
                Striving for excellence in both academic achievement and
                personal growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default SchoolValues;