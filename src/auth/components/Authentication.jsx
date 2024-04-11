import React, { useState,useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo_clg from "../assets/CUTM-logo.svg";
export default function Authentication(props) {
    const [selectedValue, setSelectedValue] = useState('');
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')
    const [RePassWord, setRePassWord] = useState('')
    const [Errormesg, setErrormesg] = useState('')



  const [Entry_Link,setEntry_Link]=useState('')



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
