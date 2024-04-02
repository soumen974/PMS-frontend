import { BrowserRouter as Router, Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import UserEntry from './auth/pages/UserEntry';
import Login from './auth/pages/Login';
import SignUp from './auth/pages/SignUp ';
import StudentLandingLayout from './users/student/pages/StudentLandingLayout';
import Dashboard from './users/student/pages/Dashboard';
import HrLandingLayout from './users/hr/pages/HrLandingLayout';
import HrHome from './users/hr/pages/HrHome';
import AdminLandingLayout from './users/admin/pages/AdminLandingLayout';
import AdminHome from './users/admin/pages/AdminHome';
import Companies from './users/admin/pages/Companies';
import StudentHome from './users/student/pages/StudentHome';
import Profile from './users/student/pages/Profile';



function App() {
  return (
    <>

   <BrowserRouter>
      <Routes>
        {/* Entry Links */}
        <Route path="/" element={<UserEntry/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />

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
          <Route path="/HR/" element={<HrHome />} />
          
        </Route>

        {/* Admin Links */}
        <Route path="/Admin" 
          element={<AdminLandingLayout/>}
        />
           <Route path="/Admin/" element={<AdminHome/>} />
           <Route path="/Admin/Companies" element={<Companies/>} />

       
        <Route path="/profile" element={<Profile/>}></Route>
        
      </Routes>
      
      
      
    </BrowserRouter>
    
    </>
  );
}

export default App;

