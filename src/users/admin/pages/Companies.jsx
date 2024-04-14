import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch company details from the database
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/getAllCompany"
        ); 
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <>
      <div className="relative grid overflow-x-auto shadow-md sm:rounded-lg p-5">
        <button type="button" class="grid justify-end pb-5">
          <Link to="/Admin/Addcompany">
            <h1 className='grid  text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"'>
              Add new company
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
                HR
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="odd:bg-white   border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {company.name}
                </th>
                <td className="px-6 py-4">{company.industry}</td>
                <td className="px-6 py-4">{company.location}</td>
                <td className="px-6 py-4">{company.hr.email}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/edit-company/${company.id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
