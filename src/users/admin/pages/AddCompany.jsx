import React, { useState } from "react";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      // Clear form after successful submission
      setName("");
      setIndustry("");
      setDescription("");
      setLocation("");
      setHrFirstName("");
      setHrMiddleName("");
      setHrLastName("");
      setHrEmail("");
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

        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hrFirstName">HR First Name:</label>
          <input
            type="text"
            id="hrFirstName"
            value={hrFirstName}
            onChange={(e) => setHrFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hrMiddleName">HR Middle Name:</label>
          <input
            type="text"
            id="hrMiddleName"
            value={hrMiddleName}
            onChange={(e) => setHrMiddleName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hrLastName">HR Last Name:</label>
          <input
            type="text"
            id="hrLastName"
            value={hrLastName}
            onChange={(e) => setHrLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hrEmail">HR Email:</label>
          <input
            type="email"
            id="hrEmail"
            value={hrEmail}
            onChange={(e) => setHrEmail(e.target.value)}
          />
        </div>

        <button className="add-company-btn" type="submit">
          Add Company
        </button>
      </form>
    </div>
  );
};

export default AddCompany;
