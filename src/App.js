import { BrowserRouter as Router, Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import UserEntry from './auth/pages/UserEntry';
import Login from './auth/pages/Login';
// import SignUp from './auth/pages/SignUp ';
import StudentLandingLayout from './users/student/pages/StudentLandingLayout';
import StudentHome from './users/student/pages/StudentHome';
import Profile from './users/student/pages/Profile';
import Dashboard from './users/student/pages/Dashboard';
import HrLandingLayout from './users/hr/pages/HrLandingLayout';
import HrHome from './users/hr/pages/HrHome';
import AdminLandingLayout from './users/admin/pages/AdminLandingLayout';
import AdminHome from './users/admin/pages/AdminHome';
import Companies from './users/admin/pages/Companies';
<<<<<<< HEAD
import JobPosting from './users/hr/pages/JobPosting';
import AccountHr from './users/hr/pages/AccountHr';
import SettingHr from './users/hr/pages/SettingHr';
import Apply from './users/student/pages/Apply';
import Setting from './users/student/pages/Setting';
import AddStudent from './users/admin/pages/AddStudent';
import AddCompany from "./users/admin/pages/AddCompany";
import StudentForm from './users/admin/pages/Studentform';



=======
import StudentHome from './users/student/pages/StudentHome';
import Profile from './users/student/pages/Profile';
import AddStudent from './users/hr/pages/AddStudent';
import JobPosting from './users/hr/pages/JobPosting';
import AccountHr from './users/hr/pages/AccountHr';
import SettingHr from './users/hr/pages/SettingHr';
import Jobs from './users/admin/pages/Jobs';
import  {AddNewJob}  from './users/admin/pages/AddNewJob';
>>>>>>> 7a10cb31097cfe54555981bf769b963175b3728a



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Entry Links */}
          <Route path="/" element={<UserEntry />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

<<<<<<< HEAD
          {/* Student Links */}
          <Route path="/Student" element={<StudentLandingLayout />}>
            <Route path="/Student/home" element={<Dashboard />} />
            <Route path="/Student/apply" element={<Apply />} />
            <Route path="/Student/profile" element={<Profile />} />
            <Route path="/Student/setting" element={<Setting />} />
            <Route path="/StudentHome" element={<StudentHome />} />
          </Route>

          {/* HR Links */}
          <Route path="/HR" element={<HrLandingLayout />}>
            <Route path="/HR/home" element={<HrHome />} />
            <Route path="/HR/jobposting" element={<JobPosting />} />
            <Route path="/HR/account" element={<AccountHr />} />
            <Route path="/HR/settings" element={<SettingHr />} />
          </Route>

          {/* Admin Links */}
          <Route path="/Admin" element={<AdminLandingLayout />}>
            <Route path="/Admin/home" element={<AdminHome />} />
            <Route path="/Admin/Companies" element={<Companies />} />
            <Route path="/Admin/Addstudent" element={<AddStudent />} />
            <Route path="/Admin/Addcompany" element={<AddCompany />} />
            <Route path="/Admin/Studentform" element={<StudentForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <AddStudent /> */}
=======
   <BrowserRouter>
      <Routes>
        {/* Entry Links */}
        <Route path="/" element={<UserEntry/>} />
        <Route path="/Login" element={<Login/>} />
        {/* <Route path="/SignUp" element={<SignUp/>} /> */}

        {/* Student Links */}
        <Route
          path="/Student"
          element={<StudentLandingLayout />}
        >
        {/* <Route path="/Student/Home" element={<StudentHome/>} /> */}    
        </Route>
        <Route path="/Student/Home" element={<StudentHome/>} />

        {/* HR Links */}
        <Route path="/HR" 
          element={<HrLandingLayout/>}
        >
          <Route path="/HR/home" element={<HrHome />} />
          <Route path="/HR/jobposting" element={<JobPosting/>} />
          <Route path="/HR/account" element={<AccountHr/>} />
          <Route path="/HR/settings" element={<SettingHr/>} />
        </Route>

        {/* Admin Links */}
        <Route path="/Admin" 
          element={<AdminLandingLayout/>}
        />
           <Route path="/Admin/" element={<AdminHome/>} />
           <Route path="/Admin/Companies" element={<Companies/>} />
           <Route path="/jobs" element={<Jobs/>}/>
           <Route path='/addNewJob' element={<AddNewJob/>}/>

       
        <Route path="/profile" element={<Profile/>}></Route>
        
      </Routes>
      
      
      
    </BrowserRouter>
    {/* <AddStudent /> */}
>>>>>>> 7a10cb31097cfe54555981bf769b963175b3728a
    </>
  );
}

export default App;

