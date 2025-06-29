import React from 'react';
import { Star } from 'lucide-react';


const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviewCount 
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;