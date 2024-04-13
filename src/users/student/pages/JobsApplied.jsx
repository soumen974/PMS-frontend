import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../commonCompo/Header';
import Footer from '../../../auth/components/Footer';

const JobsApplied = () => {
  // Dummy data for jobs
  const jobs = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'TCS FRESHER',
      status: 'pending',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 2,
      jobTitle: 'Data Scientist',
      company: 'WIPRO',
      status: 'approved',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
        id: 3,
        jobTitle: 'TESTER',
        company: 'WIPRO',
        status: 'pending',
        imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
      },
      
    // Add more job objects as needed
  ];

  return (
    <>
    <Header/>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px', fontWeight: 'bold', fontSize: '24px', color: '#333' }}>Jobs Applied</h2>
      {jobs.map(job => (
        <div
          key={job.id}
          style={{
            width: '100%',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          <div style={{ width: '25%', padding: '10px', borderRadius: '10px 0 0 10px' }}>
            <img
              src={job.imageUrl}
              alt="Job"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
          <div style={{ padding: '10px',  width: '75%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '1px 5px',
                borderRadius: '5px',
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: job.status === 'pending' ? '#ffcc00' : '#00cc66',
              }}
            >
              {job.status === 'pending' ? 'Pending' : 'Approved'}
            </div >
            <div
            style={{
                paddingTop: '45px',
              }}
            >
              <p><strong>Job Title:</strong> {job.jobTitle}</p>
              <p><strong>Company:</strong> {job.company}</p>
            </div>
            <button
              style={{
                alignSelf: 'flex-end',
                padding: '1px 10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              <Link to={'/jobDetails'} className='no-underline text-white'>See More...</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default JobsApplied;
