import React, { useState } from "react";
import { Calendar, Users, Trophy, Book } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const ClubsAndSocieties = () => {
  const [activeTab, setActiveTab] = useState("term1");
  const [selectedClub, setSelectedClub] = useState(null);
  const clubs = [{
    id: 1,
    name: "Science Club",
    icon: <Book className="w-6 h-6" />,
    description: "Exploring scientific discoveries and innovations",
    activities: {
      term1: ["Science Fair Preparation", "Laboratory Experiments", "Guest Speaker Series"],
      term2: ["Science Olympiad", "Research Projects", "Field Trips"],
      term3: ["Innovation Challenge", "Environmental Projects", "Science Exhibition"]
    }
  }, {
    id: 2,
    name: "Debate Club",
    icon: <Users className="w-6 h-6" />,
    description: "Developing public speaking and critical thinking skills",
    activities: {
      term1: ["Introduction to Debate", "Mock Debates", "Public Speaking Workshop"],
      term2: ["Inter-Class Debates", "Regional Competition Prep", "Speech Writing Workshop"],
      term3: ["National Debate Championship", "Leadership Training", "Year-End Showcase"]
    }
  }, {
    id: 3,
    name: "Sports Academy",
    icon: <Trophy className="w-6 h-6" />,
    description: "Nurturing athletic excellence and team spirit",
    activities: {
      term1: ["Team Selection Trials", "Basic Training Camp", "Friendly Matches"],
      term2: ["Inter-School Tournaments", "Advanced Training", "Sports Day Prep"],
      term3: ["National Championships", "Athletics Meet", "Awards Ceremony"]
    }
  }];
  return <BackgroundWrapper variant="white">
      <div id="clubs" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Clubs & Societies
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Discover your passions and develop your talents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clubs.map(club => <div key={club.id} onClick={() => setSelectedClub(club)} className="bg-white rounded-xl shadow-sm p-6 cursor-pointer transform transition-all duration-300 hover:scale-95 hover:shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  {club.icon}
                </div>
                <h3 className="text-xl font-bold">{club.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{club.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                View Activities →
              </button>
            </div>)}
        </div>
        {selectedClub && <div className="bg-gray-50 rounded-2xl p-8 mt-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">
                {selectedClub.name} Activities
              </h3>
              <button onClick={() => setSelectedClub(null)} className="text-gray-500 hover:text-gray-700">
                Close
              </button>
            </div>
            <div className="flex mb-6 space-x-4">
              {["term1", "term2", "term3"].map(term => <button key={term} onClick={() => setActiveTab(term)} className={`px-4 py-2 rounded-lg ${activeTab === term ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                  Term {term.slice(-1)}
                </button>)}
            </div>
            <div className="bg-white rounded-xl p-6">
              <ul className="space-y-4">
                {selectedClub.activities[activeTab].map((activity, index) => <li key={index} className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{activity}</span>
                  </li>)}
              </ul>
            </div>
          </div>}
      </div>
    </BackgroundWrapper>;
};
export default ClubsAndSocieties;