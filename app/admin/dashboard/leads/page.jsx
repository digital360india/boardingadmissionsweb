import React, { useState } from "react";

const page = () => {
  const [leads, setLeads] = useState([]);
  const fetchData = async () => {
    const leadsSnap = await getDocs(collection(db, "leads"));
    const leadList = leadsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLeads(leadList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteLead = async (id) => {
    await deleteDoc(doc(db, "leads", id));
    fetchData();
  };
  const handleEditLead = (id) => {
    setEditingLead(id);
    setIsDialogOpen(true);
  };
  return <div>page</div>;
};

export default page;
