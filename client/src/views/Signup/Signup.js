import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './Signup.css'
import Register from './regiter.jpeg'

function Signup() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();
  const signup = async () => {
    const { fullName, email, mobile, address, password, role } = user;
    if (!fullName || !email || !mobile || !address || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8000/signup`, {
        fullName,
        email,
        mobile,
        address,
        password,
        role,
      });

      if (response.data.success) {
        toast.success(response.data.message || 'Signup successful!');
        setUser({
          fullName: '',
          email: '',
          mobile: '',
          address: '',
          password: '',
          role: '',
        });
        setTimeout(() => { navigate('/'); }, 1000)
      } else {
        toast.error(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      toast.error('An error occurred during signup.');
    }
  };

  return (
    <div className='main-div'>
      <Toaster />
      <h1>Register</h1>
      <div className="container row">
        <div className="col-md-6 col-sm-12">
          <div className='d-block m-5 align-items-center'>  <img height={'200px'} src={Register}/><h1>Regiter...</h1></div>
        

        </div>

      <form className=' col-md-6 col-sm-12 registerForm'>
        <div className='md-5'>
          <label className="form-label">Full Name:</label>
          <input
            className="form-control"
            type="text"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <label className='form-label'>Email:</label>
          <inputd
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className='form-label'>Mobile No.:</label>
          <input
            type="number"
            className="form-control"
            value={user.mobile}
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
          <label className='form-label'>Address:</label>
          <textarea
            rows={2}
            cols={10}
            className="form-control"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
          <label className='form-label'>Set Password:</label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label className='form-label'>Role:</label>
          <select
            value={user.role}
            className="form-control"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option>select role</option>
            <option value="student" selected >Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="admin">Principle</option>
          </select>
          <button type="submit"
            className='btn mt-5 btn-light position-absolute translate-middle start-50 '
            onClick={(e) => {
              e.preventDefault();
              signup();
            }}>
            Register
          </button>
        </div>
      </form>
      <span>Do You Have Alredy Account?<Link to={'/login'}>Login </Link></span>

    </div>
    </div >
  );
}

export default Signup;