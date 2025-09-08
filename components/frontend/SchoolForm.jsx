"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const kwesforms = dynamic(() => import("kwesforms"));

export default function SchoolForm() {
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
        console.log("Form not Submitted", response);
        alert("There was an error submitting the form.");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error submitting form", error);
      alert("Error while submitting the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6 sm:p-8">
        {/* Headings */}
        <p className="text-[22px] sm:text-[28px] lg:text-[36px] text-black mb-3 font-semibold leading-snug text-center">
          Want your child in India&apos;s top boarding schools?
        </p>
        <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-primary02 mb-6 font-semibold text-center">
          Book a Demo Session
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="kwes-form"
          action="https://kwesforms.com/api/foreign/forms/IdHYEC9XdhQY0WpAiXbm"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="hidden"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                className="w-full bg-[#F6F6F6] rounded-md px-4 py-3 text-sm sm:text-base outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="hidden"></label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Contact number"
                value={formData.phoneNumber.toString()}
                className="w-full bg-[#F6F6F6] rounded-md px-4 py-3 text-sm sm:text-base outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="hidden"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                className="w-full bg-[#F6F6F6] rounded-md px-4 py-3 text-sm sm:text-base outline-none"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              name="submit"
              className="mt-6 w-full sm:w-[200px] p-3 font-semibold text-white rounded-xl bg-primary02 transition-all duration-300 hover:bg-primary02/90"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
