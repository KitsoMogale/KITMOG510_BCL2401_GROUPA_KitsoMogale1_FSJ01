'use client'
import { signOut } from 'firebase/auth';
import app  from '../firebaseConfig';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);
function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
    console.log('User signed out');
    if (typeof window !== "undefined") {
        localStorage.removeItem('name');
        localStorage.removeItem('surname');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="
        bg-red-500 text-white font-semibold py-2 px-4 rounded-md 
        hover:bg-red-600 transition duration-300 ease-in-out
        sm:px-6 sm:py-3 md:px-8 md:py-4 lg:text-lg
        w-full max-w-xs mx-auto sm:max-w-md md:max-w-lg
      "
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
