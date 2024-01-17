// Carousel.js
import React, { useState, useEffect } from 'react';

const Carosal = ({ images, texts,texts1, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="relative lg:h-[500px] h-[270px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity  duration-1000 transform ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="text-white sm:m-10 sm:mt-[150px] ml-3 mt-10 font-mont">
            <h2 className="sm:text-[60px] text-2xl sm:font-extrabold font-bold font-mont">{texts[index]}</h2>
              <h2 className="sm:text-[60px] sm:mt-6 mt-2  text-2xl sm:font-extrabold font-bold font-mont">{texts1[index]}</h2>
              <button
                onClick={nextSlide}
                className="bg-red-500 hover:bg-white text-white hover:text-black sm:mt-6 mt-2 font-semibold sm:font-bold sm:py-4 py-2 px-6 sm:px-10 mx-2 rounded-full"
              >
                Contact Us
              </button>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carosal;
