import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
export default function Sidebar_student() {
  const [OpenNavMenu, setOpenNavMenu] = useState(false);

  return (
    <>
      <aside className=" translate-x-[-15rem] md:lg:translate-x-0  absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  bg-[#A41034]  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0  ">
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <NavLink>
            <img src="" alt="" />
          </NavLink>
          <button className="block lg:hidden"></button>
        </div>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4  text-sm font-semibold text-white ">Menu</h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                {/* nav links */}
                <li>
                  {" "}
                  <NavLink
                    to="/Student/home"
                    className={({ isActive }) =>
                      ` ${
                        !isActive
                          ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white   "
                          : " bg-green-300 dark:bg-transparent  text-black dark:text-[#FFD575]  hover:text-black  hover:bg-green-200    dark:border dark:border-[#FFD575]  dark:hover:bg-opacity-10 dark:hover:bg-gray-100  "
                      }  group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `
                    }
                  >
                    {" "}
                    Dashboard
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Student"
                    className={({ isActive }) =>
                      ` ${
                        !isActive
                          ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white   "
                          : " bg-green-300 dark:bg-transparent  text-black  hover:text-black  hover:bg-green-200    dark:border dark:border-[#FFD575]  dark:hover:bg-opacity-10 dark:hover:bg-gray-100  "
                      } dark:text-[#FFD575]  group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `
                    }
                  >
                    {" "}
                    My Application
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Student"
                    className={({ isActive }) =>
                      ` ${
                        !isActive
                          ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white   "
                          : " bg-green-300 dark:bg-transparent  text-black dark:text-[#FFD575] hover:text-black  hover:bg-green-200    dark:border dark:border-[#FFD575]  dark:hover:bg-opacity-10 dark:hover:bg-gray-100  "
                      } dark:text-[#FFD575]  group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `
                    }
                  >
                    {" "}
                    My Placement
                  </NavLink>{" "}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4  text-sm font-semibold text-white ">
                OTHERS
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5 text-gray-200">
                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-">
                  Lorem
                </li>

                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-">
                  Lorem
                </li>

                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-">
                  Lorem
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
