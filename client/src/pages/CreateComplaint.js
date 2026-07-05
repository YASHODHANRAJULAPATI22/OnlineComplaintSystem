import React, { useState } from "react";
import API from "../services/api";

function CreateComplaint() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/complaints", formData);

      alert(res.data.message);

      setFormData({
        title: "",
        description: "",
        category: "",
        location: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Failed to submit complaint");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Complaint</h2>

      <hr />

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Complaint Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Complaint
        </button>

      </form>
    </div>
  );
}

export default CreateComplaint;