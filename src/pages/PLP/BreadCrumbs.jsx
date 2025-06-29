import { ChevronRight } from "lucide-react"
import React from 'react';
const BreadCrumbs = ({items}) => {
  return (
 <>
  <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
          {item.href ? (
            <a href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-400">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
 </>
  )
}
export default BreadCrumbs