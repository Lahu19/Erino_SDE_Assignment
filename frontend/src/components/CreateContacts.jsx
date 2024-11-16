import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateContacts = () => {
    let navigate = useNavigate();
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [companyname, setCompanyName] = useState("");
    let [jobtitle, setJobTitle] = useState("");

    const formHandle = async (e) => {
        e.preventDefault();
        let payload = { fname, lname, email, phone, companyname, jobtitle };

        if (!fname || !lname || !email || !phone || !companyname || !jobtitle) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4001/contacts", payload);
            alert(response.data);
            navigate("/contacts-list");
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Failed to save contact. Please try again.");
        }
    };

    return (
        <div className="border border-red-600 max-w-[400px] mx-auto p-8 rounded-md bg-gray-50 shadow-md">
            <h1 className="text-center font-bold text-3xl mb-8 text-gray-800">Create Contact</h1>

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
                Register Me
            </button>
        </div>
    );
};

export default CreateContacts;
