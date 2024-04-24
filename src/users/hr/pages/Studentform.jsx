import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [campus, setCampus] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/addStudents",
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          branch: branch,
          campus: campus,
          school: school,
          password: password, // Include password in form data
        }
      );

      console.log("Student added successfully!");
      // Reset form fields after successful submission
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setEmail("");
      setBranch("");
      setCampus("");
      setSchool("");
      setPassword(""); // Clear password field
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="student-form-container" style={containerStyle}>
      <h1 style={titleStyle}>Add New Student</h1>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="firstName" style={labelStyle}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group">
          <label htmlFor="middleName" style={labelStyle}>
            Middle Name:
          </label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" style={labelStyle}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Other form fields */}
        {/* Email, branch, campus, school, password */}
        <div className="form-group">
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group">
          <label htmlFor="branch" style={labelStyle}>
            Branch:
          </label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="AERO">AERO</option>
            <option value="EEE">EEE</option>
            <option value="MIN">MIN</option>
            <option value="CIVIL">CIVIL</option>
            <option value="BIOTECH">BIOTECH</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="campus" style={labelStyle}>
            Campus:
          </label>
          <select
            id="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Campus</option>
            <option value="BBSR">BBSR</option>
            <option value="VIZAG">VIZAG</option>
            <option value="CHATRAPUR">CHATRAPUR</option>
            <option value="PKD">PKD</option>
            <option value="BALASORE">BALASORE</option>
            <option value="BOLANGIR">BOLANGIR</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="school" style={labelStyle}>
            School:
          </label>
          <select
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select School</option>
            <option value="SOET">SOET</option>
            <option value="SOM">SOM</option>
            <option value="SOFS">SOFS</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password" style={labelStyle}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Add Student
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  width: "50%",
  margin: "auto",
  border: "2px solid rgb(127 29 29)",
  padding: "20px",
  borderRadius: "10px",
};

const titleStyle = {
  textAlign: "center",
  color: "rgb(127 29 29)",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  color: "#666",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "rgb(127 29 29)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};



export default StudentForm;
