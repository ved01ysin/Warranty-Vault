import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="glass product-card block no-underline text-inherit group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {product.productName}
          </h3>
          <p className="text-sm text-text-muted">{product.brand}</p>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Tag size={16} />
          <span>{product.category}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Calendar size={16} />
          <span>Expires: {new Date(product.expiryDate).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <span className="text-xl font-bold">${product.price}</span>
        <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          View Details
          <ChevronRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
