"use client";
import { db } from "@/firebase/firebase";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { PiDotsThreeBold, PiWhatsappLogo } from "react-icons/pi";
import { MdOutgoingMail } from "react-icons/md";
import { FaReply, FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const Page = () => {
  const [leads, setLeads] = useState([]);
  const [naCount, setNaCount] = useState(0);
const [hotCount, setHotCount] = useState(0);
const [coldCount, setColdCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [editingLead, setEditingLead] = useState(null); 
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false); 
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false); 
  const [selectedLeadForDeletion, setSelectedLeadForDeletion] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    disposition: "NA" // Default disposition
  });
  const [replyMessage, setReplyMessage] = useState(""); 
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which lead's dropdown is open
  const [dispositionMenuOpen, setDispositionMenuOpen] = useState(null); // Track which lead's disposition menu is open
  const [messagePopupOpen, setMessagePopupOpen] = useState(null); // Track which lead's message popup is open
  const openMessagePopup = (leadId) => {
    setMessagePopupOpen(leadId);
  };
  
  const closeMessagePopup = () => {
    setMessagePopupOpen(null);
  };
  


  const fetchData = async () => {
    setLoading(true);
    try {
      const leadsSnap = await getDocs(collection(db, "leads"));
      const leadList = leadsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeads(leadList);
  
      // Calculate counts
      const naLeads = leadList.filter(lead => lead.disposition === "NA").length;
      const hotLeads = leadList.filter(lead => lead.disposition === "Hot").length;
      const coldLeads = leadList.filter(lead => lead.disposition === "Cold").length;
  
      setNaCount(naLeads);
      setHotCount(hotLeads);
      setColdCount(coldLeads);
    } catch (error) {
      console.error("Error fetching leads: ", error);
    }
    setLoading(false);
  };
  

  const deleteLead = async () => {
    try {
      if (selectedLeadForDeletion) {
        await deleteDoc(doc(db, "leads", selectedLeadForDeletion));
        fetchData();
        setIsDeleteConfirmOpen(false);
        setSelectedLeadForDeletion(null);
      }
    } catch (error) {
      console.error("Error deleting lead: ", error);
    }
  };

  const handleEditLead = (lead) => {
    setEditingLead(lead.id);
    setFormData({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phoneNumber: lead.phoneNumber,
      message: lead.message,
      disposition: lead.disposition || "NA" // Default to "NA" if not set
    });
    setIsDialogOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateLead = async (e) => {
    e.preventDefault();
    try {
      const leadDocRef = doc(db, "leads", editingLead);
      await updateDoc(leadDocRef, formData);
      fetchData();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error updating lead: ", error);
    }
  };

  const handleReplyLead = (lead) => {
    setEditingLead(lead.id);
    setFormData({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phoneNumber: lead.phoneNumber,
      message: lead.message,
      disposition: lead.disposition || "NA" // Default to "NA" if not set
    });
    setReplyMessage(""); // Reset replyMessage when opening reply dialog
    setIsReplyDialogOpen(true);
  };

  const sendWhatsApp = () => {
    const phoneNumber = formData.phoneNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(replyMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendEmail = () => {
    const mailtoLink = `mailto:${formData.email}?subject=Reply&body=${encodeURIComponent(replyMessage)}`;
    window.open(mailtoLink, "_blank");
  };

  const handleDeleteConfirm = (id) => {
    setSelectedLeadForDeletion(id);
    setIsDeleteConfirmOpen(true);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  const toggleDispositionMenu = (id) => {
    setDispositionMenuOpen((prev) => (prev === id ? null : id));
  };

  const handleDispositionChange = async (leadId, disposition) => {
    try {
      const leadDocRef = doc(db, "leads", leadId);
      await updateDoc(leadDocRef, { disposition });
      fetchData();
    } catch (error) {
      console.error("Error updating disposition: ", error);
    }
    setDispositionMenuOpen(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">NA Leads</h3>
      <p className="text-xl font-bold">{naCount}</p>
    </div>
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">Hot Leads</h3>
      <p className="text-xl font-bold">{hotCount}</p>
    </div>
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">Cold Leads</h3>
      <p className="text-xl font-bold">{coldCount}</p>
    </div>
  </div>
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
              <th className="py-2 px-4 border-b">Disposition</th>
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
      <td className="py-2 px-4 border-b">
        <button
          className="text-blue-500"
          onClick={() => openMessagePopup(lead.id)}
        >
          See Message
        </button>
      </td>
      <td className="py-2 px-4 border-b">
        <div className="relative">
          <button
            className="text-black px-2 py-1 rounded"
            onClick={() => toggleDispositionMenu(lead.id)}
          >
            {lead.disposition || "NA"}
          </button>
          {dispositionMenuOpen === lead.id && (
            <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg z-50">
              <button
                className="block w-full text-left px-4 py-2 text-green-500 hover:bg-gray-100"
                onClick={() => handleDispositionChange(lead.id, "Hot")}
              >
                Hot
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                onClick={() => handleDispositionChange(lead.id, "Cold")}
              >
                Cold
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-500 hover:bg-gray-100"
                onClick={() => handleDispositionChange(lead.id, "NA")}
              >
                NA
              </button>
            </div>
          )}
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div className="relative">
          <button
            className="text-black px-2 py-1 rounded"
            onClick={() => toggleDropdown(lead.id)}
          >
            <PiDotsThreeBold className="text-[35px]" />
          </button>
          {dropdownOpen === lead.id && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50">
              <button
                className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                onClick={() => handleEditLead(lead)}
              >
                <p className="flex gap-6">
                  <p>Edit</p>
                  <p className="flex justify-center items-center">
                    <FaEdit />
                  </p>
                </p>
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-green-500 hover:bg-gray-100"
                onClick={() => handleReplyLead(lead)}
              >
                <p className="flex gap-4">
                  Reply
                  <p className="flex justify-center items-center">
                    <FaReply />
                  </p>
                </p>
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                onClick={() => handleDeleteConfirm(lead.id)}
              >
                <p className="flex gap-4">
                  Delete
                  <p className="flex justify-center items-center">
                    <MdDeleteSweep />
                  </p>
                </p>
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  ))}
</tbody>
{/* Message Popup */}
{messagePopupOpen && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-md w-96">
      <h2 className="text-xl font-bold mb-4">Message from {leads.find(lead => lead.id === messagePopupOpen)?.firstName}</h2>
      <p>{leads.find(lead => lead.id === messagePopupOpen)?.message}</p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={closeMessagePopup}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

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
              <select
                name="disposition"
                value={formData.disposition}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
              >
                <option value="NA">NA</option>
                <option value="Hot">Hot</option>
                <option value="Cold">Cold</option>
              </select>

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
          <div className="bg-white p-6 rounded-md w-[700px]">
            <h2 className="text-xl font-bold mb-4">Reply to {formData.firstName} {formData.lastName}</h2>
            {/* <textarea
              placeholder="Type your message here..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="border p-2 mb-4 w-full"
            /> */}
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={sendWhatsApp}
              >
                <p className="flex gap-4">
                  Send via WhatsApp
                  <p className="flex justify-center items-center">
                    <PiWhatsappLogo className="text-[20px]" />
                  </p>
                </p>
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={sendEmail}
              >
                <p className="flex gap-4">
                  Send via Email
                  <p className="flex justify-center items-center">
                    <MdOutgoingMail className="text-[20px]" />
                  </p>
                </p>
              </button>
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded"
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


