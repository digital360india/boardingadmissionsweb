"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SchoolForm() {
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
      // Send email using Nodemailer API route
      const response = await axios.post("/api/email", formData);

      // Save to LMS (optional)
      const lmsResponse = await axios.post(
        "https://digitalleadmanagement.vercel.app/api/add-lead",
        {
          ...formData,
          url: window.location.href,
          source: "Boarding Admissions - Schools Enquiry Form",
          date: new Date().toISOString(),
        }
      );

      if (response.status === 200 && lmsResponse.status === 200) {
        setFormData(initial);
        setLoading(false);
        router.push("/thankyou");
      } else {
        alert("There was an error submitting the form.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Error while submitting the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <p className="text-[24px] font-semibold text-gray-800 mb-2 text-center">
          Get in touch with us to
        </p>
        <p className="text-[14px] md:text-lg text-primary02 font-medium text-center mb-6">
          Give your child the best chance of securing admission at India&apos;s
          Top Boarding School
        </p>

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
