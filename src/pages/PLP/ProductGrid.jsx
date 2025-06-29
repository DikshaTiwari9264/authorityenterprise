import React from 'react';
import { ProductCard } from './ProductCard';



export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
}