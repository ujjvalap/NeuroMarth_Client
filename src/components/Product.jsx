import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="block text-inherit no-underline"
    >
      <div className="flex flex-col bg-white rounded-xl shadow-md w-64 mx-auto hover:shadow-lg transition-transform transform hover:-translate-y-1">
        {/* Product Image */}
        <img
          src={product.image[0]?.url}
          alt={product.name}
          className="w-full h-48 object-contain rounded-t-xl"
        />

        {/* Product Details */}
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-indigo-600 font-bold text-md mt-2">
            Price: ₹{product.price}/-
          </p>

          {/* Ratings */}
          <div className="flex items-center justify-center mt-2">
            <Rating
              value={product.ratings}
              onRatingChange={handleRatingChange}
              disabled={true}
            />
            <span className="ml-2 text-gray-600 text-sm">
              ({product.numOfReviews}{" "}
              {product.numOfReviews === 1 ? "Review" : "Reviews"})
            </span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
