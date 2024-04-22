import React ,{useEffect,useState}from 'react';
import { Link, useParams } from 'react-router-dom';
import JobDetails from './JobDetails';
import Header from '../../../commonCompo/Header';
import Footer from '../../../auth/components/Footer';
import axios from 'axios';
import { loginStorage } from '../../../LoginStorage';


const OpenJobDetails = () => {
  const { jobId } = useParams();
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const student_id=isLoggedIn?loginStorage.details.id:'';
  console.log(jobId);
  document.title = "Apply [Placement Module]";
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(`/api/studentprofile/getJobById/${jobId}`);
        if (response.status === 200) {
          const data = response.data;
          setJobDetails({
            title: data.title,
            Company_name: data.company.name,
            Industry: data.company.industry,
            location: data.company.location,
            HR_Name: `${data.company.hr.firstName} ${data.company.hr.middleName ? data.company.hr.middleName : ''} ${data.company.hr.lastName}`,
            HR_Email: data.company.hr.email,
            job_discription: data.description,
            requirment: data.requirements,
          });
        } else {
          console.error('Error fetching job details:', response);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchData();
  }, [jobId]);
  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  const labels = {
    title: "Job Title",
    Company_name: "Company",
    Industry: "Industry",
    location: "Location",
    HR_Name: "HR Name",
    HR_Email: "HR Email",
  };

  const { job_discription, requirment, ...filteredJobDetails } = jobDetails;
  return (
    <>
        <Header/>

<div className="container mx-auto px-4 m-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">JOB DETAILS</h1>
    <hr className="border-gray-300 mb-4" />
    <div className={`bg-white rounded-lg shadow-lg mb-8`}>
      <div className='lg:flex gap-10 p-6'>
        <div className="lg:w-1/3 w-full flex items-center justify-center">
          <label className="w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
            <img src='https://via.placeholder.com/150' alt="Your Image" className="h-full w-full object-cover rounded-lg" />
          </label>
        </div>
        <div className='lg:w-2/3 w-full'>
          <div>
            {Object.entries(filteredJobDetails).map(([key, value]) => (
              <ul key={key}>
                <li className="text-lg text-gray-900 mb-4">
                  <strong>{labels[key]}:</strong> {value}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="block mb-2 text-xl font-medium text-gray-900 px-6">Job Description</h1>
        <div className="p-4 text-sm text-gray-900 bg-gray-100">{jobDetails.job_discription}</div>
      </div>
      <div className=''>
        <h1 className="block mb-2 text-xl font-medium text-gray-900 px-6">Requirement</h1>
        <div className="p-4 text-sm text-gray-900 bg-gray-100">
          {jobDetails.requirment}
        </div>
        <div className='text-center '><button className='text-center bg-black hover:bg-stone-400'><Link to={'/applyJob'} className='text-white no-underline'>Apply Now</Link></button></div>
      </div>
    </div>
  </div>
  
<Footer/>

    </>
  )
}

export default OpenJobDetails