import React, { useState } from "react";
import Header from "../../../commonCompo/Header";

function ProfileDetail({ label, value, onChange, editMode }) {
  const handleChange = (e) => {
    onChange(label, e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Assuming you only allow uploading one file
    const reader = new FileReader();
    reader.onload = () => {
      onChange(label, reader.result); // Set the value to the base64 representation of the image
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <span style={{ fontWeight: 'bold', width: '120px' }}>{label}:</span>{" "}
      {!editMode && <span style={{ width: '80px' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
      {label === "Profile Icon" ? (
        editMode ? (
          <input type="file" onChange={handleFileChange} accept="image/*" />
        ) : (
          <img src={value} alt={label} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #ccc' }} />
        )
      ) : label === "10th Marks" || label === "12th Marks" ? (
        editMode ? (
          <input type="file" onChange={handleFileChange} accept="application/pdf,image/*" />
        ) : (
          <span>{value ? "Uploaded" : "Not Uploaded"}</span>
        )
      ) : (
        editMode ? (
          <input type="text" value={value} onChange={handleChange} style={{ border: '1px solid #ccc', borderRadius: '3px', padding: '5px', width: '150px' }} />
        ) : (
          <span>{value}</span>
        )
      )}
    </div>
  );
}

function ProfileDetailsColumn({ profileData, editMode, onChange }) {
  const midIndex = Math.ceil(profileData.length / 2);
  const columnOne = profileData.slice(0, midIndex);
  const columnTwo = profileData.slice(midIndex);

  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {columnOne.map((data, index) => (
          <ProfileDetail
            key={index}
            label={data.label}
            value={data.value}
            editMode={editMode}
            onChange={onChange}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px' }}>
        {columnTwo.map((data, index) => (
          <ProfileDetail
            key={index}
            label={data.label}
            value={data.value}
            editMode={editMode}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

function ProfileDetailsSection() {
  const [profileData, setProfileData] = useState([
    { label: "Profile Icon", value: "" }, // Initial value for profile icon
    { label: "First Name", value: "RASHMIKANT" },
    { label: "Regs.No", value: "210301120110" },
    { label: "Program", value: "BTECH" },
    { label: "Semester", value: "6TH" },
    { label: "CurrentBacklog", value: "0" },
    { label: "10th Marks", value: "" }, // Empty string for initial value
    { label: "Mobile No", value: "" }, // Empty string for initial value
    { label: "Father's Name", value: "ABC" },
    { label: "Last Name", value: "8/5/2002" },
    { label: "Email", value: "545" },
    { label: "Branch", value: "BBSR" },
    { label: "Campus", value: "AVM@GMAIL.COM" },
    { label: "Total Backlog", value: "CSE" },
    { label: "12th Marks", value: "" },
    { label: "DOB", value: "0" },
    { label: "Mother'sName", value: "dfa" },
    // Add other data objects here
  ]);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Here, you can perform any save action you want
  };

  const handleDetailChange = (label, newValue) => {
    const newData = profileData.map((data) =>
      data.label === label ? { ...data, value: newValue } : data
    );
    setProfileData(newData);
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: '20px', borderRadius: '10px', border: '1px solid #f59e0b', backgroundColor: '#f3f4f6' }}>
      <div style={{ marginBottom: '20px' }}>
        <ProfileDetail
          label="Profile Icon"
          value={profileData[0].value}
          onChange={handleDetailChange}
          editMode={editMode}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <ProfileDetailsColumn
          profileData={profileData.slice(1)} // Exclude profile icon from details
          editMode={editMode}
          onChange={handleDetailChange}
        />
      </div>
      <button
        style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: editMode ? '#4caf50' : '#2196f3', color: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={editMode ? handleSaveClick : handleEditClick}
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </section>
  );
}

function Profile() {
  return (
    <div>
      <Header />
      <ProfileDetailsSection />
    </div>
  );
}

export default Profile;
