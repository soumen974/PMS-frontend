import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import "./AddCompany.css";

const AddCompany = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [hrFirstName, setHrFirstName] = useState("");
  const [hrMiddleName, setHrMiddleName] = useState("");
  const [hrLastName, setHrLastName] = useState("");
  const [hrEmail, setHrEmail] = useState("");
  const [error, setError] = useState(""); // State for form validation error
  const history = useNavigate(); // Initialize useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !name ||
      !industry ||
      !description ||
      !location ||
      !hrFirstName ||
      !hrLastName ||
      !hrEmail
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/addCompany",
        {
          name: name,
          industry: industry,
          description: description,
          location: location,
          hr: {
            firstName: hrFirstName,
            middleName: hrMiddleName,
            lastName: hrLastName,
            email: hrEmail,
          },
        }
      );

      console.log("Response:", response.data);

      if (response.status === 201) {
        // Navigate to Companies page if status is 201 (created)
        history.push("/Admin/Companies");
      }

      // Clear form and error state after successful submission
      setName("");
      setIndustry("");
      setDescription("");
      setLocation("");
      setHrFirstName("");
      setHrMiddleName("");
      setHrLastName("");
      setHrEmail("");
      setError("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="company-form-container">
      <h2>Add New Company</h2>
      <form onSubmit={handleSubmit} className="company-form">
        <div className="form-group">
          <label htmlFor="name">Company Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Other form fields */}
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message if there's any */}
        <button className="add-company-btn" type="submit">
          Add Company
        </button>
      </form>
    </div>
  );
};

export default AddCompany;
