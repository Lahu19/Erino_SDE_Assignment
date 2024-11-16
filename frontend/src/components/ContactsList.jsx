import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

//  getting data from the DB to React

const ContactsList = () => {
  let [infoFromDB, setinfoFromDB] = useState([])
  let [reload, setReload] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:4001/contacts-list")
      .then((e) => {
        setinfoFromDB(e.data)
      })
      .catch((e) => {
        console.log("error from Contact List useEffect");
      })
    setReload(1)

  }, [reload])
  let deleteUser = (e) => {
    axios.delete(`http://localhost:4001/contacts-list/${e}`)
    setReload(2)
  }

  return (
    <div className='w-screen p-4'>
        <h1 className="text-center font-bold text-3xl mb-8 text-gray-800">Contact List</h1>
      <p className='text-lg font-semibold text-gray-700 mb-4'>Total Count: {infoFromDB.length}</p>
      <table className='w-full border border-gray-300 bg-white shadow-md rounded-md'>
        <thead className='bg-gray-200 border-b border-gray-300'>
          <tr>
            <th className='px-5 py-3 text-gray-700 font-medium'>Unique Id</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>First Name</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Last Name</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Email</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Phone</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Company Name</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Job Title</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center text-sm text-gray-600'>
          {infoFromDB.map((item, i) => (
            <tr key={item.id} className='border-b last:border-0 hover:bg-gray-100'>
              <td className='px-5 py-3 border-r'>{i + 1}</td>
              <td className='px-5 py-3 border-r'>{item.fname}</td>
              <td className='px-5 py-3 border-r'>{item.lname}</td>
              <td className='px-5 py-3 border-r'>{item.email}</td>
              <td className='px-5 py-3 border-r'>{item.phone}</td>
              <td className='px-5 py-3 border-r'>{item.companyname}</td>
              <td className='px-5 py-3 border-r'>{item.jobtitle}</td>
              <td className='px-10 py-4'>
                <Link
                  to={`/edit-contacts/${item._id}`}
                  className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 mr-4'
                >
                  Edit
                </Link>
                <Button variant='outlined' color='error' onClick={() => deleteUser(item._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default ContactsList