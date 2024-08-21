"use client";

import React, { useState } from "react";
import AboutForm from "./AboutForm";

const OurCoursesForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className="md:hidden block">
        <div className="bg-white p-4 md:mb-20 flex justify-center items-center" >
          <div 
          // className={`mt-10 md:mt-12  md:mx-12 md:border-4 border-[#FFFFFF]  rounded-lg w-[19rem] md:w-[77.5rem] bg-[#F4FCFC80]`}  style={{ boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.32)' }}
          className={`mt-10 md:mt-12 md:mx-12 md:border-4  rounded-lg w-[100%] md:w-[77.5rem] bg-[#F4FCFC80] border-4 border-[#F9FDFD] md:border-white md:shadow-lg`}
         >
            <div className="pt-7">
              <h1 className="font-semibold   text-[2rem] md:text-[3rem] text-primary02 text-center">
                Leave Your Question Here
              </h1>
              <p className="pt-4 font-medium text-center">
                We aim to respond within 24 hours.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-12 ">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    className="border border-[#E7E7E7] p-4 rounded-lg w-[100%]  h-[56px] text-[#667085] text-[1rem]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    className="border border-[#E7E7E7] p-4 rounded-lg w-[100%]  h-[56px] text-[#667085] text-[1rem]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="border border-[#E7E7E7] p-4 rounded-lg w-[100%] h-[56px] text-[#667085] text-[1rem]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number*"
                    className="border border-[#E7E7E7] p-4 rounded-lg w-[100%]  h-[56px] text-[#667085] text-[1rem]"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="px-6 pt-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    className="w-full h-[8rem]  md:h-[182px] border border-[#E7E7E7] p-4 rounded-lg mb-4 text-[#667085] text-[1rem] resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex justify-end px-5">
                  <div className=" w-[300px] h-[56px] text-center mb-4 mt-3   bg-gradient01  border-custom rounded-md">
               
    
                    
                    <button
                      type="submit"
                      className=" text-white py-4  rounded-md "
                    >
                      Primary
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <AboutForm/>
      </div>
    </>
  );
};

export default OurCoursesForm;

