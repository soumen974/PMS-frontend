import React, { useState,useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Authentication(props) {
    const [selectedValue, setSelectedValue] = useState('');
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')
    const [RePassWord, setRePassWord] = useState('')
    const [Errormesg, setErrormesg] = useState('')



  const [Entry_Link,setEntry_Link]=useState('')

 
  // const  HandleFormSubmit=(e)=>{
  //   e.preventDefault(); 
  // }

  const [userAuthData, setUserAuthDatat] = useState({
    usertype: "",  
    password: ""
    
  });

  const { usertype, password } = userAuthData;

  const onInputChange = (e) => {
    setUserAuthDatat({ ...userAuthData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (usertype === 'Student') {
     
        setEntry_Link('/Student/Home');

    } 
    else if (usertype === 'HR') {
      setEntry_Link('/HR/home');

    }
    else if (usertype === 'Admin') {
      setEntry_Link('/Admin');

    }
    else 
    {
      setEntry_Link('');
    }
  }, [usertype]);



 

  const [addedMsg, setAddedMsg] = useState(false);
  const[errorMeg,setErrorMeg]=useState(false);

  const HandleForm = (e) => {
    e.preventDefault();

    console.log(userAuthData);
      fetch("http://localhost:8080/userentry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userAuthData)
      })
        .then(() => {
          console.log("New user added");
          setAddedMsg(true);
          setErrorMeg(true);
         

          setTimeout(() => {
             setErrorMeg(false);
             setAddedMsg(false);
          
          }, 1000);
    
          
    
          EmptyForm();
         
        });
    
    
  };

 


  return (
    <>
    <div className=' rounded-r-xl grid  place-content-center text-center '>

<div className='  gap-7 grid   '>

     <h1 className=' text-center text-4xl'>User {props.LinkButtonName}</h1>

    <div>
    
      


        <form  onSubmit={(e) => HandleForm(e)} className='grid  place-content-center   gap-6 '  >

              {    props.SignUpformUse && <>

                  <div>
                    <label htmlFor="dropdown">User type:</label>
                    <select id="dropdown" name="usertype" value={usertype}  onChange={(e) => onInputChange(e)}>
                      <option value="NormalUser">Not Selected</option>
                      <option value="Student">Student</option>
                      <option value="HR">HR</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
              </>
            }
            
            <input className='bg-gray-100 text-black placeholder:text-gray-500 py-2 px-4 rounded font-light outline-2 focus:outline-gray-200 focus:bg-white focus:outline ' type='text' placeholder='Username'  value={UserName} onChange={(e)=>setUserName(e.target.value)} name='username'/>
            <input className='bg-gray-100 text-black placeholder:text-gray-500 py-2 px-4 rounded font-light outline-2  focus:outline-gray-200 focus:bg-white focus:outline ' placeholder='Password' type='password'name="password" value={password} onChange={(e) => onInputChange(e)}/>

              {
                props.SignUpformUse &&
                    <>
                        <input className='bg-gray-100  py-2 px-4 rounded font-light  outline-2  focus:outline-gray-200 focus:bg-white focus:outline' placeholder='Re Password' type='password'value={RePassWord} onChange={(e)=>setRePassWord(e.target.value)} name='Re_password'/>

                    </>
                }
                
              {
                !props.SignUpformUse&&
                <h6 className='underline hover:no-underline text-gray-500 font-light text-[0.9rem]'> Forget Password/Username</h6>

              }

              <Link to={Entry_Link} className={`${props.SignUpformUse ? "bg-[#FF6D5C] shadow-orange-600/50  hover:shadow-orange-600/0  ": " bg-purple-500 shadow-purple-500/50 hover:shadow-purple-500/0 "}  rounded-full py-2 text-[1.14rem]  text-white shadow-lg  `}> <button  type='submit'>{props.LinkButtonName}</button></Link>
            
              <Link to={props.Links}> <button type="submit"  className='text-gray-400 hover:text-gray-600'>{props.EntryWayMessage}</button></Link>

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
