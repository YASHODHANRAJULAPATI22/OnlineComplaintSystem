import React, { useEffect, useState } from "react";
import API from "../services/api";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchMyComplaints();
  }, []);

  const fetchMyComplaints = async () => {
    try {
      const res = await API.get("/complaints/my");
      setComplaints(res.data);
    } catch (error) {
      alert("Failed to load complaints");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>My Complaints</h2>

      <hr />

      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>
                <td>{complaint.location}</td>
                <td>{complaint.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyComplaints;