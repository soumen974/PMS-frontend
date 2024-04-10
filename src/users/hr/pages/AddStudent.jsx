import React, { useState } from 'react';
import './AddStudent.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const initialData = [
    { id: 1, Student: "Rahul Shaw", School: "DAV", Grade: "A", Status: "pending" },
    { id: 2, Student: "Soumen Bhunia", School: "kv", Grade: "A", Status: "approved" },
    { id: 3, Student: "Santosh king", School: "dps", Grade: "A", Status: "pending" },
];

function AddStudent() {
    const [data, setData] = useState(initialData);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedStudent, setEditedStudent] = useState({});
    const [editedIndex, setEditedIndex] = useState(null);

    const handleEdit = (student, index) => {
        setEditMode(true);
        setSelectedRow(student.id);
        setEditedIndex(index);
        setEditedStudent({ ...student });
    };

    const handleDelete = () => {
        if (selectedRow !== null) {
            const updatedData = data.filter(item => item.id !== selectedRow);
            setData(updatedData);
            setSelectedRow(null);
            setEditMode(false);
            setEditedIndex(null);
            setEditedStudent({});
        }
    };

    const saveChanges = () => {
        const updatedData = [...data];
        updatedData[editedIndex] = editedStudent;
        setData(updatedData);
        setEditMode(false);
        setEditedIndex(null);
        setEditedStudent({});
    };

    const cancelEdit = () => {
        setEditMode(false);
        setSelectedRow(null);
        setEditedIndex(null);
        setEditedStudent({});
    };

    const handleInputChange = (e, key) => {
        const { value } = e.target;
        setEditedStudent(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <div className='container'>
            <div className="header">
                <h1 className="header-title">Students</h1>
                <button className="header-button">Add Student</button>
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
                            <td>
                                {editMode && selectedRow === student.id ? (
                                    <input
                                        type="text"
                                        value={editedStudent.Student}
                                        onChange={(e) => handleInputChange(e, "Student")}
                                    />
                                ) : (
                                    student.Student
                                )}
                            </td>
                            <td>
                                {editMode && selectedRow === student.id ? (
                                    <input
                                        type="text"
                                        value={editedStudent.School}
                                        onChange={(e) => handleInputChange(e, "School")}
                                    />
                                ) : (
                                    student.School
                                )}
                            </td>
                            <td>
                                {editMode && selectedRow === student.id ? (
                                    <input
                                        type="text"
                                        value={editedStudent.Grade}
                                        onChange={(e) => handleInputChange(e, "Grade")}
                                    />
                                ) : (
                                    student.Grade
                                )}
                            </td>
                            <td>
                                {editMode && selectedRow === student.id ? (
                                    <input
                                        type="text"
                                        value={editedStudent.Status}
                                        onChange={(e) => handleInputChange(e, "Status")}
                                    />
                                ) : (
                                    student.Status
                                )}
                            </td>
                            <td>
                                {!editMode && selectedRow === student.id ? (
                                    <div className="sub-buttons">
                                        <button onClick={() => handleEdit(student, index)}>Edit</button>
                                        <span style={{ margin: '0 5px' }}></span> {/* Add space between buttons */}
                                        <button onClick={handleDelete}>Delete</button>
                                    </div>
                                ) : (
                                    <button onClick={() => handleEdit(student, index)}>
                                        <HiOutlineDotsHorizontal />
                                    </button>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editMode && (
                <div className="edit-controls">
                    <button onClick={saveChanges}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default AddStudent;
