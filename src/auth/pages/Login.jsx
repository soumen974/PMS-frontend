import React, { useEffect, useState } from "react";
import Authentication from "../components/Authentication";
import LoginSideImage from "../assets/slide-1-pic.jpg";
import InappLoader from "../../Loader/InappLoader";

export default function Login() {
  document.title = "Login [PlacementModule]";

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 400);
  }, []);
  const EntryWayMessage_SignUp = "Create an account";
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
