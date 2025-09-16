import React from "react";

function NoProducts({ keyword }) {
  return (
    <div className="flex items-center justify-center min-h-[400px] px-4">
      <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md">
        
        {/* Icon */}
        <div className="text-5xl mb-4 animate-bounce">
          ⚠️
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          No Products Found
        </h3>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {keyword ? (
            <>
              We couldn’t find any products matching{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                "{keyword}"
              </span>
              . Try using different keywords or browse our complete catalog.
            </>
          ) : (
            "No products are available. Please check back later."
          )}
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
          Browse Catalog
        </button>
      </div>
    </div>
  );
}

export default NoProducts;

