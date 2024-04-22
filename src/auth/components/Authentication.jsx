import React, { useState,useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo_clg from "../assets/CUTM-logo.svg";
import loginStorage from "./LoginStorage";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Authentication(props) {
    
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const navigate=useNavigate();

  document.title = "Login [PlacementModule]";

  const [isLoading,setisLoading]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },400)
}, [])



const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/login', { email, password });
    const { data } = response;
    if (typeof data === 'string') {
      setMessage(data); // Display error message
      setTimeout(() => {
        setMessage('');
      }, 4000);
    } else {
      loginStorage.details = data;
      console.log(loginStorage);
      setMessage('Logged in successfully');
      //loginStorage.details = data;
      setTimeout(() => {
        if (code === 'admin') {
          navigate('/Admin/Home')
        } else if (code === 'student') {
          navigate('/Student/Home');
        } else if (code === 'hr') {
          navigate('/HR/Home');
        }
      }, 1000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  const  EntryWayMessage_SignUp= "Create an account"





 


  return (
    <>
    <div className='  rounded-r-xl grid  place-content-center text-center  '>
      <div className='text-center m-3'>
                <Link to={'/'}><img src={Logo_clg} alt="centurion-img" className='w-12 text-center'/></Link>
                <br></br>
                <input type='text' placeholder='Enter email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br><br></br>
                <input type='password' placeholder='Enter password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br><br></br>
                <button type='submit' className='bg-black text-white' onClick={handleLogin}>Login</button>
                <br></br><br></br>
                <Link to="#">Forgot Password?</Link>
                <br /><br />
                {message && <div>{message}</div>}
        </div>

 
   </div>
    </>
  )
}