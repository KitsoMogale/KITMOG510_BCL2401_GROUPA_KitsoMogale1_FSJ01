'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const WithAuth = (Component) => {
   
  return function AuthenticatedComponent(props) {
    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (!user) {
          router.push('/auth'); // Redirect to login page if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <Component {...props} />;
  };
};

export default WithAuth;
