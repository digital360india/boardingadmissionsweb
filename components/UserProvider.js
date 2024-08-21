"use client"
import React, { createContext, useState, useEffect } from 'react';
import { auth, onAuthStateChanged, db } from '@/firebase/firebase'; // Adjust the import path
import { doc, setDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = doc(db, `users/${currentUser.uid}`);
        await setDoc(userRef, {
          email: currentUser.email,
          displayName: currentUser.displayName,
        }, { merge: true });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
