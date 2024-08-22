import { useState } from 'react';
import './StudentForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
            <form >
                <h1 className='justify-center f-w-3'>Student Register</h1>
                <input
                    type="text"
                    name="name"
                    value={studentData.name}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Student Name"
                    required
                />
                <input
                    type="number"
                    name="rollNo"
                    value={studentData.rollNo}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Roll Number"
                    required
                />
                <input
                    type="text"
                    name="class"
                    value={studentData.class}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Class"
                    required
                />
                <input
                    type="text"
                    name="div"
                    value={studentData.div}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Division"
                    required
                />
                <input
                    type="text"
                    name="teacher"
                    value={studentData.teacher}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Teacher"
                    required
                />
                <input
                    type="text"
                    name="parent"
                    value={studentData.parent}
                    onChange={handleChange}
                    className='input-field'
                    placeholder="Parent"
                    required
                />
                <button type="submit" onSubmit={handleSubmit}>
                Submit
                </button>
            </form>
        </>
    );
};

export default StudentDetailsForm;
