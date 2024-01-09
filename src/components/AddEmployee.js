import React, { useState } from "react";
import { saveEmployee } from "../Services/saveEmployee";
export default function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  function handleOnChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setEmployeeData((prevEmployeeData) => {
      const updatedEmployeeData = { ...prevEmployeeData };
      updatedEmployeeData[name] = value;
      return updatedEmployeeData;
    });
  }

  function saveEmployeeData() {
    saveEmployee(employeeData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  return (
    <div>
      <h2> Add New Employee</h2>
      <div className="addEmployee">
        <div>
          <label>FirstName:</label>
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label>LastName:</label>
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="emailId"
            value={employeeData.emailId}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <span>
            <button onClick={saveEmployeeData}>Save</button>
          </span>
          <span>
            <button>Clear</button>
          </span>
        </div>
      </div>
    </div>
  );
}
