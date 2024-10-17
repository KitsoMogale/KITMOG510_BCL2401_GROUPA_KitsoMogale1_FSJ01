'use client';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import app from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { redirect, useRouter } from 'next/navigation'; // Optional, for redirecting
import { useAuth } from '../Authcontext';

const auth = getAuth(app);

function LogoutButton() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const route = useRouter();
  const { user,logout} = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      setIsLoggedOut(true);

      if (typeof window !== "undefined") {
        localStorage.removeItem('name');
        localStorage.removeItem('surname');
        localStorage.setItem('isLoggedIn', false);
        logout()
        route.push('/')
      }
    } catch (error) {
      console.error('Error during sign out', error);
    }
  };

  return (
    <div
      className="
        flex items-center justify-center
        max-h-screen my-8
      "
    >
      <button
        onClick={handleLogout}
        className={`
          ${isLoggedOut ? 'bg-green-500' : 'bg-red-500'} 
          text-white font-semibold py-2 px-4 rounded-md 
          hover:${isLoggedOut ? 'bg-green-600' : 'bg-red-600'} 
          transition duration-300 ease-in-out
          sm:px-6 sm:py-3 md:px-8 md:py-4 lg:text-lg
          w-fit max-w-xs sm:max-w-md md:max-w-lg
        `}
        disabled={isLoggedOut} // Disable the button after logout
      >
        {isLoggedOut ? 'Successfully Logged Out' : 'Log Out'}
      </button>
    </div>
  );
}

export default LogoutButton;
