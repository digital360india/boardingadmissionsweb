"use client";
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from '@/userProvider';

const TestComplete = () => {
  const router = useRouter();
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const userDoc = doc(db, "users", user.uid); // Assuming "users" collection and document ID as user.uid
          const docSnap = await getDoc(userDoc);

          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Fetched user data:", data); // Debug log
            setTestData(data);
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("No user is currently authenticated");
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleReturnHome = () => {
    router.push('/'); // Redirect to the home page or another page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-complete-container">
      <h1>Test Completed</h1>
      {testData ? (
        <div>
          <p>Thank you for completing the test. Here are your results:</p>
          <p><strong>Score:</strong> {testData.score || 'N/A'}</p> {/* Handle missing score */}
          <p><strong>Redemption Code:</strong> {testData.redemptionCode || 'N/A'}</p> {/* Handle missing redemption code */}
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Unable to retrieve your results. Please try again later.</p>
      )}
      <button onClick={handleReturnHome} className="return-home-btn">Return Home</button>
    </div>
  );
};

export default TestComplete;
