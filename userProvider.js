"use client";
import React, { createContext, useState, useEffect } from "react";
import { auth, db, onAuthStateChanged } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";  
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";  

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, `users/${currentUser.uid}`);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          setUser({
            id: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            mycoursepackages: userDoc.data().mycoursepackages || [],  
          });
        } else {
          console.error("No such document!");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/user/login");  
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
