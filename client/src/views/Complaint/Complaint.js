import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './Complaint.css'
import GreetingCard from './../../components/dynamicGreet/greetCard'
import Footer from './../../components/Footer/footer'

function Complaint() {
  return (
    <div>
      <GreetingCard />
      <h1 className='text-center' style={{ marginTop: '90px', marginBottom: '-20px' , color: '#060347', fontWeight: '600'}}>
        Add Your Complaint here 🖊️
      </h1>
      <div className='main-div-complaint' >
        <div className='row'>
          <div className='col-md-6 container'>
            <label className='form-label'>Class :</label>
            <select
              className="form-control"

            >
              <option>select class</option>
              <option value="1" selected >Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
          </div>
          <div className='col-md-6 container'>
            <label className='form-label'>Category :</label>
            <select
              className="form-control"

            >
              <option>select category</option>
              <option value="teaching" selected >Teaching</option>
              <option value="vehicle">Vehicle</option>
              <option value="sports">Sports</option>
              <option value="academics">Academics</option>
              <option value="stationary">Stationary</option>
              <option value="general">General</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className='row  container2'>
          <label className='form-label'>Add your Description regarding the complaint :</label>
          <textarea
            rows={8}
            cols={10}
            className="form-control"
          />
        </div>
        <button type="submit"
          className='btn mt-5 complaint-btn'>
          Add Complaint
        </button>

      </div>


<Footer />
    </div>
  )
}

export default Complaint