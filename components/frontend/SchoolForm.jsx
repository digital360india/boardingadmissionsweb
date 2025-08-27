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
    <div className=" p-6">
      <p className="text-[26px] md:text-[36px] text-black mb-5 font-semibold">
        Get into India&apos;s Top Boarding Schools with <span className="text-primary02">Boarding Admissions</span>
      </p>
      <p className="text-[20px] md:text-[36px] text-primary02  mb-3 font-semibold">
        Get in Touch Now
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
              className="w-full bg-[#F6F6F6] rounded-md px-4 py-1 outline-none"
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
              className="w-full bg-[#F6F6F6] rounded-md px-4 py-1 outline-none"
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
              className="w-full bg-[#F6F6F6]  rounded-md px-4 py-1 outline-none"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          name="submit"
          className=" mt-[4vh] w-[180px] justify-center p-2 font-semibold text-white rounded-xl bg-primary02 "
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
