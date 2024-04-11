import React from "react";
import { Link } from "react-router-dom";


export default function Companies() {
  return (
    <>
      <div className="relative grid overflow-x-auto shadow-md sm:rounded-lg p-5">
        <button type="button" class="grid justify-end pb-5">
          <Link to="/Admin/Addcompany">
            <h1 className='grid  text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"'>
              Add new compan
            </h1>
          </Link>
        </button>
        <table className="w-full text-sm border rounded-lg text-left rtl:text-right text-gray-700 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Industry
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Employees
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white   border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Company A
              </th>
              <td className="px-6 py-4">Technology</td>
              <td className="px-6 py-4">New York</td>
              <td className="px-6 py-4">1000</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
