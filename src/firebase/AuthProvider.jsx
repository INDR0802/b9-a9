import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "./firebase.init";
import toast from "react-hot-toast";

export let AuthContext = createContext(null);

let googleProvider = new GoogleAuthProvider();
let githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  
  let googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  let githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(Auth, githubProvider);
  };

  let updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    updateProfile(Auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("updated profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let createUser = (email, password, displayName, photo) => {
    setLoading(true);
    createUserWithEmailAndPassword(Auth, email, password).then(({ user }) => {
      updateUserProfile(displayName, photo);
      user
        ? toast.success(`${user.displayName || "user"} signed in`)
        : toast.error("an error occurred while creating");
    });
  };

  let signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  let signout = () => {
    setUser(null);
    signOut(Auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  let authInfo = {
    googleSignIn,
    githubSignIn,
    user,
    signout,
    createUser,
    updateUserProfile,
    signin,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
