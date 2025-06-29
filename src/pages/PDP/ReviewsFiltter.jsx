import React from 'react';
import { Star, Check } from 'lucide-react';


const ReviewsFilter = ({ className = '' }) => {
  const ratings = [
    { stars: 5, count: 89 },
    { stars: 4, count: 42 },
    { stars: 3, count: 18 },
    { stars: 2, count: 7 },
    { stars: 1, count: 3 }
  ];

  const topics = [
    'Product Quality',
    'Seller Services',
    'Product Price',
    'Shipment',
    'Match with Description'
  ];

  return (
    <div className={`bg-white rounded-lg  border border-dashed border-gray-200 p-6 ${className}`}>
      <h3 className=" text-left text-lg font-semibold text-gray-900 mb-3">Reviews Filter</h3>
      
      {/* Rating Filter */}
      <div className="mb-8">
        <h4 className=" text-left text-sm font-medium text-gray-900 mb-4">Rating</h4>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <label key={rating.stars} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
              />
              <div className="relative">
                <div className="w-4 h-4 border-2 border-gray-300 rounded group-hover:border-blue-500 transition-colors duration-200"></div>
                <Check className="w-3 h-3 text-blue-600 absolute top-0.5 left-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <div className="flex items-center ml-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating.stars
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">{rating.stars}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Review Topics */}
      <div className='border-t border-dashed border-gray-200  '>
        <h4 className="text-left mt-5  text-sm font-medium text-gray-900 mb-4">Review Topics</h4>
        <div className="space-y-3">
          {topics.map((topic) => (
            <label key={topic} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
              />
              <div className="relative">
                <div className="w-4 h-4 border-2 border-gray-300 rounded group-hover:border-blue-500 transition-colors duration-200"></div>
                <Check className="w-3 h-3 text-blue-600 absolute top-0.5 left-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <span className="text-sm text-gray-700 ml-3 group-hover:text-gray-900 transition-colors duration-200">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsFilter;