import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Outer Ring */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-purple-500 animate-spin"></div>

        {/* Inner Glow Ring */}
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-l-transparent border-pink-400 animate-[spin_1.5s_linear_infinite]"></div>

        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-700/50"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
