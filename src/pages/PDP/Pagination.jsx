import React from 'react';
import { ChevronRight } from 'lucide-react';



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Show current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }
    
    // Always show last page if it's not already included
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className="px-3 py-2 text-gray-500">
              ...
            </span>
          );
        }
        
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}
      
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Pagination;