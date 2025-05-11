import type React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import ManageStores from '../components/ManageStores';
import ManageDeals from '../components/ManageDeals';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  if (!user) {
    return <Navigate to="/admin-login" />;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-uniforma mb-4">Welcome, {user}</h1>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded mb-6"
      >
        Logout
      </button>
      <ManageStores />
      <ManageDeals />
    </div>
  );
};

export default AdminDashboard;
