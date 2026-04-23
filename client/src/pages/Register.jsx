import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass auth-card"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Join WarrantyVault</h1>
        
        {error && (
          <div className="bg-expired/10 border border-expired/20 text-expired p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              name="name"
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              name="email"
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              name="password"
              type="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              placeholder="••••••••"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              name="confirmPassword"
              type="password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
