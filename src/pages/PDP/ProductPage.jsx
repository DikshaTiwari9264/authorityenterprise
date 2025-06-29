import React, { useState } from "react";
import {
  Share2,
  Star,
  Truck,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const images = [
    "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5480827/pexels-photo-5480827.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5480842/pexels-photo-5480842.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5480854/pexels-photo-5480854.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5480904/pexels-photo-5480904.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-full bg-white">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative group bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={images[selectedImage]}
            alt="Product"
            className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 space-y-2">
            <button className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorited ? "text-red-500 fill-red-500" : "text-gray-700"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex justify-between pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-gray-900"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
