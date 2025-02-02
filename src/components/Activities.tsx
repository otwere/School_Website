import React from "react";
import { Map, Music, Award, Palette } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const Activities = () => {
  const trips = [{
    title: "National Museum Visit",
    description: "Exploring our rich cultural heritage",
    date: "Term 1 - February 2024",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43"
  }, {
    title: "Wildlife Safari",
    description: "Learning about wildlife conservation",
    date: "Term 2 - June 2024",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
  }, {
    title: "Science Center",
    description: "Interactive science experiments and exhibits",
    date: "Term 3 - September 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d"
  }];
  const activities = [{
    title: "Music & Dance",
    description: "Express creativity through performing arts",
    schedule: "Every Tuesday & Thursday",
    icon: <Music className="w-8 h-8" />
  }, {
    title: "Art & Craft",
    description: "Develop artistic skills and imagination",
    schedule: "Every Monday & Wednesday",
    icon: <Palette className="w-8 h-8" />
  }, {
    title: "Sports",
    description: "Physical fitness and team building",
    schedule: "Every Friday",
    icon: <Award className="w-8 h-8" />
  }, {
    title: "Field Trips",
    description: "Learning beyond classroom walls",
    schedule: "Monthly",
    icon: <Map className="w-8 h-8" />
  }];
  return <BackgroundWrapper variant="colored">
      <div id="activities" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            School Trips & Activities
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Enriching experiences beyond the classroom
          </p>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Educational Trips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip, index) => <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={trip.image} alt={trip.title} className="w-full h-64 object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {trip.title}
                  </h4>
                  <p className="text-white/80 text-sm mb-2">
                    {trip.description}
                  </p>
                  <span className="text-white/60 text-sm">{trip.date}</span>
                </div>
              </div>)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Extra-Curricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white group">
                <div className="text-blue-500 mb-4 transform transition-transform group-hover:scale-110">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{activity.title}</h4>
                <p className="text-gray-600 mb-2">{activity.description}</p>
                <span className="text-sm  font-medium text-navy-800">
                  {activity.schedule}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default Activities;