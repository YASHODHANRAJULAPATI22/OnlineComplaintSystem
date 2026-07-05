import { useEffect, useState } from "react";
import axios from "axios";

function AllComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Fetch All Complaints
  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/complaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaints(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load complaints");
    }
  };

  // Update Complaint Status
  const updateStatus = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        { status: "Resolved" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Complaint Updated Successfully");
      fetchComplaints();
    } catch (error) {
      console.log(error);
      alert("Failed to update complaint");
    }
  };

  // Delete Complaint
  const deleteComplaint = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/complaints/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Complaint Deleted Successfully");
      fetchComplaints();
    } catch (error) {
      console.log(error);
      alert("Failed to delete complaint");
    }
  };

  return (
    <div className="container mt-5">
      <h2>All Complaints</h2>

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>User</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.title}</td>
              <td>{complaint.user?.name}</td>
              <td>{complaint.category}</td>
              <td>{complaint.location}</td>
              <td>{complaint.status}</td>

              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => updateStatus(complaint._id)}
                >
                  Resolve
                </button>
              </td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteComplaint(complaint._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllComplaints;