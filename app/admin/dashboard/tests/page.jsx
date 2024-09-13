"use client";
import React, { useState, useEffect } from 'react';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/firebase'; // Ensure this import path is correct

const TestPage = () => {
  const router = useRouter();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [input,setInput]= useState("");
  const [searchActive,setSearchActive] = useState(false);
  const [results,setResults]= useState([]);
  const initial ={
    show:false,
    id:''
  }
  const [deletePopup,setDeletePopup] = useState(initial);
  const [newTest, setNewTest] = useState({
    testTitle: '',
    duration: '',
    testDescription: '',
    testUploadDate: ''
  });


    const fetchTests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tests"));
        const testList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTests(testList);
      } catch (err) {
        setError("Failed to fetch tests. Please try again.");
        console.error("Error fetching tests:", err);
      } finally {
        setLoading(false);
      }
    };
useEffect(()=>{ fetchTests();},[]);
   

  const handleAddQuestions = (testId) => {
    router.push(`/admin/dashboard/tests/${testId}`);
  };

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTest({
      ...newTest,
      [name]: value
    });
  };

  const handleAddTest = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tests'), newTest);
      alert('Test added successfully!');
      handleCloseDialog();
      // Fetch tests again to update the list
      const querySnapshot = await getDocs(collection(db, 'tests'));
      const testList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTests(testList);
    } catch (err) {
      console.error('Error adding test:', err);
      alert('Failed to add test.');
    }
  };

  if (loading) {
    return <p>Loading tests...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!Array.isArray(tests) || tests.length === 0) {
    return <p>No tests available.</p>;
  }

  const handleDelete = async (testId) => {

    try {
     
      await deleteDoc(doc(db, "tests", testId));
      alert("Test is deleted");
   setDeletePopup({...deletePopup,'show':false});
  fetchTests();
   

    } catch (err) {
      console.error("Error deleting test:", err);
      alert("Failed to delete question.");
    } 
  };






function filterData(value)
{
const results = tests.filter((test)=>{
  const includes= test.testTitle.toLowerCase().includes(value.toLowerCase());
return includes
});
console.log(results);
setResults(results);
}

  const handleChange = (value) => {
    setInput(value);
  filterData(value);
  };



  return (
    <div className="space-y-4">
     <div className={`fixed ${deletePopup.show?`block`:`hidden`}  flex h-[75vh] w-[78vw] z-20 justify-center items-center`}>
     <div className='h-[75vh] z-20 w-[78vw]  bg-black opacity-70 '>
      </div>
      <div className='h-[150px] flex flex-col justify-center fixed gap-5 w-[250px] text-center rounded-md opacity-100 z-30 bg-white '>
        <p className='text-xl'>Are you Sure to Delete ?</p>
        <div className='h-[50px] w-full flex gap-3 text-lg text-white font-semibold justify-center'> <button onClick={()=>{handleDelete(deletePopup.id)}} className='h-[40px] w-[80px] bg-red-500 hover:bg-red-600 rounded-lg' >Yes</button> <button onClick={()=>{setDeletePopup({...deletePopup,"show":false}); document.body.style.overflow='auto'}} className='h-[40px] w-[80px] bg-blue-500 hover:bg-blue-600 rounded-lg'>No</button></div>
      </div>
     </div>
     <div className='flex items-center w-full   gap-10 h-[70px]'>
     <button
        onClick={handleOpenDialog}
        className="bg-green-500 h-[40px] w-[120px] p-2 mb-2 text-white rounded-md mt-4 hover:bg-green-600"
      >
        Add New Test
      </button>
<div className='flex items-center gap-2 h-[60px]  w-[500px] '>
<input
            type="text"
            placeholder="Search"
          onChange={(e)=>{handleChange(e.target.value)}}
          value={input}
            className={` duration-300 ${searchActive?`w-[450px] opacity-100`:`w-[0px] opacity-0`} text-base font-light bg-slate-100 placeholder:text-black h-[45px] px-2 outline-none rounded-l-lg `}
          />
          <img onClick={()=>{setSearchActive(!searchActive)}} className='duration-100 h-[30px] hover:scale-125 ' src="/icons/search.svg" alt="" />
</div>
      
     </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Test</h2>
            <form onSubmit={handleAddTest} className="space-y-4">
              <div>
                <label className="block text-gray-700">Test Title:</label>
                <input
                  type="text"
                  name="testTitle"
                  value={newTest.testTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newTest.duration}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Test Description:</label>
                <textarea
                  name="testDescription"
                  value={newTest.testDescription}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Test Upload Date:</label>
                <input
                  type="date"
                  name="testUploadDate"
                  value={newTest.testUploadDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Test
              </button>
              <button
                type="button"
                onClick={handleCloseDialog}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
<div className=" rounded-md shadow-md"> {/* Wrapper to apply the rounding */}
  <table className="min-w-full border-collapse  rounded-md">
    <thead className="bg-gray-300">
      <tr className='text-xl'>
        <th className="border p-4 text-left">Test Title</th>
        <th className="border p-4 text-left">Duration</th>
        <th className="border p-4 text-left">Test Description</th>
        <th className="border p-4 text-left">Test Upload Date</th>
        <th className="border p-4 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {(searchActive?(results):(tests)).map((test,index) => (
        <tr key={test.id} className={`duration-100 border-b ${index%2!==0?`bg-gray-100`:`bg-white`} hover:bg-slate-300 text-lg`}>
          <td className="border font-bold p-4">{test.testTitle || "Untitled Test"}</td>
          <td className="border p-4">{test.duration || "N/A"}</td>
          <td className="border p-4">{test.testDescription || "N/A"}</td>
          <td className="border p-4">{test.testUploadDate || "N/A"}</td>
          <td className="border p-4 flex gap-3">
            <button
              onClick={() => handleAddQuestions(test.id)}
              className='relative bg-blue-500 text-white px-4 py-2 rounded-md after:z-50 hover:bg-blue-700 after:rounded-md  after:content-[""] hover:after:content-["Add_more_questions"] after:h-[30px] after:overflow-hidden  after:text-center after:p-1 after:w-[0px] after:shadow-lg after:bg-white after:absolute after:-left-4 after:-bottom- after:text-sm hover:after:visible hover:after:w-[140px] after:duration-200 after:invisible after:text-black'
            >
              <img src="/icons/add.svg" alt="" />
            </button>
            <button
            onClick={()=>{setDeletePopup({...deletePopup,'show':true ,'id':test.id}); document.body.style.overflow='hidden';}}
              className='relative bg-red-500 text-white px-4 py-2 rounded-md after:z-50 hover:bg-red-700 after:rounded-md  after:content-[""] hover:after:content-["Delete"] after:h-[30px] after:overflow-hidden  after:text-center after:p-1 after:w-[0px] after:shadow-lg after:bg-white after:absolute after:left-4 after:-bottom- after:text-sm hover:after:visible hover:after:w-[80px] after:duration-150 after:invisible after:text-black'
            >
              <img src="/icons/delete.svg" alt="" />
            </button>
            
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default TestPage;
