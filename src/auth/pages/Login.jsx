import React, { useEffect, useState } from "react";
import Authentication from "../components/Authentication";
import LoginSideImage from "../assets/slide-1-pic.jpg";
import InappLoader from "../../Loader/InappLoader";
<<<<<<< HEAD
=======
import Logo from "../../images/CenturionLogo.webp";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginStorage } from '../../LoginStorage';



export default function Login() {
  
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const navigate=useNavigate();
>>>>>>> 7a10cb31097cfe54555981bf769b963175b3728a

export default function Login() {
  document.title = "Login [PlacementModule]";

<<<<<<< HEAD
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 400);
  }, []);
  const EntryWayMessage_SignUp = "Create an account";
=======
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
          navigate('/Admin/')
        } else if (data === 'student') {
          navigate('/Student/Home');
        } else if (data === 'hr') {
          navigate('/HR/home');
        }
      }, 1000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  const  EntryWayMessage_SignUp= "Create an account"
>>>>>>> 7a10cb31097cfe54555981bf769b963175b3728a
  return (
    <>
      {isLoading ? (
        <>
          <InappLoader />
        </>
<<<<<<< HEAD
      ) : (
        <div>
          <div className=" grid  place-content-center h-[100vh]   ">
            <div className=" md:grid rounded gap-3 bg-white grid-cols-[70%,30%] shadow-lg shadow-black-500/50 md:pr-8 p-10 md:p-0">
              <img
                className="rounded w-[50rem] md:pr-2"
                src={LoginSideImage}
                alt=""
              />
              <Authentication
                LinkButtonName={"Login"}
                Links={"/SignUp"}
                EntryWayMessage={EntryWayMessage_SignUp}
              />
            </div>
=======
      
      :

      <div>
        <div className=" grid  place-content-center h-[100vh]   ">
          
          <div className=' md:grid rounded gap-3 bg-white grid-cols-[70%,30%] shadow-lg shadow-black-500/50 md:pr-8 p-10 md:p-0'>
            <img className='rounded w-[50rem] md:pr-2' src={LoginSideImage} alt="" />
            {/* <Authentication LinkButtonName={'Login'} Links={'/SignUp'} EntryWayMessage={EntryWayMessage_SignUp} /> */}
            <div className='text-center m-3'>
              <Link to={'/'}><img src={Logo} alt="centurion-img" className='w-12 text-center'/></Link>
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
            

>>>>>>> 7a10cb31097cfe54555981bf769b963175b3728a
          </div>
        </div>
      )}
    </>
  );
}
