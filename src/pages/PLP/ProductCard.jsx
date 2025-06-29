import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

export function ProductCard({
  // id,
  name,
  description,
  price,
  rating,
  reviewCount,
  image,
  isFavorite = false
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const RatingStars = () => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              favorite 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-red-500'
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-gray-900">
            ₹ {price.toLocaleString()}.00
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <RatingStars />
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
}