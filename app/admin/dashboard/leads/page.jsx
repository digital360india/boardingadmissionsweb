"use client";
import { db } from "@/firebase/firebase";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLead, setEditingLead] = useState(null); // Track the lead being edited
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Control the visibility of the edit dialog
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false); // Control the visibility of the reply dialog
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false); // Control delete confirmation dialog
  const [selectedLeadForDeletion, setSelectedLeadForDeletion] = useState(null); // Track lead selected for deletion
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [replyMessage, setReplyMessage] = useState(""); // Track the reply message

  // Function to fetch leads from Firestore
  const fetchData = async () => {
    setLoading(true); // Set loading state
    try {
      const leadsSnap = await getDocs(collection(db, "leads"));
      const leadList = leadsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeads(leadList);
    } catch (error) {
      console.error("Error fetching leads: ", error);
    }
    setLoading(false); // Reset loading state
  };

  // Function to delete a lead by its ID
  const deleteLead = async () => {
    try {
      if (selectedLeadForDeletion) {
        await deleteDoc(doc(db, "leads", selectedLeadForDeletion));
        fetchData(); // Re-fetch leads after deletion
        setIsDeleteConfirmOpen(false); // Close confirmation dialog
        setSelectedLeadForDeletion(null); // Reset selected lead
      }
    } catch (error) {
      console.error("Error deleting lead: ", error);
    }
  };

  // Function to open the dialog and load the selected lead's data for editing
  const handleEditLead = (lead) => {
    setEditingLead(lead.id);
    setFormData({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phoneNumber: lead.phoneNumber,
      message: lead.message,
    });
    setIsDialogOpen(true); // Open the dialog
  };

  // Function to handle changes in the edit form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to update the lead in Firestore
  const handleUpdateLead = async (e) => {
    e.preventDefault();
    try {
      const leadDocRef = doc(db, "leads", editingLead);
      await updateDoc(leadDocRef, formData);
      fetchData(); // Re-fetch leads to reflect the update
      setIsDialogOpen(false); // Close the dialog
    } catch (error) {
      console.error("Error updating lead: ", error);
    }
  };

  // Function to open the reply dialog
  const handleReplyLead = (lead) => {
    setEditingLead(lead.id);
    setIsReplyDialogOpen(true); // Open the reply dialog
  };

  // Send message via WhatsApp
  const sendWhatsApp = () => {
    const phoneNumber = formData.phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(replyMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Send message via Email
  const sendEmail = () => {
    const mailtoLink = `mailto:${formData.email}?subject=Reply&body=${encodeURIComponent(replyMessage)}`;
    window.open(mailtoLink, "_blank");
  };

  // Function to open delete confirmation dialog
  const handleDeleteConfirm = (id) => {
    setSelectedLeadForDeletion(id);
    setIsDeleteConfirmOpen(true); // Open confirmation dialog
  };

  // Fetch leads on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      {loading ? (
        <p>Loading leads...</p>
      ) : leads.length > 0 ? (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="py-2 px-4 border-b">{lead.firstName}</td>
                <td className="py-2 px-4 border-b">{lead.lastName}</td>
                <td className="py-2 px-4 border-b">{lead.email}</td>
                <td className="py-2 px-4 border-b">{lead.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{lead.message}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEditLead(lead)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleReplyLead(lead)}
                  >
                    Reply
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteConfirm(lead.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leads found.</p>
      )}

      {/* Edit Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">Edit Lead</h2>
            <form onSubmit={handleUpdateLead}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                required
              ></textarea>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reply Dialog Box */}
      {isReplyDialogOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">Reply to Lead</h2>
            <textarea
              placeholder="Type your message here..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={sendWhatsApp}
              >
                Send via WhatsApp
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={sendEmail}
              >
                Send via Email
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsReplyDialogOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this lead?</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={deleteLead}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsDeleteConfirmOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
