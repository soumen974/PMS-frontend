import React from 'react';
import './PostJob.css';
import Header from '../../../commonCompo/Header';
import Footer from '../../../auth/components/Footer';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { loginStorage } from '../../../LoginStorage';


export const PostJob = () => {
    const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
    const hrId=isLoggedIn?loginStorage.details.id:'';
    const [title, setTitle] = useState('');
    //const [company, setCompany] = useState('');
    const [requirements, setRequirements] = useState('');
    const [description, setDescription] = useState('');
    //const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('/api/admin/getAllCompany')
    //         .then(response => {
    //             setCompanies(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching companies:', error);
    //         });
    // }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const selectedCompany = companies.find(c => c.name === company);
            // if (!selectedCompany) {
            //     throw new Error('Invalid company selected');
            // }
            if (!title || !requirements || !description) {
                throw new Error('Please enter all the fields');
            }
            const response=await axios.post(`/api/hr/postJob/${hrId}`, {
                title,
                requirements,
                description
            });
            console.log(response.status);
            if (response.status === 201) {
                navigate('/postedJob');
            } else {
                console.error('Failed to post new job:', response);
            }
            // setTitle('');
            // setCompany('');
            // setRequirements('');
            // setDescription('');
        } catch (error) {
            console.error('Error adding new job:', error);
        }
    };

  return (
    <>
      <Header/>    
      <div className="job-form-container">
      <h2 className='mt-6'>Post Job</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="company">Company:</label>
          <select
            id="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">Select</option>
            {companies.map(company => (
                <option key={company.id} value={company.name}>{company.name}</option>
            ))}
          </select>
        </div> */}
        
        <div className="form-group">
          <label htmlFor="requirements">Requirements:</label>
          <input
            type="text"
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="add-job-btn">Post Job</button>
      </form>
    </div>
         


    <Footer/>
    </>
  )
}
