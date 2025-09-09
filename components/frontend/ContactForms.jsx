"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaPhone } from "react-icons/fa6";

export default function ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation before submit
    if (!formData.name || !formData.contactNumber || !formData.email) {
      alert("Please fill in all fields ❌");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(
        "https://digitalleadmanagement.vercel.app/api/add-lead",
        {
          name: formData.name,
          phoneNumber: formData.contactNumber,
          email: formData.email,
          url: window.location.href,
          source:
            "Boardingadmissions - Not Sure Which School To Choose? -Category Schools Page",
          date: new Date().toISOString(),
        }
      );

      setFormData({ name: "", contactNumber: "", email: "" });
      router.push("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "text-green-500",
    "text-blue-500",
    "text-red-500",
    "text-purple-500",
    "text-yellow-500",
    "text-pink-500",
    "text-indigo-500",
    "text-orange-500",
    "text-teal-500",
    "text-lime-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm p-4 bg-white rounded-lg space-y-4 shadow-sm border border-gray-200"
    >
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[20px] font-medium text-gray-900 heading">
          Looking to Join this Top Boarding School?
        </h2>
        <a
          href="tel:+9557695360"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-500 hover:scale-110"
        >
          <FaPhone
            className={`w-8 h-8 ${colors[colorIndex]} transition-colors duration-300`}
          />
        </a>
      </div>

      <p className="text-[14px] text-gray-600 mb-4 body">Get In Touch Today</p>

      {/* Name */}
      <div className="border border-gray-300 mb-4">
        <div className="grid grid-cols-[40%_60%] w-full body">
          <div className="px-3 py-2 text-[14px] font-medium text-gray-700 border-r border-gray-300">
            Name
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-3 text-sm focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="border border-gray-300 mb-4 grid grid-cols-[40%_60%] w-full">
        <div className="px-3 body py-2 text-[14px] font-medium text-gray-700 border-r border-gray-300">
          Phone Number
        </div>
        <div>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-3 py-3 text-sm border-0 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="border border-gray-300 mb-4 grid grid-cols-[40%_60%] w-full">
        <div className="px-3 py-2 text-[14px] font-medium text-gray-700 border-r border-gray-300">
          Email
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-3 text-sm border-0 focus:outline-none"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 text-sm font-medium rounded transition duration-200 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#075D70] hover:bg-[#075D70] text-white"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Enquire Now"}
      </button>
    </form>
  );
}
