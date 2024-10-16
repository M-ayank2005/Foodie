// app/context/AuthContext.js
'use client';
import { useContext, createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { 
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase'; 

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-In Successful", result.user);
      router.push('/');
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const emailSignUp = async (email, password, displayName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      setUser({ ...userCredential.user, displayName });
      router.push('/');
    } catch (error) {
      console.error("Error signing up with email and password: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const emailSignIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (error) {
      console.error("Error signing in with email and password: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, googleSignIn, emailSignUp, emailSignIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};