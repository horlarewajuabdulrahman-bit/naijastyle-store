import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Signout({ setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    // remove user data and redirect
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setTimeout(() => {
      alert("You have been signed out successfully.");
      navigate("/", { replace: true });
    }, 500);
  }, [navigate, setUser]);

  return (
    <div className="auth-container">
      <h2>Signing you out...</h2>
      <p>Please wait a moment.</p>
    </div>
  );
}