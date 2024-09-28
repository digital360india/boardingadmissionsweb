import React from "react";

const FormField = ({ label, id, type = "text", value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
      required={required}
    />
  </div>
);

export default function ResultForm({
  userDetails,
  setUserDetails,
  handleFormSubmit,
}) {
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <FormField
        label="Name"
        id="name"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
        required
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        required
      />
      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        value={userDetails.phone}
        onChange={(e) =>
          setUserDetails({ ...userDetails, phone: e.target.value })
        }
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
      >
        View Full Result
      </button>
    </form>
  );
}
