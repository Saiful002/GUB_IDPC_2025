'use client'
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const AdminPage = () => {
  const [registrations, setRegistrations] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/registrations");
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchData();
  }, []);

  // Function to download data as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(registrations);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

    // Save file
    XLSX.writeFile(workbook, "registrations.xlsx");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Registrations</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">University ID</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Contact</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Batch</th>
              <th className="p-2 border">T-Shirt Size</th>
              <th className="p-2 border">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr key={reg.id} className="text-center border">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{reg.name}</td>
                <td className="p-2 border">{reg.id}</td>
                <td className="p-2 border">{reg.email}</td>
                <td className="p-2 border">{reg.contact}</td>
                <td className="p-2 border">{reg.department}</td>
                <td className="p-2 border">{reg.batch}</td>
                <td className="p-2 border">{reg.tshirtSize}</td>
                <td className="p-2 border">{reg.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadExcel}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        📥 Download Excel
      </button>
    </div>
  );
};

export default AdminPage;
