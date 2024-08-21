"use client"
import React, { useContext } from 'react';
import { UserContext } from '@/userProvider';
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/firebase/firebase';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Page = () => {
  const { user } = useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const router = useRouter(); // Initialize the router

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with Google');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSimpleForm = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up with email');
    } catch (error) {
      setError(error.message);
      console.error('Error signing up with email:', error);
    }
  };

  const handleTakeTest = () => {
    router.push(`/scholarshiptest/${user.uid}`); 
  };
  const testDetails = {
    questions: 20,
    duration: "20 minutes",
    area: "Mathematics",
    studentsTaken: 1500,
    scholarshipsGiven: 50,
  };

  return (
    <div className="page-container">
      <div className="test-details">
        <h1>Test Details</h1>
        <ul>
          <li><strong>Number of Questions:</strong> {testDetails.questions}</li>
          <li><strong>Duration:</strong> {testDetails.duration}</li>
          <li><strong>Test Area:</strong> {testDetails.area}</li>
          <li><strong>Number of Students Taken:</strong> {testDetails.studentsTaken}</li>
          <li><strong>Number of Scholarships Given:</strong> {testDetails.scholarshipsGiven}</li>
        </ul>
      </div>

      <div className="signup-options">
        <button onClick={handleGoogleAuth} className="google-auth-btn">Sign Up with Google</button>
        <button className="simple-form-btn">Sign Up with Email</button>
      </div>

      <div className="simple-form-container">
        <form onSubmit={handleSimpleForm}>
          <h2>Sign Up with Email</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required  
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      {user && (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          <button onClick={handleTakeTest} className="take-test-btn">Take Test</button>
        </div>
      )}
    </div>
  );
};

export default Page;
