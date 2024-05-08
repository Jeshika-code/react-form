import React, { useState } from "react";
// import UserDetail from './UserDetail';
import { useNavigate } from "react-router-dom";
function AchievementForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    city: "",
    country: "",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user-detail");
  };

  return (
    <div className="mx-auto mb-5 mt-5 max-w-lg  p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="border border-gray-300 bg-gray-100 shadow-md w-full rounded-lg mb-6">
        <h2 className="text-center lg:text-xl sm:text-sm font-bold mb-1">
          Your Achievements Information
        </h2>
        <p className="text-center text-sm italic">
          Enter the details to proceed further
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <ul className="flex items-center">
          <li className="block text-center  text-white text-xs font-bold  border border-gray-400 rounded-lg bg-gray-500 w-4 h-4 mr-1  ">1</li>
          <li className="block  text-black text-xs font-bold "> User Details</li>
        </ul>
        <hr  />
        <ul className="flex items-center">
          <li className="block  text-center w-4 h-4 text-black text-xs font-bold  border border-gray-400 rounded-lg bg-gray-200 mr-1  ">2</li>
          <li className="block  text-black text-xs font-bold ">Achievement Details</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block lg:mt-5 italic text-green text-xs font-bold mb-2">
              First Name *
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
            <label className="block italic lg:mt-5 text-green text-xs font-bold mb-2">
              Last Name *
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
{/* gender */}
          <div className="w-full px-3 mt-5">
            <label className="block italic text-green text-xs font-bold mb-2">
              Gender *
            </label>
            <div className="flex items-center">
              <label className="mr-4 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="mr-2 "
                  required
                />
                Male
              </label>
              <label className="mr-4 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              Date of Birth *
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
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              Country *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter country"
              className="appearance-none text-sm block w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="appearance-none text-sm block w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 ">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="appearance-none block w-4/5 mb-4 lg:mb-0 bg-gray-200 text-sm text-green border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 ">
            <label className="block italic tracking-wide text-green text-xs font-bold mb-2  ">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact"
              className="appearance-none block text-sm w-4/5 bg-gray-200 text-green border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="lg:flex lg:justify-end">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default AchievementForm;
