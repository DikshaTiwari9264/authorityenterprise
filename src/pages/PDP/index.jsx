import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProduct";
import ProductReviews from "./ProductReview";
import Header from "./Header";
import ProductPage from "./ProductPage";
import ReviewsFilter from "./ReviewsFiltter";
import ReviewsList from "./ReviewsList";
const PDP = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Breadcrumbs />
        {/* Product Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductPage />
            <ProductInfo />
          </div>
        </main>
        {/* Related Products */}
        <RelatedProducts title="Related Products" />
        {/* Product Reviews */}
        <ProductReviews />
        <div className=" mt-5 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filter */}
          <div className="hidden lg:block lg:col-span-1">
            <ReviewsFilter />
          </div>
          {/* Mobile Filter Overlay */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setShowMobileFilter(false)}
              />
              <div className="absolute inset-y-0 left-0 w-80 bg-white shadow-xl">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Filters
                    </h3>
                    <button
                      onClick={() => setShowMobileFilter(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <ReviewsFilter />
                </div>
              </div>
            </div>
          )}
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ReviewsList
              onFilterToggle={() => setShowMobileFilter(true)}
              showFilterButton={true}
            />
          </div>
        </div>
        {/* Popular This Week */}
        <RelatedProducts title="Popular This Week" />
      </div>
    </>
  );
};

export default PDP;
