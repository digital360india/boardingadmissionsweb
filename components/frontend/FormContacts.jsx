"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Formontact() {
  const router = useRouter();

  const initial = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Save to Digital Lead Management API
      const lmsResponse = await axios.post(
        "https://digitalleadmanagement.vercel.app/api/add-lead",
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          url: window.location.href,
          source: "Boarding Admissions - Schools Enquiry Form",
          email: formData.email,
          date: new Date().toISOString(),
        }
      );

      // ✅ Send email via Nodemailer API
      const emailResponse = await axios.post("/api/email", {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        url: window.location.href,
        source: "Boarding Admissions - Schools Enquiry Form",
        date: new Date().toISOString(),
      });

      if (lmsResponse.status === 200 && emailResponse.status === 200) {
        setLoading(false);
        setFormData(initial);
        router.push("/thankyou");
      } else {
        alert("There was an error submitting the form.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error while submitting the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <p className="text-[24px] md:text-xl text-gray-700 font-medium">
            Still have question?
          </p>
          <p className="text-[16px] md:text-2xl text-primary02 font-semibold mt-2">
            Fill the form & we&apos;ll guide you step by step
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary02 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Contact Number"
              value={formData.phoneNumber}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary02 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary02 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 font-semibold text-white rounded-lg bg-primary02 hover:bg-primary02/90 transition-all shadow-md"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
