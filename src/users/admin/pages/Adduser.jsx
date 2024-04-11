import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Adduser() {
  const [user, setUser] = useState({
    id: "",
    password: "",
    repassword: "",
    usertype:""
  });
  const [addedMsg, setAddedMsg] = useState(false);
  const[errorMeg,setErrorMeg]=useState(false);

  let navigate = useNavigate();

  const { id, password, repassword ,usertype } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleForm = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.id === '' || user.password === '' || user.repassword === '' || user.usertype === '') {
      setErrorMeg(true);
    } else if(user.repassword===user.password){
      console.log(user);

      if(user.usertype === 'Student'){
        fetch("http://localhost:8080/Student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          console.log("New Student added");
          setAddedMsg(true);
          setErrorMeg(false);
    
          setTimeout(() => {
            setAddedMsg(false);
          }, 5000);
    
          EmptyForm();
          setTimeout(() => {
            navigate("/");
          }, 1000);
        });

      }else if(user.usertype === 'HR'){
        fetch("http://localhost:8080/HR", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          console.log("New HR added");
          setAddedMsg(true);
          setErrorMeg(false);
    
          setTimeout(() => {
            setAddedMsg(false);
          }, 5000);
    
          EmptyForm();
          setTimeout(() => {
            navigate("/");
          }, 1000);
        });
        
      }
      
    } else if(user.repassword!==user.password){
      setErrorMeg(true);
    }
    
  };

  const EmptyForm = () => {
    setErrorMeg(false);
    setUser({
      id: "",
      password: "",
      repassword: "",
      usertype:""
    });

   
    };

  return (
    <>
      <header className=" ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New User</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="  h-96">
            <form onSubmit={(e) => HandleForm(e)} className='grid gap-5 flex-col justify-center align-center pt-10'>

                   <div>
                      <label htmlFor="dropdown">User type:</label>
                      <select id="dropdown" name="usertype" value={usertype}  onChange={(e) => onInputChange(e)}>
                        <option value="NormalUser">Not Selected</option>
                        <option value="Student">Student</option>
                        <option value="HR">HR</option>
                      </select>
                    </div>

              <input value={id} onChange={(e) => onInputChange(e)} name="id" className='bg-gray-100 rounded-sm p-2 w-[75vw] md:w-[22rem]' type="text" placeholder='User id ' />
              <input value={password} onChange={(e) => onInputChange(e)} name="password" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="password"  placeholder='Password' />
              <input value={repassword} onChange={(e) => onInputChange(e)} name="repassword" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="password" placeholder='Re-Password' />

              <div className='flex gap-4'>
                <button type="submit" className='bg-slate-800 cursor-pointer text-white w-full p-2 rounded-sm'>Add</button>
                <button onClick={EmptyForm} value="Cancel" className='bg-red-700 cursor-pointer text-white w-full p-2 rounded-sm'>Cancel</button>
              </div>

              <div className={`${addedMsg ? "block" : "hidden"}  text-green-500 text-center border border-green-500 p-0 flex justify-between`}>
                <h4 className='p-2'>Successfully added</h4>
              </div>
              

              <div className={`${errorMeg ? "block" : "hidden"}  text-red-500 text-center border border-red-500 p-0 flex justify-between`}>
                <h4 className='p-2'>Fill properly</h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
