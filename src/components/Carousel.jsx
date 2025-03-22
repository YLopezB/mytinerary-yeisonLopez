import { useState, useEffect } from "react";

export default function Carousel({ places }) {
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 4);
    };
  
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

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
    <>
    <div className="text-center p-5"> 
      <h2 className="text-white text-3xl">Popular Cities</h2>
    </div>    
    <div 
      className="relative flex items-center justify-center bg-black mb-20 w-full h-70 sm:h-130"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-center overflow-hidden p-5">
        <div className="absolute hidden sm:grid grid-cols-2 sm:gap-1 -translate-y-1/2 top-1/2 left-20 bg-black opacity-40">
          {places
            .slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="h-12 w-25 object-cover 2xl:h-15 2xl:w-30"
              />
            ))}
        </div>
        <div className="sm:absolute gap-3 grid grid-cols-1 z-1 bg-black p-1 sm:grid-cols-2">
          {places
            .slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="h-60 w-110 object-cover rounded-lg 2xl:w-140"
              />
            ))}
        </div>
        <div className="absolute hidden sm:grid grid-cols-2 sm:gap-1 -translate-y-1/2 top-1/2 right-20 bg-black opacity-40">
          {places
            .slice(nextIndex * itemsPerSlide, nextIndex * itemsPerSlide + itemsPerSlide)
            .map((place, index) => (
              <img
                key={index}
                src={place.url}
                alt={place.name}
                className="h-12 w-25 object-cover 2xl:h-15 2xl:w-30"
              />
            ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white sm:hover:bg-blue-900 left-4 top-1/2 bg-gray-300/60 scale-140 sm:bg-blue-50/10 z-20"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white sm:hover:bg-blue-900 right-4 top-1/2 bg-gray-300/60 scale-140 sm:bg-blue-50/10 z-20"
      >
        ▶
      </button>
      <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 sm:w-10 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-900" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
    </>
  );
}

/*

*/ 


