// import React, { useState } from "react";
// import axios from "axios";

// const ForgetPasswordPage = () => {
//   const [email, setEmail] = useState("");
//   const [token, setToken] = useState("");
//   const [password, setPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleTokenChange = (e) => {
//     setToken(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSendToken = async () => {
//     try {
//       const response = await axios.post(
//         "/api/v1/user/password-recovery",
//         { email }
//       );

//       if (response.data.message) {
//         setSuccessMessage(response.data.message);
//         setError(null);
//         setToken("");
//         setStep(2);
//       } else {
//         setError(response.data.error || "Failed to send token");
//         setSuccessMessage(null);
//       }
//     } catch (error) {
//       console.error("Token sending error:", error);
//       setError("An unexpected error occurred");
//       setSuccessMessage(null);
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(
//         `/api/v1/user/password-recovery/${token}`,
//         { email, password }
//       );

//       if (response.data.message) {
//         setSuccessMessage(response.data.message);
//         setError(null);
//       } else {
//         setError(response.data.error || "Failed to recover password");
//         setSuccessMessage(null);
//       }
//     } catch (error) {
//       console.error("Password recovery error:", error);
//       setError("An unexpected error occurred");
//       setSuccessMessage(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Forget Password</h1>
      
//       {step === 1 && (
//         <>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//           <button onClick={handleSendToken}>Send Token</button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <label>Token:</label>
//           <input type="text" value={token} onChange={handleTokenChange} />
//           <label>New Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//           <button onClick={handleResetPassword}>Reset Password</button>
//         </>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//     </div>
//   );
// };

// export default ForgetPasswordPage;



import React, { useState } from "react";
import { message } from "antd";
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPasswordPage = () => {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate = useNavigate();

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSendToken = async () => {
    try {
      const response = await axios.post("/api/v1/user/password-recovery", { email });

      if (response.data.message) {
        setSuccessMessage(response.data.message);
        setError(null);
        setToken("");
        setStep(2);
      } else {
        setError(response.data.error || "Failed to send token");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Token sending error:", error);
      setError("An unexpected error occurred");
      setSuccessMessage(null);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`/api/v1/user/password-recovery/${token}`, {
        email,
        password,
      });

      if (response.data.message) {
        setSuccessMessage(response.data.message);
        setError(null);
        message.success("Password Reset succesfully");
        navigate("/login");
        // Navigate to the login page after a successful password reset
        // history.push("/login");
      } else {
        setError(response.data.error || "Failed to recover password");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Password recovery error:", error);
      setError("An unexpected error occurred");
      setSuccessMessage(null);
    }
  };

  return (
    <><div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Forget Password</h1>

        {step === 1 && (
          <>
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500" />
            <button
              onClick={handleSendToken}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Send Token
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2">Token:</label>
            <input
              type="text"
              value={token}
              onChange={handleTokenChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500" />
            <label className="block mb-2">New Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500" />
            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Reset Password
            </button>
          </>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
      
    </div></>
    
  );
};

export default ForgetPasswordPage;
