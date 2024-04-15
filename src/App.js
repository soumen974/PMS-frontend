import { BrowserRouter as Router, Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import UserEntry from './auth/pages/UserEntry';
import Login from './auth/pages/Login';
// import SignUp from './auth/pages/SignUp ';
import StudentLandingLayout from './users/student/pages/StudentLandingLayout';
import StudentHome from './users/student/pages/StudentHome';
import Dashboard from './users/student/pages/Dashboard';
import HrLandingLayout from './users/hr/pages/HrLandingLayout';
import HrHome from './users/hr/pages/HrHome';
import AdminLandingLayout from './users/admin/pages/AdminLandingLayout';
import AdminHome from './users/admin/pages/AdminHome';
import Companies from './users/admin/pages/Companies';
import Profile from './users/student/pages/Profile';
import AddStudent from './users/admin/pages/AddStudent';
import JobPosting from './users/hr/pages/JobPosting';
import AccountHr from './users/hr/pages/AccountHr';
import SettingHr from './users/hr/pages/SettingHr';
import Jobs from './users/admin/pages/Jobs';
import  {AddNewJob}  from './users/admin/pages/AddNewJob';
import JobsApplied from './users/student/pages/JobsApplied.jsx';
import AddCompany from './users/admin/pages/AddCompany.jsx';
import JobDetails from './users/student/pages/JobDetails.jsx';
import OpenJobs from './users/student/pages/OpenJobs.jsx'
import OpenJobDetails from './users/student/pages/OpenJobDetails.jsx';
import ApplyJob from './users/student/pages/ApplyJob.jsx';
import PostedJob from './users/hr/pages/PostedJob.jsx'
import HR_StudentDetails from './users/hr/pages/HR_StudentDetails.jsx';
import {PostJob} from './users/hr/pages/PostJob.jsx';

// import ApplyJob, { ApplyForJob } from './users/student/pages/ApplyForJob.jsx';
import { ApplyForJob } from './users/student/pages/ApplyForJob.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Entry Links */}
          <Route path="/" element={<UserEntry />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}



        {/* Student Links */}
        <Route
          path="/Student"
          element={<StudentLandingLayout />}
        >
        {/* <Route path="/Student/Home" element={<StudentHome/>} /> */}    
        </Route>
        <Route path="/Student/Home" element={<StudentHome/>} />
        <Route path="/jobsApplied" element={<JobsApplied/>}/>
        {/* <Route path="/jobDetails" element={<JobDetails/>}/> */}
        <Route path="/jobDetails/:jobId" element={<JobDetails />} />
        <Route path='/openJobs' element={<OpenJobs/>}/>
        <Route path='/openJobDetails/:jobId' element={<OpenJobDetails/>}/>
        <Route path='/applyJob' element={<ApplyJob/>}/>
        <Route path="/applyForJob" element={<ApplyForJob/>}/>
       


        {/* HR Links */}
        <Route path="/HR" 
          element={<HrLandingLayout/>}
        />
          <Route path="/HR/Home" element={<HrHome/>} />
          <Route path="/HR/jobposting" element={<JobPosting/>} />
          <Route path="/HR/account" element={<AccountHr/>} />
          <Route path="/HR/settings" element={<SettingHr/>} />
          <Route path="/postedJob" element={<PostedJob/>}/>
          <Route path="/postJob" element={<PostJob/>}/>
          <Route path="/Hr/studentDetails" element={<HR_StudentDetails/>}/>
             


        {/* Admin Links */}
        <Route path="/Admin" 
          element={<AdminLandingLayout/>}
        />
           <Route path="/Admin/Home" element={<AdminHome/>} />
           <Route path="/Admin/Companies" element={<Companies/>} />
           <Route path="/jobs" element={<Jobs/>}/>
           <Route path='/addNewJob' element={<AddNewJob/>}/>
           <Route path='/addStudent' element={<AddStudent/>}/>
           <Route path='/addCompany' element={<AddCompany/>}/>

       
        <Route path="/profile" element={<Profile/>}></Route>
        
      </Routes>
      
      
      
    </BrowserRouter>
    {/* <AddStudent /> */}
    </>
  );
}

export default App;

