import axios from "axios";
import React, { useState, useEffect } from "react";

const CheckoutDetailsForm = ({ onClose, onOtpVerified }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    retypePassword: "",
  });

  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [verifyotp, setverifyOTP] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (showOtpScreen && isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 60;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpScreen, isResendDisabled]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    if (formData.password !== formData.retypePassword) {
      alert("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post("/api/send-email", {
        email: formData.email,
        otp: otp,
      });
      setverifyOTP(response.data.otp);
    } catch (error) {
      console.error("Error verifying otp", error);
      return { error: "Error verifying otp" };
    }finally{
      setLoading(false); 
    }

    localStorage.setItem("checkoutDetails", JSON.stringify(formData));

    setShowOtpScreen(true);
    setIsResendDisabled(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp != verifyotp) {
      alert("Invalid OTP");
      return;
    }

    alert("OTP verified successfully");
    setverifyOTP("");
    onClose();
    onOtpVerified(formData);
  };

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setTimer(60);
    sendOTP(formData.email);
    alert("OTP resent successfully");
  };




  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
        >
          X
        </button>
        {!showOtpScreen ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Checkout Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Retype Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="retypePassword"
                value={formData.retypePassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                Show Password
              </label>
            </div>
            <button
              type="submit"
              diabled={loading}
              className={`w-full bg-gradient01 text-white py-2 rounded-lg 
                ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-[#1b6ea1c9]"
                }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
            <div className="mb-4">
              <label className="block text-gray-700">OTP:</label>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient01 text-white py-2 rounded-lg "
            >
              Verify OTP
            </button>
            <button
              type="button"
              onClick={handleResendOtp}
              className="w-full bg-gray-500 text-white py-2 rounded-lg mt-4"
              disabled={isResendDisabled}
            >
              Resend OTP {isResendDisabled && `(${timer}s)`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutDetailsForm;
