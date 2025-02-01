import React, { useEffect, useState } from "react";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title: "Nurturing Tomorrow's Leaders",
    description: "Providing quality education through the CBC curriculum"
  }, {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    title: "Excellence in Education",
    description: "Developing well-rounded individuals through comprehensive learning"
  }, {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    title: "Innovation & Tradition",
    description: "Blending modern teaching methods with traditional values"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <div className="w-full h-screen relative mt-16">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>)}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default Hero;