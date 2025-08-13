import React, { useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Handle drag logic based on mouse or touch position
  const updateSlider = (clientX) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = clientX - bounds.left;
    const percent = Math.max(0, Math.min(100, (x / bounds.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSlider(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) updateSlider(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    };

    const stopDragging = () => setIsDragging(false);

    // Attach global listeners when dragging starts
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="relative w-full max-w-4xl mx-auto h-64 overflow-hidden rounded-lg select-none cursor-ew-resize"
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image clipped by slider */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white"
        style={{ left: `${sliderPos}%` }}
        placeholder="drag"
      >
        <div className="h-full w-3 text-base bg-black -translate-x-1/2">
            <p className="py-28 text-white font-bold border radius-full">Drag</p> 
        </div>
      </div>
    </div>
  );
}

