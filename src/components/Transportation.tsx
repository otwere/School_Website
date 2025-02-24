import React from "react";
import { Bus, Clock, Shield, MapPin } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const Transportation = () => {
  const features = [{
    icon: <Bus size={32} />,
    title: "Modern Fleet",
    description: "Air-conditioned buses with safety features"
  }, {
    icon: <Clock size={32} />,
    title: "Scheduled Routes",
    description: "Reliable pickup and drop-off times"
  }, {
    icon: <Shield size={32} />,
    title: "Safety First",
    description: "Trained drivers and bus attendants"
  }, {
    icon: <MapPin size={32} />,
    title: "GPS Tracking",
    description: "Real-time location monitoring"
  }];
  return <BackgroundWrapper variant="colored">
      <div id="transportation" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            School Transportation
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Safe and reliable transport service for our students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1557223562-6c77ef16210f" alt="School Bus" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-none hover:bg-white hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Bus Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Morning Pick-up", "Afternoon Drop-off", "Activity Routes"].map((route, index) => <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">{route}</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Route {index + 1}: 6:30 AM - 7:30 AM</li>
                    <li>Coverage : All Designated  Pickup & Drop-off Points</li>
                    <li>
                      Bus Number : BUS-{index + 1}0{index + 1}
                    </li>
                  </ul>
                </div>)}
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default Transportation;