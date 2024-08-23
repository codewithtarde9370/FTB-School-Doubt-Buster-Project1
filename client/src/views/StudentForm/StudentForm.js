import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './StudentForm.css'; // Assuming you have this file for additional custom styles

const StudentDetailsForm = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        rollNo: '',
        class: '',
        div: '',
        teacher: '',
        parent: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/student-details', studentData, {
                headers: { Authorization: `${localStorage.getItem('token')}` }
            });
            toast.success('Student details submitted successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit student details. Please try again.');
        }
    };

    return (
        <>
            <Toaster />
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-md-6">
                    <form  className="p-4 shadow rounded-5 bg-white form">
                        <h1 className="text-center mb-4">Student Register</h1>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="name"
                                value={studentData.name}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Student Name"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="number"
                                name="rollNo"
                                value={studentData.rollNo}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Roll Number"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="class"
                                value={studentData.class}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Class"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="div"
                                value={studentData.div}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Division"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="teacher"
                                value={studentData.teacher}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Teacher's Name"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="parent"
                                value={studentData.parent}
                                onChange={handleChange}
                                className="form-control inputs"
                                placeholder="Parent's Name"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="btn"onSubmit={handleSubmit} className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentDetailsForm;
