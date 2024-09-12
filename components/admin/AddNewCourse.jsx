  "use client";
  import React, { useState } from "react";
  import { db, storage } from "@/firebase/firebase"; // Import storage from Firebase
  import { addDoc, collection } from "firebase/firestore";
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
  import { useRouter } from "next/navigation";

  const AddCourseDialog = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      courseName: "",
      heroImage: "",
      thumbnailImage: "",
      mobileViewImage: "",
      description: "",
      schools: "",
      price:""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter(); 

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleImageUpload = async (e) => {
      const file = e.target.files[0];
      const { name } = e.target;

      if (!file) return;

      setLoading(true);
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => {
          setError("Failed to upload image. Please try again.");
          console.error("Image upload error:", error);
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormData((prevData) => ({
            ...prevData,
            [name]: downloadURL,
          }));
          setLoading(false);

        }
      );
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {
        courseName,
        heroImage,
        thumbnailImage,
        mobileViewImage,
        description,
        schools,
        price
      } = formData;

      setLoading(true);

      try {
        const docRef =   await addDoc(collection(db, "courses"), {
          courseName,
          heroImage,
          thumbnailImage,
          mobileViewImage,
          description,
          schools,
          createdAt: new Date(),
          price
        });
   
        await updateDoc(docRef, { id: docRef.id});
        setSuccess("Course added successfully!");
        setFormData({
          courseName: "",
          heroImage: "",
          thumbnailImage: "",
          mobileViewImage: "",
          description: "",
          schools: "",
          price:""
        });
        router.refresh(); 

      } catch (err) {
        setError("Failed to add course. Please try again.");
        console.error("Error adding course:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (!isOpen) return null; // Return null if dialog is not open

    return (
      <>
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative z-60"
            onClick={(e) => e.stopPropagation()} // Prevent click events from closing the dialog
          >
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Course Name:</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Hero Image:</label>
                <input
                  type="file"
                  name="heroImage"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Thumbnail Image:</label>
                <input
                  type="file"
                  name="thumbnailImage"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile View Image:</label>
                <input
                  type="file"
                  name="mobileViewImage"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course Price:</label>
                <textarea
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded"

                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Schools Being Targeted:
                </label>
                <input
                  type="text"
                  name="schools"
                  value={formData.schools}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Course"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 ml-2"
              >
                Cancel
              </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </div>
        </div>
      </>
    );
  };

  export default AddCourseDialog;
