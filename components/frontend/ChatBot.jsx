"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const sampleFlow = {
  start: {
    message:
      "Welcome to Boarding Admissions India's No.1 Portal for Boarding Admissions Preparation",
    options: {
      option1: { text: "Tell me about your services", next: "services" },
      option2: { text: "Contact Support", next: "support" },
    },
  },
  services: {
    message:
      "We offer Web Development and Mobile Development. Before I tell you more, can I have your name and phone number?",
    options: {
      option1: { text: "Yes", next: "collectUserInfo" },
      option2: { text: "No, thanks", next: "start" },
    },
  },
  collectUserInfo: {
    message: "Please enter your name:",
    next: "collectPhoneNumber",
  },
  collectPhoneNumber: {
    message: "Thanks! Now please enter your phone number:",
    next: "confirmation",
  },
  confirmation: {
    message:
      "Thank you for providing your details. We will reach out to you soon!",
    options: { option1: { text: "Back to Start", next: "start" } },
  },
  support: {
    message: "Please contact us at boardingadmissionsinfo.com.",
    options: { option1: { text: "Back to Start", next: "start" } },
  },
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: sampleFlow.start.message, key: "start" },
  ]);
  const [currentStep, setCurrentStep] = useState("start");
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });
  const [visible, setVisible] = useState(true);
  const [surveyVisible, setSurveyVisible] = useState(false);
  const [surveyData, setSurveyData] = useState({
    feedback: "",
    improvement: "",
    whatLookingFor: "",
  });
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  const handleOptionClick = (nextStep, userReply) => {
    const step = sampleFlow[nextStep];
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userReply, key: `user-${nextStep}` },
      { sender: "bot", text: step.message, key: nextStep },
    ]);
    setCurrentStep(nextStep);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmitUserInfo = async () => {
    if (userInfo.name && userInfo.phone) {
      try {
        await addDoc(collection(db, "leads"), {
          name: userInfo.name,
          phone: userInfo.phone,
        });
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: sampleFlow.confirmation.message,
            key: "confirmation",
          },
        ]);
        setCurrentStep("confirmation");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Please enter both name and phone number.");
    }
  };

  const renderOptions = () => {
    const options = sampleFlow[currentStep].options;
    if (!options) return null;

    return Object.keys(options).map((optionKey) => {
      const option = options[optionKey];
      return (
        <button
          key={optionKey}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
          onClick={() => handleOptionClick(option.next, option.text)}
        >
          {option.text}
        </button>
      );
    });
  };

  const renderInputField = () => {
    if (currentStep === "collectUserInfo") {
      return (
        <div className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          />
          <button
            onClick={() =>
              handleOptionClick("collectPhoneNumber", userInfo.name)
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
          >
            Submit Name
          </button>
        </div>
      );
    }

    if (currentStep === "collectPhoneNumber") {
      return (
        <div className="mt-4">
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={userInfo.phone}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          />
          <button
            onClick={handleSubmitUserInfo}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
          >
            Submit Phone Number
          </button>
        </div>
      );
    }

    return null;
  };

  const handleSurveyInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSurveySubmit = async () => {
    // Add survey data to Firebase Firestore
    try {
      await addDoc(collection(db, "chatbot"), surveyData);
      setSurveySubmitted(true);
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error adding survey data: ", error);
    }
  };

  if (!visible) return null;
  return (
    <div className="fixed right-4 bottom-4 z-10 flex flex-col items-end">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-4 flex flex-col h-96 relative">
        <button
          onClick={() => setVisible(false)}
          className="text-red-500 hover:text-red-700 absolute top-2 right-2"
        >
          &times;
        </button>
        <button
          onClick={() => setSurveyVisible(!surveyVisible)}
          className="text-gray-500 hover:text-gray-700 absolute top-2 left-2"
        >
          &#x2022;&#x2022;&#x2022;
        </button>

        {surveyVisible && !surveySubmitted ? (
          <div className="mt-4">
            <h3 className="font-semibold text-lg">
              Did we answer your questions?
            </h3>
            <textarea
              name="feedback"
              placeholder="Your feedback..."
              value={surveyData.feedback}
              onChange={handleSurveyInputChange}
              className="border p-2 w-full rounded-md mt-2"
            />
            <textarea
              name="whatLookingFor"
              placeholder="What were you looking for?"
              value={surveyData.whatLookingFor}
              onChange={handleSurveyInputChange}
              className="border p-2 w-full rounded-md mt-2"
            />
            <textarea
              name="improvement"
              placeholder="How can we improve?"
              value={surveyData.improvement}
              onChange={handleSurveyInputChange}
              className="border p-2 w-full rounded-md mt-2"
            />
            <button
              onClick={handleSurveySubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
            >
              Submit Feedback
            </button>
          </div>
        ) : surveySubmitted ? (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Thank you for your feedback!
            </p>
          </div>
        ) : null}

        <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${msg.sender === "bot" ? "text-left" : "text-right"}`}
            >
              <p
                className={`${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-blue-500 text-white"
                } inline-block px-4 py-2 rounded-lg max-w-xs`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {renderInputField()}
        
        {/* Render options below the chat */}
        <div className="mt-4 flex flex-col space-y-2">
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
