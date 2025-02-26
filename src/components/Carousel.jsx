import { useState, useEffect } from "react";

export default function Carousel({ places }) {
  const itemsPerSlide = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = Math.ceil(places.length / itemsPerSlide);
  const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % totalSlides;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div 
      className="relative flex items-center justify-center bg-black mt-20 mb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-center overflow-hidden w-full p-">
        <div className="hidden sm:w-1/4 sm:grid grid-cols-2 sm:justify-between items-center sm:gap-3 scale-70 translate-x-20 bg-blue-900 rounded-lg p-3 opacity-15">
          {places
            .slice(prevIndex * itemsPerSlide, prevIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="w-full h-60 object-cover rounded-lg"
              />
            ))}
        </div>
        <div className="w-full sm:w-1/2 gap-3 grid grid-cols-1 relative z-0 bg-blue-900 rounded-lg p-3 sm:grid-cols-2 ">
          {places
            .slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="w-full h-45 sm:h-80 sm:w-200 object-cover rounded-lg"
              />
            ))}
        </div>
        <div className="hidden sm:w-1/4 sm:grid grid-cols-2 sm:justify-between items-center sm:gap-3 scale-70 -translate-x-20 bg-blue-900 rounded-lg p-3 opacity-15">
          {places
            .slice(nextIndex * itemsPerSlide, nextIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="w-full h-60 object-cover rounded-lg"
              />
            ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white sm:hover:bg-blue-900 left-4 top-1/2 bg-gray-300/60 scale-140 sm:bg-blue-50/10"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white sm:hover:bg-blue-900 right-4 top-1/2 bg-gray-300/60 scale-140 sm:bg-blue-50/10"
      >
        ▶
      </button>
      <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-10 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-900" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}




