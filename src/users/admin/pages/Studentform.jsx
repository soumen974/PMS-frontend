import React, { useState } from "react";
import axios from "axios";


const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [campus, setCampus] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/addStudentadmin",
        {
          studentName: name,
          email: email,
          branch: branch,
          campus: campus,
          school: school,
          password: password, // Include password in form data
        }
      );
        console.log("Student added successfully!");
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setBranch("");
        setCampus("");
        setSchool("");
        setPassword(""); // Clear password field
      }catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div
      className="student-form-container"
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Add New Student
      </h1>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="branch"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Branch:
          </label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
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
          <label
            htmlFor="campus"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Campus:
          </label>
          <select
            id="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
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
          <label
            htmlFor="school"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            School:
          </label>
          <select
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          >
            <option value="">Select School</option>
            <option value="SOET">SOET</option>
            <option value="SOM">SOM</option>
            <option value="SOFS">SOFS</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
