import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";
const Leadership = () => {
  const staff = [{
    name: "Dr. Sarah Johnson",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  }, {
    name: "Mr. David Kimani",
    role: "Deputy Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  }, {
    name: "Mrs. Emily Omondi",
    role: "Head of Academics",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd"
  }];
  const students = [{
    name: "James Mwangi",
    role: "Student President",
    class: "Grade 4",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71"
  }, {
    name: "Mary Njeri",
    role: "Vice President",
    class: "Grade 4",
    image: "https://images.unsplash.com/photo-1519098901909-b1553a1190af"
  }];
  return <BackgroundWrapper>
      <div id="leadership" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-400 inline-block font-sans">Our Leadership</h2>
          <p className="mt-4 text-xl text-gray-600 italic font-sans">
            Meet the Dedicated Team guiding Our Institution
          </p>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Staff Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Student Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {students.map((student, index) => <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-xl font-semibold">{student.name}</h4>
                <p className="text-gray-600">{student.role}</p>
                <p className="text-gray-500">{student.class}</p>
              </div>)}
          </div>
        </div>
      </div>
    </BackgroundWrapper>;
};
export default Leadership;