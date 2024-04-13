import React, { useEffect, useState } from "react";
import Authentication from "../components/Authentication";
import LoginSideImage from "../assets/slide-1-pic.jpg";
import InappLoader from "../../Loader/InappLoader";

export default function Login() {
  document.title = "Login [PlacementModule]";

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
<<<<<<< HEAD
    setTimeout(() => {
      setisLoading(false);
    }, 400);
  }, []);
  const EntryWayMessage_SignUp = "Create an account";
=======
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
>>>>>>> f1ba3c299164157e40d4c77280ed382315dcd520
  return (
    <>
      {isLoading ? (
        <>
          <InappLoader />
        </>
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
          </div>
        </div>
      )}
    </>
  );
}
