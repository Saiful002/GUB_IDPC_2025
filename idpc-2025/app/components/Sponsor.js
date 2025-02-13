"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Sponsor = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sponsors = [
    "https://www.bssnews.net/assets/news_photos/2024/02/03/image-171581-1706971936.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMvtLh5p1r2dc8_GI82Ytu9mRZj2IyM0X74fcSU96mjNp4_jk4CBd2DdzJigQnB8nYTOpyZleMRdYPdNhQdfyQAfuLO0ORr10m68w6y0GNd-FbP_5O76LLuE5kMWsJn-2wm9bo_lE94ZbG/s1600/bangla-vision.jpg",
    "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2013/05/GBU.jpg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
  ];

  const totalSlides = sponsors.length;

  // Handle resizing and determine if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Update the slider transform based on screen size
  const sliderStyle = {
    transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
    transition: "transform 0.5s ease",
  };

  // Handle the next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handle the previous slide
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:mt-64 text-white">
      <div className="my-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Our Partners</h2>
          <p className="mt-2 text-lg">The driving force behind every step forward.</p>
        </div>

        {/* Image Slider Container */}
        <div className="relative mx-auto mt-10 overflow-hidden">
          <div id="sliderWrapper" className="flex" style={sliderStyle}>
            {sponsors.map((image, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-2"
              >
                <Image
                  src={image}
                  className="w-full h-64 object-contain rounded-lg"
                  alt={`Sponsor ${idx + 1}`}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full text-gray-700"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full text-gray-700"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
