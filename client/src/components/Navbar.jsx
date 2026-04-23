import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, LogOut, LayoutDashboard, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="glass sticky top-0 z-50 rounded-none border-t-0 border-x-0">
      <div className="container nav-container">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary nav-link">
          <ShieldCheck size={28} />
          <span>WarrantyVault</span>
        </Link>

        {user ? (
          <div className="nav-links">
            <Link to="/" className="nav-link flex items-center gap-1">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link to="/add-product" className="nav-link flex items-center gap-1">
              <PlusCircle size={18} />
              <span>Add Asset</span>
            </Link>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <span className="text-sm font-medium">{user.name}</span>
              <button onClick={handleLogout} className="text-text-muted hover:text-expired transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn-primary">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
