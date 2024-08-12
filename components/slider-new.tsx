import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import the images
import img1 from "@/assets/slider_img/new-slider/img1.jpeg";
import img2 from "@/assets/slider_img/new-slider/img2.jpg";
import img3 from "@/assets/slider_img/new-slider/img3.jpeg";

import leftA from "@/assets/left.svg";
import rightA from "@/assets/right.svg";

const images = [img1, img2, img3];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const resetProgress = () => {
    setProgress(0);
    setTimeout(() => setProgress(2), 100); // Ensure smooth transition
  };

  //   useEffect(() => {
  //     startSlider();
  //     const progressInterval = setInterval(() => {
  //       setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
  //     }, 100);

  //     return () => {
  //       clearInterval(intervalRef.current!);
  //       clearInterval(progressInterval);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (progress === 0) {
  //       setProgress(2);
  //     }
  //   }, [currentIndex]);

  const nextSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((currentIndex + 1) % images.length);
    resetProgress();
    startSlider();
  };

  const prevSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    resetProgress();
    startSlider();
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-8">
        <button onClick={prevSlide} className="px-1 rounded">
          <Image src={leftA} alt="" className="w-8 h-8" />
        </button>
        <button onClick={nextSlide} className="bx-2 rounded">
          <Image src={rightA} alt="" className="w-8 h-8" />
        </button>
      </div>
      {/* <div className="absolute top-[98px] left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500"
          style={{
            width: `${progress}%`,
            transition: "width 100ms linear",
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default Slider;
