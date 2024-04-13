import React from 'react';
import './Jobs.css'
import { useState ,useEffect} from 'react';
import Header from '../../../commonCompo/Header';
import Footer from '../../../auth/components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    jobId: '', // Set jobId
    companyId: '',
    title: '',
    company: '',
    description: '',
    requirements: '',
  });


  const navigate=useNavigate();

  useEffect(() => {
    axios.get('/api/admin/getAllCompany')
        .then(response => {
            setCompanies(response.data);
        })
        .catch(error => {
            console.error('Error fetching companies:', error);
        });
}, []);

useEffect(() => {
    fetchJobs();
},[showModal]);
useEffect(() => {
  console.log(formData); 
}, [formData]); 


const fetchJobs = async () => {
    try {
        const response = await axios.get('/api/admin/getAllJobs');
        setJobs(response.data);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
};

  
const handleDelete = async (jobId) => {
    try {
        const response = await axios.delete(`/api/admin/deleteJob/${jobId}`);
        if (response.status === 200) {
            fetchJobs(); // Refresh jobs after deletion
            Swal.fire('Success', 'Job deleted successfully', 'success');
        } else {
            throw new Error('Failed to delete job');
        }
    } catch (error) {
        console.error('Error deleting job:', error);
        Swal.fire('Error', 'Failed to delete job', 'error');
    }
};
  const handleClick = async (jobId) => {
    const { isConfirmed } = await Swal.fire({
        title: 'Are you sure you want to delete this job?',
        text: 'This job will be deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (isConfirmed) {
        handleDelete(jobId);
    }
  }

    const handleEdit = (job) => {
      setFormData({
        jobId: job.id, // Set jobId
        companyId: job.company.id,
        title: job.title,
        company: job.company.name,
        description: job.description,
        requirements: job.requirements,
      });
      setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormChange = (e) => {
       e.preventDefault();
        // setFormData({
        //   ...formData,
        //   [e.target.name]: e.target.value,
        // });

        // setFormData(prevState => ({
        //   ...prevState,
        //   [e.target.name]: e.target.value,
        // }));

        if (e.target.name === "company") {
          const selectedCompany = companies.find(company => company.name === e.target.value);
          setFormData(prevState => ({
            ...prevState,
            companyId: selectedCompany ? selectedCompany.id : '',
            [e.target.name]: e.target.value,
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }
        //console.log(formData); // Log the state after setting it
    };

    const handleFormSubmit = async () => {
        try {
            const { jobId, companyId, ...data } = formData; 
            const response = await axios.put(`/api/admin/updateJob/${jobId}/${companyId}`, {title:formData.title,requirements:formData.requirements,description:formData.description});
            if (response.status === 200) {
              setShowModal(false);
              Swal.fire('Success', 'Job updated successfully', 'success');
              navigate('/jobs'); // Navigate to "/jobs" after successful update
            } else {
              throw new Error('Failed to update job');
            }
        } catch (error) {
            console.error('Error updating job:', error);
            Swal.fire('Error', 'Failed to update job', 'error');
        }
        //setShowModal(false);
    };
  

  
  return (
    <>
      <Header/>
      <header className="header">
        <h1>Jobs</h1>
        <Link to={'/addNewJob'}><button className="add-job-btn ">Add new job</button></Link>
      </header>
<div className='m-10'>
<table className="job-table ">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Description</th>
          <th>Requirements</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
            <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.company.name}</td>
                <td>{job.description}</td>
                <td>{job.requirements}</td>
                <td>
                  <button className='btn btn-sm bg-black text-white'onClick={() => handleEdit(job)}>Edit</button>
                  <button className='btn btn-sm bg-black ms-2 text-white' onClick={handleClick}>Delete</button>
                </td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>

    
    {/* Modal */}
    <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formJobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Label className='pt-2'>Company</Form.Label>
              <Form.Control
                as="select"
                name="company"
                value={formData.company}
                onChange={handleFormChange}
              >
                {/* Options go here */}
                <option value="">Select</option>
                  {companies.map(company => (
                    <option key={company.id} value={company.name}>{company.name}</option>
                  ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label className='pt-2'>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter job description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="formRequirements">
              <Form.Label className='pt-2'>Requirements</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter job requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>






    <Footer/>
    </>
  )
}
export default Jobs