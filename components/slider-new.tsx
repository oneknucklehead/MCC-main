import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import the images
// import img1 from "@/assets/slider_img/new-slider/img1.jpeg";
// import img2 from "@/assets/slider_img/new-slider/img2.jpg";
// import img3 from "@/assets/slider_img/new-slider/img3.jpeg";

import img1 from "@/assets/slider_img/new-slider/img (1).jpg";
import img2 from "@/assets/slider_img/new-slider/img (2).jpg";
import img3 from "@/assets/slider_img/new-slider/img (3).jpg";
import img4 from "@/assets/slider_img/new-slider/img (4).jpg";
import img5 from "@/assets/slider_img/new-slider/img (5).jpg";
import img6 from "@/assets/slider_img/new-slider/img (6).jpg";
import img7 from "@/assets/slider_img/new-slider/img (7).jpg";
import img8 from "@/assets/slider_img/new-slider/img (8).jpg";
import img9 from "@/assets/slider_img/new-slider/img (9).jpg";
import img10 from "@/assets/slider_img/new-slider/img (10).jpg";
import img11 from "@/assets/slider_img/new-slider/img (11).jpg";
import img12 from "@/assets/slider_img/new-slider/img (12).jpg";
import img13 from "@/assets/slider_img/new-slider/img (13).jpg";
import img14 from "@/assets/slider_img/new-slider/img (14).jpg";
import img15 from "@/assets/slider_img/new-slider/img (15).jpg";
import img16 from "@/assets/slider_img/new-slider/img (16).jpg";
import img17 from "@/assets/slider_img/new-slider/img (17).jpg";
import img18 from "@/assets/slider_img/new-slider/img (18).jpg";
import img19 from "@/assets/slider_img/new-slider/img (19).jpg";
import img20 from "@/assets/slider_img/new-slider/img (20).jpg";

import leftA from "@/assets/left.svg";
import rightA from "@/assets/right.svg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

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
    <div className="relative w-full h-[85vh] overflow-hidden">
      <div className="flex items-center w-full h-full">
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
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-[48%] flex space-x-8">
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
