"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PopupSuccess from "./PopupSuccess";
import { db } from "@/firebase/firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";

const BookaDemo = () => {
  const form = useRef();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonclick, setButtonClick] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    school: "",
    class: "",
    textmessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (value >= 1 && value <= 12)) {
      setFormData({ ...formData, class: value });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phonenumber: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonClick(true);

    try {
      // Send email via Nodemailer API
      const res = await fetch("/api/send-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Save lead in Firestore
      const docRef = await addDoc(collection(db, "leads"), {
        name: formData.name,
        phonenumber: formData.phonenumber,
        school: formData.school,
        class: formData.class,
        message: formData.textmessage,
        timestamp: new Date(),
      });

      await updateDoc(docRef, { id: docRef.id });
      if (!data.success) throw new Error(data.error);

      setIsSubmitted(true);
      setFormData({
        name: "",
        phonenumber: "",
        school: "",
        class: "",
        textmessage: "",
      });

      router.push("/thankyou");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setButtonClick(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-10 font-poppins">
      <div className="bg-[#FFFFFF] w-[351px] h-[650px] md:w-[710px] md:h-[460px] lg:w-[950px] lg:h-[520px] rounded border-8 border-[#CDC6DB30]">
        {isSubmitted ? (
          <PopupSuccess setIsSubmitted={setIsSubmitted} />
        ) : (
          <>
            <div className="text-[#006269]">
              <h1 className="text-[24px] md:text-[32px] lg:text-[40px] text-center font-semibold mt-4">
                Connect with our Experts
              </h1>
              <h1 className="text-[10px] md:text-[14px] lg:text-[18px] text-center">
                Give a demo test to check your knowledge for admissions.
              </h1>
            </div>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="mx-4 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    required
                    className="px-4 py-3 placeholder-[#969696] text-[16px] border border-[#E1E3E2] bg-[#F9F9F9] rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder="Phone Number*"
                    required
                    value={formData.phonenumber}
                    className="px-4 py-3 placeholder-[#969696] text-[16px] border border-[#E1E3E2] bg-[#F9F9F9] rounded-md"
                    onChange={handlePhoneChange}
                  />
                  <select
                    name="school"
                    value={formData.school}
                    required
                    className="px-4 py-3 border border-[#E1E3E2] bg-[#F9F9F9] rounded-md"
                    onChange={handleChange}
                  >
                    <option value="">Select School*</option>
                    <option value="Mayo College">Mayo College</option>
                    <option value="Welham Boys/Girls School">Welham Boys/Girls School</option>
                    <option value="Scindia School">Scindia School</option>
                    <option value="The Doon School">The Doon School</option>
                  </select>
                  <input
                    type="number"
                    name="class"
                    placeholder="Class*"
                    value={formData.class}
                    required
                    className="px-4 py-3 border border-[#E1E3E2] bg-[#F9F9F9] rounded-md"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mx-4">
                  <textarea
                    name="textmessage"
                    value={formData.textmessage}
                    placeholder="Message for our Experts (Atmost 250 words)"
                    className="w-[302px] h-[120px] md:w-[660px] md:h-[110px] lg:w-[903px] lg:h-[150px] text-[#969696] px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md resize-none"
                    maxLength={1500}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex justify-end items-end mr-4">
                  <button
                    type="submit"
                    className={`${
                      buttonclick ? "hidden" : "block"
                    } w-[302px] h-[50px] md:w-[250px] md:h-[50px] bg-[#006269] text-white py-2 px-4 rounded hover:bg-[#029FAA] transition duration-300`}
                  >
                    Get Consultation
                  </button>
                  <svg
                    className={`animate-spin ${buttonclick ? "block" : "hidden"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="black"
                      d="M7.56 13.88c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c2.96 0 5.38-2.41 5.38-5.38s-2.41-5.38-5.38-5.38c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c3.52 0 6.38 2.86 6.38 6.38s-2.86 6.38-6.38 6.38"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookaDemo;
