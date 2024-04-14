import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../commonCompo/Header';
import Footer from '../../../auth/components/Footer';
import { loginStorage } from '../../../LoginStorage';
import axios from 'axios';

const JobsApplied = () => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const student_id=isLoggedIn?loginStorage.details.id:'';
  const [appliedJobs, setAppliedJobs] = useState([]);
  //console.log(student_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/studentprofile/appliedJobs/${student_id}`);
        if (response.status === 200 && response.data.length > 0) {
          setAppliedJobs(response.data);
        } else {
          setAppliedJobs([]);
        }
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, student_id]);

  return (
    <>
    <Header/>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px', fontWeight: 'bold', fontSize: '24px', color: '#333' }}>Jobs Applied</h2>
      {appliedJobs.length > 0 ? (
          appliedJobs.map(job => (
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
              src='https://via.placeholder.com/150'
              alt="Job"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
          <div style={{ padding: '10px',  width: '75%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div
            style={{
                paddingTop: '45px',
              }}
            >
              <p><strong>Job Title:</strong> {job.title}</p>
              <p><strong>Company:</strong> {job.company.name}</p>
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
              <Link to={`/jobDetails/${job.id}`} className='no-underline text-white'>See More...</Link>
            </button>
          </div>
        </div>
      ))
    ) : (
      <p style={{ textAlign: 'center', fontSize: '18px' }}>You have not applied for any jobs yet.</p>
    )}
    </div>
    <Footer/>
    </>
  );
};

export default JobsApplied;
