"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useTransition } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import CheckoutDetailsForm from "./CheckoutDetailsForm";

export default function Checkout() {
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const packageId = pathArray[pathArray.length - 1];
  const [courses, setCourses] = useState([]);
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading1, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, startTransition] = useTransition();

  const router = useRouter();

  const fetchPackageAndCourses = async () => {
    if (!packageId) {
      setError("Invalid package ID.");
      setLoading(false);
      return;
    }

    try {
      const packageQuery = query(
        collection(db, "coursePackages"),
        where("id", "==", packageId)
      );
      const packageDocs = await getDocs(packageQuery);

      if (packageDocs.empty) {
        setError("Package not found.");
        setLoading(false);
        return;
      }

      const packageData = packageDocs.docs[0].data();
      setPackageDetails(packageData);

      const coursePromises = packageData.courses.map((courseId) =>
        getDoc(doc(db, "courses", courseId))
      );
      const courseSnapshots = await Promise.all(coursePromises);
      const fetchedCourses = courseSnapshots.map((snapshot) => snapshot.data());
      setCourses(fetchedCourses);
      const finalPrice = (packageData?.discountedPrice || 0) * 1.18;
    } catch (err) {
      setError("Failed to fetch package or courses. Please try again.");
      console.error("Error fetching package or courses:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPackageAndCourses();
  }, [packageId]);

  const createOrders = async ({
    productId,
    packageName,
    totalAmount,
    currency,
  }) => {
    try {
      const response = await axios.post("/api/create-order", {
        productId,
        packageName,
        totalAmount,
        currency,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating orders", error);
      return { error: "Error creating orders" };
    }
  };

  const verifyPayment = async (data) => {
    try {
      const response = await axios.post("/api/verify-payment", data);

      return response.data;
    } catch (error) {
      console.error("Error verifying payment", error);
      return { error: "Error verifying payment" };
    }
  };

  function handleBuy(formData) {
    startTransition(async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = async () => {
        const result = await createOrders({
          productId: packageDetails.id,
          packageName: packageDetails.packageName,
          totalAmount: (packageDetails.discountedPrice || 0) * 1.18,
          currency: "INR",
        });

        if (result.error) {
          alert("Error creating orders");
          return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: result.amount,
          currency: "INR",
          name: "Payment Gateway",
          image: `${process.env.NEXT_PUBLIC_BASE_URL}${packageDetails.image}`,
          order_id: result.orderId,
          handler: async function (response) {

            const dateOfPurchase = new Date().toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
              timeZoneName: "short",
            });
            const dateOfExpiry = new Date(
              new Date().getTime() + 180 * 24 * 60 * 60 * 1000
            ).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
              timeZoneName: "short",
            });
            const userObject = {
              email: formData.email,
              name: formData.name,
              phoneNumber: formData.phoneNumber,
              mycoursepackages: [
                {
                  packageId: packageDetails.id,
                  packageName: packageDetails.packageName,
                  price: packageDetails.price,
                  dateOfPurchase: dateOfPurchase,
                  dateOfExpiry: dateOfExpiry,
                },
              ],
              mytestpacakages: [],
              myscores: [],
              myresults: [],
              role: "user",
            };
            const userCreationResponse = axios.post("/api/create-user", {
              email: formData.email,
              password: formData.password,
              userObject: userObject,
            });

            console.log(userCreationResponse.data);

            const result = await verifyPayment(response);
            if (result.error) {
              toast.error("Payment Failed");
              router.push("/payment?status=failed");
              return;
            }
            toast.success("Payment Successful");
            router.push("/payment?status=success");
          },
      
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    });
  }

  function handleOpenForm() {
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  if (loading1) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="xl:px-[100px]  py-[40px] flex flex-col lg:flex-row px-6 gap-10 justify-between">
      {showForm && (
        <CheckoutDetailsForm
          onClose={handleCloseForm}
          onOtpVerified={handleBuy}
        />
      )}

      <div className="space-y-8">
        {packageDetails && (
          <div className="lg:py-[32px] lg:px-[32px] p-4 border rounded-lg flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-background05">
              Package
            </h1>
            <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-4 ">
              {packageDetails.packageName || "Package Name"}
            </p>
            <img
              className="w-full h-[200px] object-fill rounded-md"
              src={packageDetails.image || "./images/product.png"}
              alt={packageDetails.packageName || "Package Image"}
            />
            <p className="font-medium lg:text-[24px] text-background05 text-[18px]">
              {"Package Price : "} ₹{packageDetails.price || "0"}
            </p>

            <p className="font-medium lg:text-[18px] text-[14px] text-[#808080]">
              Starting Date:{" "}
              {new Date(packageDetails.startingDate).toLocaleDateString()}
            </p>
            <p className="font-medium lg:text-[18px] text-[14px] text-[#808080]">
              Students Enrolled: {packageDetails.studentsEnrolled || "0"}
            </p>
          </div>
        )}

        {/* Courses */}
        <div className=" flex flex-col gap-2 p-4 border rounded-lg">
          <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-4 lg:m-4 my-4">
            Courses in this Package
          </p>
          {courses.map((course, index) => (
            <div key={index} className="flex lg:gap-[52px] gap-4 mb-4">
              <div>
                <img
                  className="w-[75px] h-[75px] rounded-md"
                  src={course.thumbnailImage || "./images/product.png"}
                  alt={course.courseName || "Course Image"}
                />
              </div>
              <div className="lg:space-y-3 space-y-1">
                <p className="font-medium lg:text-[24px] text-[16px]">
                  {course.courseName || "Course Name"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary and Other Components */}
      <div className="md:w-[560px] h-fit py-[32px] px-[32px] border rounded-lg">
        <p className="font-semibold text-[24px] mb-8">Order Summary</p>
        <div className="flex flex-col space-y-4 py-4">
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">Subtotal</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ₹{packageDetails?.discountedPrice || "0"}
            </p>
          </div>
          <div className="space-y-2 text-[16px]">
            <div className="justify-between flex">
              <p className="text-[#545454] text-[14px] lg:text-[16px]">
                Discount
              </p>
              <p className="text-[#95D18B] font-medium">₹0</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">GST 18%</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ₹{(packageDetails?.discountedPrice || 0) * 0.18}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">Total</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ₹{(packageDetails?.discountedPrice || 0) * 1.18}
            </p>
          </div>
        </div>
        <button
          disabled={loading}
          onClick={handleOpenForm}
          className="py-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white"
        >
          {loading ? "Loading..." : "Proceed to Buy"}
        </button>
      </div>
    </div>
  );
}
