"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import axios from "axios";
const kwesforms = dynamic(() => import('kwesforms'));
export default function EnquiryForm({title}) {
  useEffect(() => {
    kwesforms;
  }, []);
  const initial = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kwesforms.com/api/foreign/forms/IdHYEC9XdhQY0WpAiXbm",
        formData
      );
      if (response.status === 200) {
        console.log("Form Submitted Successfully ", response);
      } else {
        console.log("Form not Submitted", response);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(formData);
    alert("Form Submitted Successfully !!");
    setFormData(initial);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  return (
    <div>
       <p className="text-[20px] md:text-[36px] text-primary02 mb-5 font-semibold">Enquiry Form</p>
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
              placeholder="Your Name"
              value={formData.name}
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
          <div>
            <label for="phoneNumber" className="hidden"></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Contact number"
              value={formData.phoneNumber}
              className="w-full md:w-[400px] h-[40px] bg-[#F6F6F6] rounded-md px-4 py-2 outline-none"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          name="submit"
          className=" mt-[4vh] w-[180px] h-[40px] px-2 font-semibold text-white rounded-xl bg-[#0B446F] grid place-content-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}