import React, { useState } from "react";
import axios from "axios";
import "../assets/styles.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", { email, password });
      // Assume OTP is sent to the email
      console.log(response.data.message);
    } catch (err) {
      setError("Signup failed!");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("/api/verify-otp", { email, otp });
      console.log(response.data.message);
    } catch (err) {
      setError("OTP verification failed!");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signup;
