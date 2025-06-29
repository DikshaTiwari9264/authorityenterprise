import React from "react";
import { Star } from "lucide-react";

const products = [
  {
    brand: "Whistle",
    price: "$26",
    title: "Wide Leg Cropped Jeans, Denim",
    rating: 4.8,
    sold: "1,238",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
  
  },
  {
    brand: "John Lewis ANYDAY",
    price: "$26",
    title: "Long Sleeve Utility Shirt, Navy, 6",
    rating: 4.8,
    sold: "1,238",
       image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    brand: "John Lewis ANYDAY",
    price: "$32",
    title: "Stripe Curved Hem Shirt, Blue",
    rating: 4.5,
    sold: "620",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    brand: "John Lewis ANYDAY",
    price: "$40",
    title: "Denim Overshirt, Mid Wash",
    rating: 4.6,
    sold: "238",
         image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    brand: "John Lewis",
    price: "$79",
    title: "Linen Blazer, Navy",
    rating: 4.8,
    sold: "1,238",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];
export default function RelatedProducts() {
  return (
    <div className="px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Related Product</h2>
        <button className="text-sm text-gray-600 underline hover:text-gray-900 cursor-pointer">View All</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col space-y-2">
            <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className=" text-left text-sm font-semibold text-gray-900">{product.brand}</p>
              <p className=" text-left text-sm font-bold text-gray-900">{product.price}</p>
              <p className="  text-left text-sm text-gray-600">{product.title}</p>
              <div className="flex items-center text-sm text-gray-700 mt-1">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400 mr-1" />
                {product.rating}
                <span className="ml-1 text-gray-500">· {product.sold} Sold</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
