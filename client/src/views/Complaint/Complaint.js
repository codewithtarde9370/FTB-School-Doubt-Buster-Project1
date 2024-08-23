import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

import './Complaint.css';
import GreetingCard from './../../components/dynamicGreet/greetCard';
import Footer from './../../components/Footer/footer';

function Complaint() {
  const [classValue, setClassValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleSubmit = async () => {
    if (!classValue || !categoryValue || !descriptionValue) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/complaint`, {
        class: classValue,
        category: categoryValue,
        description: descriptionValue,
        user: localStorage.getItem('userId'), // Assuming you store userId in localStorage
        parent: localStorage.getItem('parentId') // Assuming you store parentId in localStorage
      });
      
      toast.success('Complaint added successfully');
      setClassValue('');
      setCategoryValue('');
      setDescriptionValue('');
      console.log(response.data);
    } 
    catch (error) {
      toast.error('Failed to submit complaint. Please try again.');
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <div>
      <GreetingCard />
      <h1 className='text-center' style={{ marginTop: '115px', marginBottom: '-20px', color: '#060347', fontWeight: '600' }}>
        Add Your Complaint here 🖊️
      </h1>
      <div className='main-div-complaint'>
        <div className='row'>
          <div className='col-md-6 container'>
            <label className='form-label'>Class:</label>
            <select
              className="form-control"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
            >
              <option value="">Select class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
          </div>
          <div className='col-md-6 container'>
            <label className='form-label'>Category:</label>
            <select
              className="form-control"
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="teaching">Teaching</option>
              <option value="vehicle">Vehicle</option>
              <option value="sports">Sports</option>
              <option value="academic">Academic</option>
              <option value="stationary">Stationary</option>
              <option value="general">General</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className='row container2'>
          <label className='form-label'>Add your Description regarding the complaint:</label>
          <textarea
            rows={8}
            cols={10}
            className="form-control"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className='btn mt-4 complaint-btn'
          onClick={handleSubmit}
        >
          Add Complaint
        </button>
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default Complaint;