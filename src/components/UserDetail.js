import React from "react";
function UserDetail(){
    return(
        <>
         <div className="mx-auto mt-20  max-w-lg p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-center text-xl ">Your Achievement Details</h1>
            <p className="text-center text-sm mb-4">Enter the details to proceed further </p>
            <form action="">
              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  text-gray-700 text-xs font-bold  mb-2 italic">
              First Name *
            </label>
            <input type="text" name="firstName"  placeholder="Enter first name" className="appearance-none block w-5/6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name *
            </label>
            <input type="text" name="lastName" placeholder="Enter last name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white" required />
          </div>
             
              </div>
               
                <label >
                    Gender *
                    <select name="gender" id="">
                    <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
                    </select>
                </label>
                <label>
          Date of Birth *
          <input type="date" name="dateOfBirth"required />
        </label>
        <label>
          City *
          <input type="text" name="city"  placeholder="Enter city" required />
        </label>
        <label>
          Country *
          <input type="text" name="country"  placeholder="Enter country" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          Contact Number
          <input type="number" name="contactNumber"  placeholder="Enter contact" />
        </label>
        <button type="submit">Submit</button>
            </form>
         </div>
        </>
    );
   
}
export default UserDetail;