import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <hr />

      <h4>Welcome to Online Complaint System</h4>

      <br />

      <button
        className="btn btn-primary me-2"
        onClick={() => navigate("/create-complaint")}
      >
        Create Complaint
      </button>

      <button
        className="btn btn-success me-2"
        onClick={() => navigate("/my-complaints")}
      >
        My Complaints
      </button>

      <button
        className="btn btn-warning me-2"
        onClick={() => navigate("/all-complaints")}
      >
        All Complaints
      </button>

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;