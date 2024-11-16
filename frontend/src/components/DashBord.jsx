import React from 'react'
// import axios from "axios"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  return (
    <div id='navbar' className='bg-neutral-200 shadow-md p-4'>
  
      <ul className='inline-flex items-center gap-8'>
      <a href="/" className="text-gray-700 hover:text-blue-500" >Home</a>
        <li>
          <Button variant="text">
            <Link to='/contacts' className='text-gray-700 hover:text-blue-500'>Create Contacts</Link>
          </Button>
        </li>
        <li>
          <Button variant="text">
            <Link to='/contacts-list' className='text-gray-700 hover:text-blue-500'>Contacts List</Link>
          </Button>
        </li>
      </ul>
      <h1 className='text-2xl font-bold mt-6 text-center '>Dashboard</h1>
      <p className='text-center'>Welcome to the CRM</p>

    </div>

  )
}

export default DashBord