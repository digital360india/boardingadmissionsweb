// import { auth } from 'firebase-admin';
import {  NextResponse } from 'next/server';
import { db } from '../firebase.js';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}
export async function POST(req) {
  try {
    const { email, password, userObject } = await req.json();

    // Create a new user with Firebase Admin SDK
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    await admin.firestore().collection('users').doc(userRecord.uid).set(userObject);

    // const userRef = db.collection('users').doc(userRecord.uid);

    // await userRef.set({
    //   email: userObject.email,
    //   name: userObject.name,
    //   phoneNumber: userObject.phoneNumber,
    //   mycoursepackages: userObject.mycoursepackages,
    //   mytestpacakages: userObject.mytestpacakages,
    //   myscores: userObject.myscores,
    //   myresults: userObject.myresults,
    //   createdAt: firestore.Timestamp.now(),
    //   id: userRecord.uid,
    // });
    return NextResponse.json(
      { message: "User created successfully", userId: userRecord.uid },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Error creating user", details: error.message },
      { status: 500 }
    );
  }
}
