import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Women', href: '#' },
    { label: 'Overshirts', href: '#' },
    { label: 'Long Sleeve Overshirt', href: '#', current: true }
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
              <a
                href={breadcrumb.href}
                className={breadcrumb.current 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              >
                {breadcrumb.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;