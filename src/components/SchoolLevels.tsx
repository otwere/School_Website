import React from "react";
import { Star, Book, Trophy, Bus, Clock, Users } from "lucide-react";
const SchoolLevels = () => {
  const levels = [{
    name: "Kindergarten",
    ageRange: "3-5 years",
    features: ["Play-based learning", "Basic numeracy & literacy", "Social skills development", "Creative activities"],
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181",
    color: "bg-pink-50"
  }, {
    name: "Junior School",
    ageRange: "6-11 years",
    features: ["Core CBC curriculum", "Sports & arts", "Project-based learning", "Character development"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    color: "bg-blue-50"
  }, {
    name: "Senior School",
    ageRange: "12-14 years",
    features: ["Advanced academics", "Leadership programs", "Career guidance", "Specialized subjects"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    color: "bg-purple-50"
  }];
  return <section id="levels" className="py-20 bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Academic Levels
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Tailored education for every stage of development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => <div key={index} className={`rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-2 ${level.color}`}>
              <div className="h-48 overflow-hidden">
                <img src={level.image} alt={level.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${level.name === "Kindergarten" ? "font-comic text-pink-600" : level.name === "Junior School" ? "font-sans text-blue-600" : "font-serif text-purple-600"}`}>
                  {level.name}
                </h3>
                <p className="text-gray-600 mb-4">Age: {level.ageRange}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-700">
                      <Star size={16} className="mr-2 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SchoolLevels;