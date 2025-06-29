import React, { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Truck,
} from "lucide-react";

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("khaki");
  //   const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "khaki", value: "#8B7355", label: "Khaki" },
    { name: "navy", value: "#1B365D", label: "Navy" },
    { name: "black", value: "#000000", label: "Black" },
  ];

  //   const handleQuantityChange = (delta) => {
  //     setQuantity(Math.max(1, quantity + delta));
  //   };

  return (
    <div className="space-y-6">
      <div>
        <p className=" text-left text-sm text-gray-600 mb-2">
          John Lewis ANYDAY
        </p>
        <h1 className=" text-left text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Long Sleeve Overshirt, Khaki, 6
        </h1>
        <div className="flex items-center  justify-between space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg text-gray-500 line-through">£40.00</span>
            <span className="text-2xl font-bold text-gray-900">£28.00</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>1,238 Sold</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">4.5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className=" text-left text-lg font-semibold text-gray-900 mb-3">
          Description:
        </h3>
        <p className="text-gray-600 leading-relaxed text-left">
          Boba etiam ut nulla teat est potus directus singuam compositione
          saporum et textuum, quae in Taiwan annie 1980 orta sunt. Boba refert
          ad plas masticae tapiocae in fundo potus inventae, quae typicos lacte
          tea nigro sapuirtur. Boba phaenomenon...
          {showFullDescription && (
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          )}
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-gray-900 font-medium hover:underline ml-1"
          >
            {showFullDescription ? "See Less..." : "See More..."}
          </button>
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-left ">
          Color: <span className="font-normal">{selectedColor}</span>
        </h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-10 h-10 rounded-lg border-2 cursor-pointer transition-all ${
                color.selected
                  ? "border-gray-900 scale-110"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Size: <span className="font-normal">{selectedSize}</span>
          </h3>
          <button className=" cursor-pointer text-sm text-gray-600 hover:text-gray-900 underline">
            View Size Chart
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 px-4 cursor-pointer border rounded-lg font-medium transition-all ${
                selectedSize === size
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className=" cursor-pointer w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Add To Cart</span>
        </button>
        <button className=" cursor-pointer w-full border border-gray-300 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Checkout Now
        </button>
      </div>
      <div className=" text-gray-600 hover:text-gray-900 underline text-left space-x-2 text-sm font-semi-bold pt-4 cursor-pointer">
        <span>Delivery T&C</span>
      </div>
    </div>
  );
};
export default ProductInfo;
