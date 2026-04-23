import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { motion } from 'framer-motion';
import { Upload, ArrowLeft, Save } from 'lucide-react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    category: '',
    purchaseDate: '',
    warrantyPeriod: '',
    price: '',
    serialNumber: '',
    notes: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (file) data.append('invoice', file);

    try {
      await api.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-8 max-w-3xl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-text-muted hover:text-white mb-6">
        <ArrowLeft size={18} />
        Back to Dashboard
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass p-8">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Upload className="text-primary" />
          Add New Asset
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group md:col-span-2">
            <label>Product Name</label>
            <input name="productName" value={formData.productName} onChange={handleChange} required placeholder="e.g. MacBook Pro M3" />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input name="brand" value={formData.brand} onChange={handleChange} required placeholder="Apple" />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Appliances">Appliances</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Furniture">Furniture</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Purchase Date</label>
            <input name="purchaseDate" type="date" value={formData.purchaseDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Warranty Period (Months)</label>
            <input name="warrantyPeriod" type="number" value={formData.warrantyPeriod} onChange={handleChange} required placeholder="12" />
          </div>

          <div className="form-group">
            <label>Price ($)</label>
            <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="0.00" />
          </div>

          <div className="form-group">
            <label>Serial Number</label>
            <input name="serialNumber" value={formData.serialNumber} onChange={handleChange} placeholder="Optional" />
          </div>

          <div className="form-group md:col-span-2">
            <label>Upload Invoice (Image or PDF)</label>
            <div className="relative group">
              <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center group-hover:border-primary transition-colors">
                <Upload className="mx-auto mb-2 text-text-muted" size={32} />
                <p className="text-sm text-text-muted">
                  {file ? <span className="text-white font-medium">{file.name}</span> : 'Click or drag to upload invoice'}
                </p>
              </div>
            </div>
          </div>

          <div className="form-group md:col-span-2">
            <label>Notes</label>
            <textarea name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Any additional details..."></textarea>
          </div>

          <div className="md:col-span-2 mt-4">
            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              <Save size={18} />
              {loading ? 'Saving Asset...' : 'Save Asset'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProduct;
