"use client";

import React, { useState } from "react";

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
      <div>
        <div className="bg-white mb-20 flex justify-center items-center">
          <div className="mt-12 mx-12 border-4 border-[#FFFFFF]  shadow-md w-[77.5rem] bg-[#F4FCFC80] ">
            <div className="pt-7">
              <h1 className="font-semibold text-[3rem] text-primary02 text-center">
                Leave Your Question Here
              </h1>
              <p className="pt-4 font-medium text-center">
                We aim to respond within 24 hours.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6 px-6 pt-12 ">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    className="border border-[#E7E7E7] p-2 rounded-lg w-[572px] h-[56px] text-[#667085] text-[12px]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    className="border border-[#E7E7E7] p-2 rounded-lg w-[572px] h-[56px] text-[#667085] text-[12px]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="border border-[#E7E7E7] p-2 rounded-lg w-[572px] h-[56px] text-[#667085] text-[12px]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number*"
                    className="border border-[#E7E7E7] p-2 rounded-lg w-[572px] h-[56px] text-[#667085] text-[12px]"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="px-6 pt-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    className="w-full  h-[182px] border border-[#E7E7E7] p-2 rounded-lg mb-4 text-[#667085] text-[12px] resize-none"
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
    </>
  );
};

export default OurCoursesForm;



// "use client"
// import { useState } from 'react';

// export default function QuestionForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
//       <h2 className="text-2xl font-bold text-teal-700 mb-4">Leave Your Question Here</h2>
//       <p className="text-gray-600 mb-6">We aim to respond within 24 hours.</p>

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name*"
//             className="border border-gray-300 p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name*"
//             className="border border-gray-300 p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             className="border border-gray-300 p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number*"
//             className="border border-gray-300 p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows="5"
//           className="w-full border border-gray-300 p-2 rounded mb-4"
//           onChange={handleChange}
//         ></textarea>
//         <div className="text-right">
//           <button
//             type="submit"
//             className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition duration-300"
//           >
//             Primary
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
