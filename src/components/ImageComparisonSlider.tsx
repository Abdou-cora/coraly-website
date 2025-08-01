import React, { useEffect, useRef, useState } from 'react';

export default function ImageComparisonSlider() {
    
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update slider value on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const bounds = containerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = (x / bounds.width) * 100;
      setSliderValue(Math.min(100, Math.max(0, percentage)));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 select-none"
    >
      {/* After Image (bottom layer) */}
      <img
        src="/images/floor-plan-after.webp"
        alt="After enhancement"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (top layer with clipping) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
      >
        <img
          src="/images/floor-plan-before.webp"
          alt="Before enhancement"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderValue}%` }}
        onMouseDown={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
        2D Plan
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
        3D Plan
      </div>
    </div>
  );
}
