import React, { useState } from 'react';
import { Menu, Grid, LayoutGrid } from 'lucide-react';

import { FilterSidebar } from './FilterSidebar';
import { ProductGrid } from './ProductGrid';
import { SortDropdown } from './SortDropdown';
import { Pagination } from './pagination';
import BreadCrumbs from './BreadCrumbs';


const mockProducts = [
  {
    id: '1',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: false
  },
  {
    id: '2',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: true
  },
  {
    id: '3',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: false
  },
  {
    id: '4',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: false
  },
  {
    id: '5',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: false
  },
  {
    id: '6',
    name: 'TDX Stinkers',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 675,
    rating: 4.5,
    reviewCount: 121,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFavorite: true
  }
];

export function ProductListing() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Clothes' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
       
        <BreadCrumbs items={breadcrumbItems} />
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <Menu className="h-4 w-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>

              {/* View Toggle - Desktop Only */}
              <div className="hidden md:flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-1">
                <button className="p-2 bg-blue-600 text-white rounded-md">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {/* Product Grid */}
            <ProductGrid products={mockProducts} />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}