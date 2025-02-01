import React, { useState } from "react";
import { X } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleries = [{
    title: "School Events",
    images: [{
      url: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
      caption: "Annual Sports Day"
    }, {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      caption: "Science Fair Exhibition"
    }, {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      caption: "Cultural Day Celebrations"
    }]
  }, {
    title: "Campus Life",
    images: [{
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      caption: "Library"
    }, {
      url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
      caption: "Science Lab"
    }, {
      url: "https://images.unsplash.com/photo-1557223562-6c77ef16210f",
      caption: "School Bus"
    }]
  }];
  return <BackgroundWrapper variant="white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Photo Gallery</h2>
          <p className="mt-4 text-xl text-gray-600">
            Capturing moments and memories
          </p>
        </div>
        {galleries.map((gallery, index) => <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{gallery.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gallery.images.map((image, imageIndex) => <div key={imageIndex} className="group relative overflow-hidden rounded-xl cursor-pointer" onClick={() => setSelectedImage(image.url)}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={image.url} alt={image.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {image.caption}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>)}
        {/* Image Modal */}
        {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-gray-300">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Gallery" className="max-w-full max-h-[90vh] object-contain" />
          </div>}
      </div>
    </BackgroundWrapper>;
};
export default PhotoGallery;