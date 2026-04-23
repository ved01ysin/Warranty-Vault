import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Search, Loader2, Package, Clock, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [stats, setStats] = useState({ total: 0, expiring: 0, expired: 0 });

  const fetchProducts = async () => {
    try {
      const { data } = await api.get(`/products?keyword=${keyword}`);
      setProducts(data.products);
      
      // Calculate stats
      const total = data.products.length;
      const expiring = data.products.filter(p => p.status === 'expiring soon').length;
      const expired = data.products.filter(p => p.status === 'expired').length;
      setStats({ total, expiring, expired });
      
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword]);

  return (
    <div className="container py-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">My Assets</h1>
        <p className="text-text-muted">Track and manage your digital warranties in one place.</p>
      </header>

      {/* Stats Section */}
      <div className="stats-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass stat-card">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Package size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Total Assets</span>
          </div>
          <div className="stat-value">{stats.total}</div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass stat-card">
          <div className="flex items-center justify-center gap-2 text-expiring">
            <Clock size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Expiring Soon</span>
          </div>
          <div className="stat-value">{stats.expiring}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass stat-card">
          <div className="flex items-center justify-center gap-2 text-expired">
            <AlertTriangle size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Expired</span>
          </div>
          <div className="stat-value">{stats.expired}</div>
        </motion.div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search assets by name..." 
            className="pl-10"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : products.length > 0 ? (
        <div className="dashboard-grid">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass p-12 text-center">
          <Package className="mx-auto mb-4 text-text-muted" size={48} />
          <h2 className="text-xl font-semibold mb-2">No assets found</h2>
          <p className="text-text-muted mb-6">Start by adding your first product to the vault.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
