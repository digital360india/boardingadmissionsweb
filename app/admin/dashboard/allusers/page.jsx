"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/firebase'; // Adjust the import according to your setup
import { collection, getDocs } from 'firebase/firestore';

const UserDetailDialog = ({ user, onClose }) => {
  if (!user) return null;
  console.log(user);

  const renderCoursePackages = (packages) => {
    return packages.map((pkg, index) => (
      <div key={index} className="border p-2 my-2">
        <p><strong>Package ID:</strong> {pkg.packageId}</p>
        <p><strong>Price:</strong> {pkg.price}</p>
        <p><strong>Date of Purchase:</strong> {new Date(pkg.dateOfPurchase?.seconds * 1000).toLocaleDateString()}</p>
        <p><strong>Date of Expiration:</strong> {new Date(pkg.dateOfExpiration?.seconds * 1000).toLocaleDateString()}</p>
      </div>
    ));
  };

  const renderTestPackages = (packages) => {
    return packages.map((pkg, index) => (
      <div key={index} className="border p-2 my-2">
        <p><strong>Package ID:</strong> {pkg.packageId}</p>
        <p><strong>Price:</strong> {pkg.price}</p>
        <p><strong>Date of Purchase:</strong> {new Date(pkg.dateOfPurchase?.seconds * 1000).toLocaleDateString()}</p>
        <p><strong>Date of Expiration:</strong> {new Date(pkg.dateOfExpiration?.seconds * 1000).toLocaleDateString()}</p>
      </div>
    ));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-auto overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <div className="mb-4">
          <img src={user.photoURL} alt="User Photo" className="w-24 h-24 rounded-full mb-4" />
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>

          <h3 className="font-semibold mt-4">Course Packages</h3>
          {user.mycoursepackages && user.mycoursepackages.length > 0 ? (
            renderCoursePackages(user.mycoursepackages)
          ) : (
            <p>No Course Packages</p>
          )}

          <h3 className="font-semibold mt-4">Test Packages</h3>
          {user.mytestpackages && user.mytestpackages.length > 0 ? (
            renderTestPackages(user.mytestpackages)
          ) : (
            <p>No Test Packages</p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (err) {
        setError('Failed to fetch users. Please try again.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDialog = () => {
    setSelectedUser(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="users-list p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <div
            key={user.id}
            className="user-card border rounded-lg p-4 shadow-lg cursor-pointer"
            onClick={() => handleUserClick(user)}
          >
            <h3 className="text-lg font-semibold">{user.displayName || 'No Name'}</h3>
            <p className="text-gray-700 mt-2">Email: {user.email || 'No Email'}</p>
          </div>
        ))}
      </div>
      {selectedUser && (
        <UserDetailDialog user={selectedUser} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default UsersPage;
