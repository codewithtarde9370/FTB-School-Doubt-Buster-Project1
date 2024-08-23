import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import './Login.css';
import GreetingCard from './../../components/dynamicGreet/greetCard.js';
import Loginimg from './login.png';
import Footer from './../../components/Footer/footer.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginNow = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/login`, {
        email: email,
        password: password,
      });
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message);
        const userData = response.data.data;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        toast.loading('Redirecting to dashboard...');

        setTimeout(() => {
          // Redirect based on user role
          switch (userData.role) {
            case 'student':
              window.location.href = '/student-details';
              break;
            case 'teacher':
              window.location.href = '/teacher';
              break;
            case 'parent':
              window.location.href = '/parent';
              break;
              case 'admin':
                window.location.href = '/';
                break;
            default:
              window.location.href = '/';
              break;
          }
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div>
        <GreetingCard />
        <div style={{ marginTop: '11%', marginBottom: '11%' }} className="d-flex justify-content-evenly row">
          <div className="col-md-6 container1-div col-sm-12 justify-content-center p-3">
            <img src={Loginimg} alt="Login" className="img-fluid mx-auto d-block" />
            <h1 className="login-slogun">Ohh😲, आपको फिर से शिकायत है!😟</h1>
            <h3 className="login-slogun1">Sorry🙇🏻‍♂️...</h3>
            <h2 className="login-slogun2">You will no longer have a chance to complain</h2>
          </div>
          <form className="col-md-6 col-sm-12 loginForm">
            <h1 className="text-center fw-bold">Login</h1>
            <label className="form-label">Username:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="UserID"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              type="button"
              onClick={loginNow}
              className="btn logbtn mt-5 position-absolute translate-middle start-50"
            >
              Login
            </button>
            <p className="linktag">
              Don't have an account? <Link style={{ textDecorationLine: 'none' }} to="/signup">Register</Link>
            </p>
          </form>
        </div>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default Login;
