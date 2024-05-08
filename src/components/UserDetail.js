import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'; // Import the plus circle icon

function UserDetail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    achievementName: '',
    category: '',
    achievementDate: '',
    description: '',
    eventName: '',
    eventVenue: '',
    eventDate: '',
    eventDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user-detail');
  };

  return (
    <div className="mx-auto mb-5 mt-5 max-w-lg p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="border border-gray-300 bg-gray-100 shadow-md w-full rounded-lg mb-6">
        <h2 className="text-center lg:text-xl sm:text-sm font-bold mb-1">Your Achievements Information</h2>
        <p className="text-center text-sm italic">Enter the details to proceed further</p>
      </div>
      <div className="flex justify-between mb-4">
        <ul className="flex items-center">
          <li className="block text-center  text-black text-xs font-bold  border border-gray-400 rounded-lg bg-gray-200 w-4 h-4 mr-1  ">1</li>
          <li className="block  text-black text-xs font-bold "> User Details</li>
        </ul>
        <hr  />
        <ul className="flex items-center">
          <li className="block  text-center w-4 h-4 text-white text-xs font-bold  border border-gray-400 rounded-lg bg-gray-500 mr-1  ">2</li>
          <li className="block  text-black text-xs font-bold ">Achievement Details</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block lg:mt-5 italic text-green text-xs font-bold mb-2">Achievement Name *</label>
            <input type="text" name="achievementName" value={formData.achievementName} onChange={handleChange} placeholder="Enter achievement name" className="block text-sm w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white" required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block lg:mt-5 italic text-green text-xs font-bold mb-2">Category *</label>
            <select name="category" value={formData.category} onChange={handleChange} className="block text-sm w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white" required>
              <option value="">Select category</option>
              <option value="Academic">Academic</option>
              <option value="Sports">Sports</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
        </div>

        {/* Achievement Date */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              Achievement Date *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="appearance-none text-sm block w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block italic text-green text-xs font-bold mb-2"> Achievement Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" className="block text-sm w-11/12 bg-gray-200 text-green border border-gray-200 rounded py-1 px-3 lg:mb-3 leading-tight focus:outline-none focus:bg-white" required />
          </div>
        </div>

        {/* Event Name and Venue */}
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  italic text-green text-xs font-bold mb-2">
              Event Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="block text-sm w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block italic  text-green text-xs font-bold mb-2">
              Event Venue *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className=" block text-sm w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>

        {/* Event Date */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              Event Date *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="appearance-none text-sm block w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block italic text-green text-xs font-bold mb-2"> Event Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" className="block text-sm w-11/12 bg-gray-200 text-green border border-gray-200 rounded py-1 px-3 lg:mb-3 leading-tight focus:outline-none focus:bg-white" required />
          </div>
        </div>
        <div className='flex flex-wrap  mb-6'>
        <button type="button" className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline">
        <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
            <span className="text-xs text-green font-bold hover:text-white">Add More</span>
           
          </button>
        </div>

        <div className="lg:flex lg:justify-end">
       
          <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserDetail;
