import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Fullscreen } from "lucide-react";

const images = [
  "/images/bga1.png",
  "/images/bga2.png",
  "/images/banner4.png",
  "/images/banner3.png"
];

function ImageSlider({
  autoPlay = true,
  interval = 5000,
  height = "500px",
  showControls = true,
  showThumbnails = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef(null);
  const sliderRef = useRef(null);

  // Auto play logic
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, interval]);

  // Fullscreen listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const togglePlayPause = () => setIsPlaying((p) => !p);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      sliderRef.current.requestFullscreen().catch((err) =>
        console.error("Fullscreen error:", err)
      );
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={sliderRef}
      className={`relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-900 group pt-16 ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
      style={{ height: isFullscreen ? "100vh" : height }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => autoPlay && setIsPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            <div className="absolute bottom-20 left-10 text-white max-w-md">
              <h2 className="text-3xl font-bold mb-2">Amazing Slide {currentIndex + 1}</h2>
              <p className="text-lg">Discover our exclusive collection and special offers</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showControls && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Controls bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 rounded-full px-4 py-2 backdrop-blur-sm">
        <button onClick={togglePlayPause} className="text-white hover:text-blue-300">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-white scale-125 shadow-md"
                  : "bg-gray-400 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>
        <button onClick={toggleFullscreen} className="text-white hover:text-blue-300">
          <Fullscreen size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-12 rounded-md overflow-hidden border-2 ${
                index === currentIndex
                  ? "border-white scale-110 shadow-lg"
                  : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
