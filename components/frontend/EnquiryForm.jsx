"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
const kwesforms = dynamic(() => import("kwesforms"));
export default function EnquiryForm({ title }) {
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

      // Submit to your LMS
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
    <div>
      <p className="text-[20px] md:text-[36px] text-primary02 mb-5 font-semibold">
        Enquiry Form
      </p>
      <form
        onSubmit={handleSubmit}
        className="kwes-form"
        action="https://kwesforms.com/api/foreign/forms/IdHYEC9XdhQY0WpAiXbm"
      >
        <div className="flex flex-col  gap-4 justify-between">
          <div>
            <label for="name" className="hidden"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="w-full md:w-[400px] h-[40px] bg-[#F6F6F6] rounded-md px-4 py-2 outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label for="phoneNumber" className="hidden"></label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Contact number"
              value={formData.phoneNumber.toString()}
              className="w-full md:w-[400px] h-[40px] bg-[#F6F6F6] rounded-md px-4 py-2 outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="email" className="hidden"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              className="w-full md:w-[400px] h-[40px] bg-[#F6F6F6] rounded-md px-4 py-2 outline-none"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          name="submit"
          className=" mt-[4vh] w-[180px] h-[40px] px-2 font-semibold text-white rounded-xl bg-primary02 grid place-content-center"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
