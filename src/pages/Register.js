import { Form, Input, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background4.webp";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import zxcvbn from 'zxcvbn';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '' });


  const checkPasswordStrength = (password) => {
    const result = zxcvbn(password);
    // setPasswordStrength(result.score);
    setPasswordStrength({
      score: result.score,
      label: getStrengthLabel(result.score),
    });
  };
  // const getStrengthLabel = (score) => {
  //   const labels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
  //   return labels[score];
  // };

  const getStrengthLabel = (score) => {
    switch (score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };


  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
      case 4:
        return 'green';
      default:
        return 'black'; // Default color
    }
  };

  const isPasswordComplex = (password) => {
    // Check if the password includes at least one uppercase letter, one lowercase letter, one number, and one special character
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    return complexityRegex.test(password);

   
  };

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());

      const password = values.password;

      // Check if the password is at least 9 characters
      if (password.length >= 9) {
        // Check if the password meets complexity requirements
        if (isPasswordComplex(password)) {
          const res = await axios.post("/api/v1/user/register", values);
          dispatch(hideLoading());

          if (res.data.success) {
            message.success("Register Successfully!");
            navigate("/login");
          } else {
            message.error(res.data.message);
          }
        } else {
          // Display an error message for complexity requirements
          dispatch(hideLoading());
          message.error("Password must include a combination of uppercase letters, lowercase letters, numbers, and special characters.");
        }
      } else {
        // Display an error message for length requirement
        dispatch(hideLoading());
        message.error("Password must be at least 8 characters.");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };


 


  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="w-full sm:w-96 p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-center text-2xl font-bold text-blue-500 mb-6">Register Form</h3>
        <Form layout="vertical" onFinish={onFinishHandler}>
          <Form.Item label={<span className="font-bold">Name</span>} name="name">
            <Input type="text" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label={<span className="font-bold">Email</span>} name="email">
            <Input type="email" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label={<span className="font-bold">Password</span>} name="password">
            <Input type="password" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your password" onChange={(e) => {
                checkPasswordStrength(e.target.value);
              }} />
          </Form.Item>

          {passwordStrength.label && (
            <div className="mb-4">
              <span className="font-bold">Password Strength:</span>{" "}
              <span style={{ color: getStrengthColor(passwordStrength.score) }} className="font-bold">
                {passwordStrength.label}
              </span>
            </div>
          )}
          

{/* {passwordStrength.score > 0 && (
          <div className="mb-4">
            <span className="font-bold">Password Strength:</span>{" "}
            <span style={{ color: getStrengthColor(passwordStrength.score) }} className="font-bold">
              {passwordStrength.label}
            </span>
          </div>
        )} */}
          
          



         
          <Link to="/login" className="block mt-4 text-center text-blue-500 hover:underline font-semibold">
            Already a user? Login here
          </Link>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full border-2 border-blue-600"
            type="submit"
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
