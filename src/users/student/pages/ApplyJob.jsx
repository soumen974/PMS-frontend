import React, { useState } from 'react';
import './ApplyJob.css';

export const ApplyJob = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cvFile, setCVFile] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ name,email,cvFile });
    setName('');
    setEmail('');
    setCVFile('');
  };

  return (
    <div className="job-form-container">
      <h2>Apply For Job</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          type="text"
            id="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
        </div>
        
        <div className="form-group">
          <label htmlFor="cvFile">Upload CV:</label>
          <input
            type="file"
            id="cv"
            accept='.pdf,doc,.docx'
            onChange={(e) => setCVFile(e.target.value[0])}required
          />
        </div>
        

        <button type="submit">Apply Job</button>
      </form>
    </div>
  );
};

export default ApplyJob;