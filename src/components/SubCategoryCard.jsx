import React from "react";

const SubCategoryCard = ({ title, image, description }) => {
  return (
    <div
      className="relative h-48 w-80 rounded-md shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80  to-blue-950/90 group-hover:bg-blue-950  transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-lg group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/90 text-sm mt-1 font-medium group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        <button className="mt-4 px-5 py-2 rounded-md bg-white/90 text-blue-900 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 cursor-pointer shadow-md hover:bg-blue-700 hover:text-white">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default SubCategoryCard;
