import React, { useState } from "react";
import { Filter } from "lucide-react";
import ReviewItem from "./ReviewItem";
import Pagination from "./Pagination";

const ReviewsList = ({ onFilterToggle, showFilterButton = false }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    { id: "all", label: "All Reviews" },
    { id: "photo", label: "With Photo & Video" },
    { id: "description", label: "With Description" },
  ];

  const reviews = [
    {
      id: "1",
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 2, 2020 03:29 PM",
      user: {
        name: "Darnell Steward",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      },
      likes: 128,
      replies: 0,
    },
    {
      id: "2",
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 2, 2020 1:04 PM",
      user: {
        name: "Darlene Robertson",
        avatar:
          "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      },
      likes: 82,
      replies: 0,
    },
    {
      id: "3",
      rating: 5,
      text: "This is amazing product I have.",
      date: "June 26, 2020 10:03 PM",
      user: {
        name: "Kathryn Murphy",
        avatar:
          "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      },
      likes: 9,
      replies: 0,
    },
    {
      id: "4",
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 7, 2020 10:14 AM",
      user: {
        name: "Ronald Richards",
        avatar:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      },
      likes: 124,
      replies: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg ">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Review Lists</h2>
          {showFilterButton && (
            <button
              onClick={onFilterToggle}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` cursor-pointer px-4 py-2 rounded-md text-sm font-medium border transition-all duration-200
        ${
          activeTab === tab.id
            ? "bg-gray-100 text-gray-900 border-gray-300 shadow-sm"
            : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
        }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="p-6">
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={19}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default ReviewsList;
