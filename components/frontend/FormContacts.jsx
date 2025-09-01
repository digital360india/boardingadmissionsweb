"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const kwesforms = dynamic(() => import("kwesforms"));

export default function Formontact() {
  const router = useRouter();
  useEffect(() => {
    kwesforms;
  }, []);

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
      const response = await axios.post(
        "https://kwesforms.com/api/foreign/forms/IdHYEC9XdhQY0WpAiXbm",
        formData
      );

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

      if (response.status === 200 && lmsResponse.status === 200) {
        setLoading(false);
        setFormData(initial);
        router.push("/thankyou");
      } else {
        alert("There was an error submitting the form.");
        setLoading(false);
      }
    } catch (error) {
      alert("Error while submitting the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Still have question?
          </p>
          <p className="text-xl md:text-2xl text-primary02 font-semibold mt-2">
            Fill the form & we&apos;ll guide you step by step
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="kwes-form space-y-5"
          action="https://kwesforms.com/api/foreign/forms/IdHYEC9XdhQY0WpAiXbm"
        >
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
