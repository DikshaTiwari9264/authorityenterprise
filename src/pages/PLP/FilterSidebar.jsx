import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

export function FilterSidebar({ isOpen, onClose }) {
  const [selectedCategories, setSelectedCategories] = useState(['Nike']);
  const [priceRange, setPriceRange] = useState([20000, 50000]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const categories = [
    { name: 'Nike', count: 631 },
    { name: 'Adidas', count: 412 },
    { name: 'Apple', count: 203 },
    { name: 'Puma', count: 158 }
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const RatingStars = ({ count, filled = false }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count 
              ? filled ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
              : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              ×
            </button>
          </div>

          {/* Advanced Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-gray-900">Filter</h3>
            <span className="text-sm text-gray-500">Advanced</span>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Category</h4>
            
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search brand..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Options */}
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => toggleCategory(category.name)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{category.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Price</h4>
            
            {/* Price Range Display */}
            <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>

            {/* Price Range Slider */}
            <div className="relative">
              <input
                type="range"
                min="10000"
                max="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹10,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Rating</h4>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => toggleRating(rating)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <div className="ml-3">
                    <RatingStars count={rating} filled={selectedRatings.includes(rating)} />
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}