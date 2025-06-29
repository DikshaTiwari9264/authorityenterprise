import React from 'react';
import { Star, ThumbsDown, ThumbsUp,  } from 'lucide-react';
const ReviewItem= ({ review }) => {
  return (
    <div className="bg-white  p-6 border-b border-dashed border-gray-200 last:border-b-0" >
      {/* Rating Stars */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < review.rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {/* Review Text */}
      <p className="text-left text-gray-900 font-medium mb-2">{review.text}</p>
      {/* Date */}
      <p className=" text-left text-sm text-gray-500 mb-4">{review.date}</p>

      {/* User Info and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={review.user.avatar}
            alt={review.user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900 ml-3">
            {review.user.name}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border rounded-xl px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-medium">{review.likes}</span>
          </button>
          <button className="flex items-center border rounded-xl px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <ThumbsDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;