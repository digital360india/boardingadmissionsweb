"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp, db } from "@/firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/frontend/Navbar";
import Footer from "@/components/frontend/Footer";

const auth = getAuth(firebaseApp);

const AuthPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state for login button
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login process starts

    try {
      const user = await getUserByEmail(data.email);
      if (!user) {
        console.error("Login failed: User not found.");
        setLoading(false); // Stop loading if login fails
        return;
      }

      await signInWithEmailAndPassword(auth, data.email, data.password);
      setTimeout(() => {
        toast.success("Welcome ADMIN ");
      }, 2000);
      router.push("/user/dashboard");
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false); // Stop loading after login process
    }
  };

  const getUserByEmail = async (email) => {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("email", "==", email))
    );

    if (querySnapshot.docs.length > 0) {
      const user = querySnapshot.docs[0].data();
      return user;
    }

    return null;
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="h-screen max-w-screen mt-20 overflow-x-hidden ">
        <div
          className="relative h-full w-screen bg-background05 "
          style={{
            backgroundImage:
              'url("https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Fbglogin.png?alt=media&token=8f01e8d4-1691-4ff3-a440-667b85078088")',
            backgroundRepeat: "repeat",
          }}
        >
          <div className="hidden  md:flex justify-center items-center h-full">
            <div className="bg-white rounded-lg shadow-lg flex overflow-hidden w-[1159px] h-3/4 ">
              <div className="w-1/2 hidden lg:block">
                <div
                  style={{
                    backgroundImage:
                      'url("https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Floginimage.png?alt=media&token=a9f32602-3a93-4c05-87fe-cea051a454c2")',
                  }}
                  alt="Side Graphic"
                  className="h-full object-cover bg-[#B9E4EE]"
                />
              </div>

              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-background01">
                <div className="flex flex-col gap-10">
                  <h2 className="text-3xl text-center mb-6 text-background05 font-bold">
                    Welcome{" "}
                  </h2>
                  <h2 className="text-xl text-center mb-6 text-black">
                    Log In to Access your Dashboard{" "}
                  </h2>
                </div>
                <div>
                  <form
                    onSubmit={handleLogin}
                    className="flex justify-center items-center flex-col gap-2"
                  >
                    <div className="mb-4 w-[400px] ">
                      <label
                        htmlFor="email"
                        className="block text-lg mb-2 text-background05"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-4 w-[400px]">
                      <label
                        htmlFor="password"
                        className="block text-lg text-background05 mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading} // Disable button when loading
                      className={`h-12 ${
                        loading
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-background05 hover:bg-green-700"
                      } text-white py-2 rounded-2xl w-[400px] flex justify-center items-center`}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                          viewBox="0 0 24 24"
                        />
                      ) : (
                        "Login"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden justify-center items-center h-full">
            <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden w-[90%] max-w-[1159px] h-auto md:h-3/4">
              {/* Image Section (Desktop Only) */}
              <div className="hidden lg:block w-full lg:w-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Floginimage.png?alt=media&token=a9f32602-3a93-4c05-87fe-cea051a454c2"
                  alt="Side Graphic"
                  className="h-full object-center object-cover bg-[#B9E4EE]"
                />
              </div>

              {/* Form Section */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-gradient04">
                <div className="flex flex-col gap-4 lg:gap-10">
                  <h2 className="text-2xl lg:text-3xl text-center mb-4 lg:mb-6 text-background05 font-bold">
                    Welcome
                  </h2>
                  <h2 className="text-lg lg:text-xl text-center mb-4 lg:mb-6 text-black">
                    Log In to Access your Dashboard
                  </h2>
                </div>

                <form
                  onSubmit={handleLogin}
                  className="flex justify-center items-center flex-col gap-2"
                >
                  {/* Email Input */}
                  <div className="mb-4 w-[85%] max-w-[310px]">
                    <label
                      htmlFor="email"
                      className="block text-md lg:text-lg mb-2 text-background05"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-xl"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-4 w-[85%] max-w-[310px]">
                    <label
                      htmlFor="password"
                      className="block text-md lg:text-lg mb-2 text-background05"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full p-2 border border-gray-300 rounded-xl"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`h-12 ${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-background05 hover:bg-green-700"
                    } text-white py-2 rounded-2xl w-[85%] max-w-[310px] flex justify-center items-center`}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                        viewBox="0 0 24 24"
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                {/* Decorative Image for Mobile */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Floginimage.png?alt=media&token=a9f32602-3a93-4c05-87fe-cea051a454c2"
                  alt="Decorative Graphic"
                  className="mt-6 w-[210.37px] h-[268.43px] object-center object-cover  mx-auto lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;

{
  /* <div className="flex justify-center h-[90vh] relative top-10 overflow-hidden ">
<img
  src="/images/hero.jpg"
  alt="Logo"
  width={1200}
  height={1200}
  className="rounded-3xl h-[500px] w-[1500px] shadow-2xl shadow-gray-600 object-cover"
/>
<div className="absolute bg-opacity-20  rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
  <div className=" font-normal text-center p-8 backdrop-blur-lg rounded-lg">
    <p className="text-blue-600 text-4xl">Welcome</p>
    <p className=" text-blue-600 text-xl">
      Login to Access User Dashboard
    </p>

    <div className="w-96 h-96 bg-opacity-80 bg-black text-black flex-col rounded-2xl mt-10 p-6">
      <div className="flex  justify-center items-center">
        {" "}
        <img
          src="/images/hero.jpg"
          alt="Logo"
          width={1200}
          height={1200}
          className="rounded-full h-[100px] w-[100px] shadow-2xl shadow-gray-600"
        />
      </div>
      <form className="m-auto text-black " onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="text-white justify-start flex text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            name="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="text-white justify-start flex  text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={data.password}
            name="password"
            color="black"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-300 text-black"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label
            htmlFor="rememberMe"
            className="text-white text-sm cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 w-60"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</div>
</div> */
}
