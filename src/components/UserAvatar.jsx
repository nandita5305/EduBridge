// src/components/UserAvatar.jsx (or wherever you prefer)
import React from 'react';

/**
 * Renders a circular avatar with the first initial of the user's name.
 * Assumes the user object is stored in localStorage under the key 'user'
 * and has a 'name' property (e.g., { name: 'Rahul', ... }).
 */
const UserAvatar = () => {
  // 1. Get user data from localStorage
  const userString = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  
  let initial = '?';

  if (userString) {
    try {
      const user = JSON.parse(userString);
      if (user && user.name) {
        // 2. Extract the first letter and capitalize it
        initial = user.name.trim().charAt(0).toUpperCase();
      }
    } catch (e) {
      console.error("Error parsing user data from localStorage:", e);
      // Fallback initial
    }
  }

  // 3. Render the styled circle with the initial
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary-500)', // Use your primary color for background
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        userSelect: 'none', // Prevents initial from being selected
      }}
      title={userString ? JSON.parse(userString).name : 'User'}
    >
      {initial}
    </div>
  );
};

export default UserAvatar;