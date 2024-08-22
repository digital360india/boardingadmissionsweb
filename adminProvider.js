"use client";
import React, { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged, db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setAdmin(currentUser);

        const userRef = doc(db, `admin/${currentUser.uid}`);
        await setDoc(
          userRef,
          {
            email: currentUser.email,
          },
          { merge: true }
        );
      } else {
        setAdmin(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setAdmin(null);
      router.push("/admin/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AdminContext.Provider value={{ admin, handleLogout }}>
      {children}
    </AdminContext.Provider>
  );
};
