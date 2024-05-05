import React from "react";
function UserDetails(){
    return(
        <>
        <div>
            <h1>Your Achievement Information</h1>
            <p>Enter the details to proceed further</p>
            <form action="">
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="Enter first name"/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="firstname"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Gender</label>
                    <div>
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female"  />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
                </div>
            </form>
        </div>
        </>
    );
}
export default UserDetails;