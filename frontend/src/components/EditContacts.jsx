import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditContacts = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [jobtitle, setJobTitle] = useState("");

  const { ID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4001/contacts-list/${ID}`)
      .then((response) => {
        const data = response.data;
        setFName(data.fname);
        setLName(data.lname);
        setEmail(data.email);
        setPhone(data.phone);
        setCompanyName(data.companyname);
        setJobTitle(data.jobtitle);
      })
      .catch((error) => {
        console.error("Error fetching contact details:", error.message);
        alert("Failed to fetch contact details. Please try again.");
      });
  }, [ID]);

  const formHandle = async (e) => {
    e.preventDefault();

    // Validate fields before submitting
    if (!fname || !lname || !email || !phone || !companyname || !jobtitle) {
      alert("All fields are required!");
      return;
    }

    const payload = { fname, lname, email, phone, companyname, jobtitle };

    try {
      const response = await axios.put(`http://localhost:4001/contacts-list/${ID}`, payload);
      alert(response.data);
      navigate("/contacts-list");
    } catch (error) {
      console.error("Error updating contact:", error.response ? error.response.data : error.message);
      alert("Failed to update contact. Please try again.");
    }
  };

  return (
    <div className="border border-red-600 max-w-[400px] mx-auto p-8 rounded-md bg-gray-50 shadow-md">
      <h1 className="text-center font-bold text-3xl mb-8 text-gray-800">Update Contact</h1>

      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter First Name"
        type="text"
        value={fname}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter Last Name"
        type="text"
        value={lname}
        onChange={(e) => setLName(e.target.value)}
      />
      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter Phone Number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter Company Name"
        type="text"
        value={companyname}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        className="w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
        placeholder="Enter Job Title"
        type="text"
        value={jobtitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <button
        className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
        onClick={formHandle}
      >
        Update Changes
      </button>
      <Link
        to="/contacts-list"
        className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center block"
      >
        Go to Contacts List
      </Link>
    </div>
  );
};

export default EditContacts;
