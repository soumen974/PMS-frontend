import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddStudent.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

function AddStudent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/getAllStudent"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getConcatenatedName = (student) => {
    return `${student.firstName} ${student.middleName} ${student.lastName}`;
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Students</h1>
        <Link to="/Admin/Studentform" className="header-button">
          Add Student
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>School</th>
            <th>Campus</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={student.id}>
              <td>{getConcatenatedName(student)}</td>
              <td>{student.school}</td>
              <td>{student.campus}</td>
              <td>{student.branch}</td>
              <td>
                <button onClick={() => console.log("Edit clicked")}>
                  <HiOutlineDotsHorizontal />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddStudent;
