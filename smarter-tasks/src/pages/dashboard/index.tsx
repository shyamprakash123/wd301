import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem("userData");
  const userData = JSON.parse(data!);
  console.log(userData.name);
  console.log(userData.email);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <button
        id="logout-link"
        onClick={() => {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userData");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
