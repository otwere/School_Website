import React from "react";
import { Clock, Users, BookOpen, Star } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const ClassroomSessions = () => {
  const sessions = [{
    level: "Kindergarten",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    activities: ["Morning Circle Time", "Playtime", "Story Sessions", "Art & Craft"],
    timing: "8:00 AM - 2:00 PM"
  }, {
    level: "Junior School",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    activities: ["Core Subjects", "Group Projects", "Physical Education", "Music & Art"],
    timing: "7:30 AM - 3:30 PM"
  }, {
    level: "Senior School",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    activities: ["Advanced Studies", "Labs", "Career Guidance", "Sports"],
    timing: "7:30 AM - 4:00 PM"
  }];
  return <BackgroundWrapper variant="white">
      <div id="sessions" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Classroom Sessions
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic font-sans">
            Engaging learning environments for every age group
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => <div key={index} className="group relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={session.image} alt={session.level} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-white ${session.level === "Kindergarten" ? "font-comic" : session.level === "Junior School" ? "font-sans" : "font-serif"}`}>
                      {session.level}
                    </h3>
                    <div className="flex items-center text-white/80 mb-3">
                      <Clock size={16} className="mr-2" />
                      {session.timing}
                    </div>
                    <ul className="space-y-2">
                      {session.activities.map((activity, idx) => <li key={idx} className="flex items-center text-white/90">
                          <Star size={16} className="mr-2" />
                          {activity}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </BackgroundWrapper>;
};
export default ClassroomSessions;