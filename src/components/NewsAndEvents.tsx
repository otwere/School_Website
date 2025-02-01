import React, { useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [expandedNewsIndex, setExpandedNewsIndex] = useState<number | null>(null);

  const news = [
    {
      title: "Academic Excellence Awards 2024",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6",
      excerpt: "Celebrating outstanding achievements of our students in academics and extra-curricular activities.",
      fullContent: "The Academic Excellence Awards 2024 will honor students who have demonstrated exceptional performance in their studies and extracurricular activities. The event will feature keynote speeches from renowned educators and a special awards ceremony."
    },
    {
      title: "New STEM Lab Opening",
      date: "April 1, 2024",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      excerpt: "State-of-the-art facility to enhance our science and technology programs.",
      fullContent: "Our new STEM Lab is equipped with the latest technology to provide students with hands-on experience in science, technology, engineering, and mathematics. The lab will host workshops, experiments, and research projects to foster innovation and creativity."
    },
    {
      title: "International Culture Day",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      excerpt: "Annual celebration of diversity and cultural exchange in our school community.",
      fullContent: "International Culture Day is a vibrant event where students and staff showcase their cultural heritage through music, dance, food, and art. This year's theme is 'Unity in Diversity,' and we encourage everyone to participate and learn from each other's traditions."
    }
  ];

  const events = {
    upcoming: [
      {
        title: "Parent-Teacher Conference",
        date: "March 20, 2025",
        time: "9:00 AM - 3:00 PM",
        location: "School Auditorium",
        type: "Academic",
        description: "An opportunity for parents to meet with teachers and discuss their child's progress and development.",
        participants : "All parents and teachers are invited to attend."
      },
      {
        title: "Annual Sports Day",
        date: "April 10, 2025",
        time: "8:00 AM - 4:00 PM",
        location: "School Grounds",
        type: "Sports",
        description: "A day full of sports activities and competitions for students to showcase their athletic talents.",
        participants : "All students from grades 1 to 12 will participate."
      }
    ],
    past: [
      {
        title: "Science Fair 2024",
        date: "February 15, 2024",
        time: "10:00 AM - 2:00 PM",
        location: "School Hall",
        type: "Academic",
        description: "Students presented their science projects and experiments to the school community.",
        participants: "Students from grades 9 to 12 participated."
      }
    ]
  };

  const toggleReadMore = (index: number) => {
    setExpandedNewsIndex(expandedNewsIndex === index ? null : index);
  };

  return (
    <BackgroundWrapper>
      <div id="events" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">News & Events</h2>
          <p className="mt-4 text-xl text-gray-600 italic">Stay updated with school activities and announcements</p>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-inherit rounded-xl shadow-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800"
                  >
                    {expandedNewsIndex === index ? "Read Less" : "Read More"} {expandedNewsIndex === index ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                  </button>
                  {expandedNewsIndex === index && (
                    <div className="mt-4 text-gray-600">
                      <p>{item.fullContent}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Events Calendar</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 rounded-lg ${activeTab === "upcoming" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-4 py-2 rounded-lg ${activeTab === "past" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                Past Events
              </button>
            </div>
          </div>
          <hr className="my-8" />
          <div className="bg-inherit rounded-xl shadow-sm border p-6">
            {events[activeTab].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b last:border-0">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>{event.description}</p>
                    <p className="mt-2"><strong>Participants :</strong> {event.participants}</p>
                  </div>
                </div>
                <span className="mt-4 md:mt-0 px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default NewsAndEvents;