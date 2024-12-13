import React, { useRef, useState } from "react";

function StudentMarks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let mobileInputRef = useRef();
  let stateInputRef = useRef();
  let [selectImage, setSelectImage] = useState("./images/background.jpg");
  return (
    <div>
      <form>
        <h1>Sign up</h1>
        <div>
          <label>First Name :</label>
          <input
            type="text"
            placeholder="Enter your first name"
            ref={firstNameInputRef}
          ></input>
        </div>
        <div>
          <label>Last Name :</label>
          <input
            type="text"
            placeholder="Enter your last name"
            ref={lastNameInputRef}
          ></input>
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter your valid email"
            ref={emailInputRef}
          ></input>
        </div>
        <div>
          <label>Mobile No :</label>
          <input
            type="number"
            placeholder="Enter your mobile no"
            ref={mobileInputRef}
          ></input>
        </div>
        <div>
          <label>State :</label>
          <select ref={stateInputRef}>
            <option>select state</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharastra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttarakhand</option>
            <option>Utter Pradesh</option>
            <option>West Bengal</option>
          </select>
        </div>
        <div>
          <label>Profile Pic :</label>
          <input
            type="file"
            multiple
            onChange={(eventObj) => {
              console.log(eventObj.target.files);

              let selectImageStr = URL.createObjectURL(
                eventObj.target.files[0]
              );
              console.log(selectImageStr);
              setSelectImage(selectImageStr);
            }}
          ></input>
        </div>
        <div>
          <img src={selectImage}></img>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let email = emailInputRef.current.value;
              let mobileNo = mobileInputRef.current.value;
              let state = stateInputRef.current.value;
              alert(
                `${firstName} ${lastName} from ${state} with ${email} and ${mobileNo}`
              );
            }}>Sign up</button>
        </div>
        <h5>If you have account? Login</h5>
      </form>
    </div>
  );
}

export default StudentMarks;
