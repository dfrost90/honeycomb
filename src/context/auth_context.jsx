import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  getRedirectResult,
  signInWithPopup,
} from 'firebase/auth';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const userSignInWithRedirect = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      toast.success(`Hello ${user.displayName}`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const userSignIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Welcome back ${user.email}`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const userSignUp = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success(`Welcome ${user.email}`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const userSignOut = async () => {
    try {
      await signOut(auth);
      toast.info('Signing out...');
    } catch (error) {
      toast.error(error.code);
    }
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        userSignUp,
        userSignIn,
        userSignOut,
        userSignInWithRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
