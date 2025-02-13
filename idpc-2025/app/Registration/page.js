'use client'
import Image from "next/image";
import { useState } from "react";
import logo from '@/public/Images/GUB IDPC 2025 LOGO  TRANSPARENT.png'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



const Registration = () => {
    const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    contact: "",
    department: "",
    batch: "",
    tshirtSize: "",
    transactionId: "",
  });

  const tshirtSizes = ["S", "M", "L", "XL", "XXL"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("✅ Registration successful! Check your email.", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error("❌ " + data.message, { position: "top-center" });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("❌ Failed to submit. Please try again.", { position: "top-center" });
  }
};

  
  

  const handleClear = () => {
    setFormData({
      name: "",
      id: "",
      email: "",
      contact: "",
      department: "",
      batch: "",
      tshirtSize: "",
      transactionId: "",
    });
  };

  return (
    <div className="mt-16 text-white min-h-screen py-8 px-4 flex justify-center">
      <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
      <ToastContainer />

        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Registration Form</h2>
        
        {/* Event Details */}
       <div className="bg-gray-700 p-5 rounded-md flex flex-col md:flex-row items-center justify-evenly">
       <div className=" p-4 rounded-lg mb-6">
          <p className="text-lg font-semibold text-yellow-400">📌 Event Details:</p>
          <ul className="mt-2 text-sm space-y-1">
            <li>✔️ <b>Registration Fee:</b> 130 BDT (including all charges)</li>
            <li>✔️ <b>Payment Method:</b> bKash</li>
            <li>✔️ <b>Payment Deadline:</b> 15th February, 11:59 PM</li>
          </ul>
        </div>
        <div className="md:w-32 w-52 ">
                        <Image 
                          src={logo} 
                          alt="IDPC 2025" 
                          width={600} 
                          height={400} 
                          className="w-full h-24 md:h-20 bg-white p-5 border rounded-lg"
                        />
                      </div>
       </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="University ID" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact No" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="text" name="batch" value={formData.batch} onChange={handleChange} placeholder="Batch" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          
          {/* T-shirt Size Dropdown */}
          <select name="tshirtSize" value={formData.tshirtSize} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required>
            <option value="">Select T-Shirt Size</option>
            {tshirtSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} placeholder="Transaction ID" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />

          {/* Buttons */}
          <div className="flex justify-between">
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
            <button type="button" onClick={handleClear} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">Clear Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
