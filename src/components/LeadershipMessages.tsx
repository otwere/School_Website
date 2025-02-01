import React, { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";

const LeadershipMessages = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const staffMessages = [{
    author: "Dr. Sarah Johnson",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    message: "Our commitment to excellence goes beyond academic achievement. We strive to nurture well-rounded individuals who will become tomorrow's leaders and innovators.",
    bgColor: "from-blue-600 to-indigo-600"
  }, {
    author: "Mr. David Kimani",
    role: "Deputy Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    message: "Through our comprehensive CBC curriculum and various extra-curricular activities, we ensure that every student discovers and develops their unique talents.",
    bgColor: "from-purple-600 to-blue-600"
  }];

  const parentMessages = [{
    author: "Mrs. Jane Wanjiku",
    role: "Parent Representative",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
    message: "As parents, we're proud to be part of a school community that values both academic excellence and character development. The partnership between parents and teachers creates a strong foundation for our children's success.",
    bgColor: "from-teal-500 to-emerald-500"
  }, {
    author: "Mr. Thomas Omondi",
    role: "PTA Chairperson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    message: "Our active involvement in school activities ensures that we contribute to creating an enriching learning environment. Together with the school administration, we work towards continuous improvement of our children's educational journey.",
    bgColor: "from-cyan-500 to-blue-500"
  }];

  const studentMessages = [{
    author: "James Mwangi",
    role: "Student President",
    class: "Grade 4",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
    message: "Being part of this school has helped me grow not just in academics, but as a leader. We work together to make our school better every day!",
    bgColor: "from-pink-500 to-orange-400"
  }, {
    author: "Mary Njeri",
    role: "Vice President",
    class: "Grade 4",
    image: "https://images.unsplash.com/photo-1519098901909-b1553a1190af",
    message: "Our school gives us opportunities to lead and learn. Together with my fellow students, we organize events that make learning fun!",
    bgColor: "from-orange-400 to-yellow-300"
  }, {
    author: "Peter Kamau",
    role: "Sports Captain",
    class: "Grade 3",
    image: "https://images.unsplash.com/photo-1548515425-f36584938c24",
    message: "Sports and studies go hand in hand here. We learn teamwork and discipline through our activities!",
    bgColor: "from-green-400 to-emerald-500"
  }];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % studentMessages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, studentMessages.length]);

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % studentMessages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + studentMessages.length) % studentMessages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
  };

  const MessageCard = ({ message, index }: { message: any; index: number }) => (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${message.bgColor} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-4 border-white shadow-lg">
              <img src={message.image} alt={message.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{message.author}</h3>
              <p className="text-gray-600">{message.role}</p>
            </div>
          </div>
          <div className="relative">
            <Quote className="w-8 h-8 text-gray-200 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
            <p className="text-gray-700 italic pl-6">
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full -top-20 -left-20 opacity-20"></div>
        <div className="absolute w-96 h-96 bg-pink-100 rounded-full -bottom-32 -right-32 opacity-20"></div>
        <div className="absolute top-1/4 left-10 transform -rotate-12">
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-30" />
        </div>
        <div className="absolute bottom-1/4 right-10 transform rotate-12">
          <Star className="w-8 h-8 text-purple-400 opacity-30" />
        </div>
      </div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Leadership Voices
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic font-sans">
            Inspiring words from our school community
          </p>
        </div>

        {/* Staff Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {staffMessages.map((message, index) => (
            <MessageCard key={index} message={message} index={index} />
          ))}
        </div>

        {/* Parent Messages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Parent Representatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentMessages.map((message, index) => (
              <MessageCard key={index} message={message} index={index} />
            ))}
          </div>
        </div>

        {/* Student Messages */}
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Student Leaders Speak
          </h3>
          <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50"></div>
            <div className="relative p-8">
              <div className="transition-all duration-500 transform">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img src={studentMessages[activeSlide].image} alt={studentMessages[activeSlide].author} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold">
                    {studentMessages[activeSlide].author}
                  </h4>
                  <p className="text-purple-600">
                    {studentMessages[activeSlide].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {studentMessages[activeSlide].class}
                  </p>
                  <p className="mt-6 text-gray-700 italic">
                    {studentMessages[activeSlide].message}
                  </p>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 transform -translate-x-1/2">
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 transform translate-x-1/2">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {studentMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "bg-purple-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;