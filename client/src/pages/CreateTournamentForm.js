import React, { useState } from "react";
import Axios from "axios";

function CreateTournamentForm({ tournamentData }) {
  const [formData, setFormData] = useState({
    tournamentName: tournamentData.tournamentName || "",
    priceAmount: tournamentData.priceAmount || "",
    entryFees: tournamentData.entryFees || "",
    lastDateToApply: tournamentData.lastDateToApply || "",
    startDate: tournamentData.startDate || "",
    endDate: tournamentData.endDate || "",
    tournamentId: tournamentData.tournamentId || "",
    teamLimit: tournamentData.teamLimit || "",
    organization_id: tournamentData.organization_id || "",
    overs: tournamentData.overs || "",
    ballType: tournamentData.ballType || "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:3700/tournaments/create_tournament",
        formData
      );
      console.log("Tournament created:", response.data);
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error creating tournament:", error);
      setErrorMessage("Failed to create tournament. Please try again."); // Set error message
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Create Tournament</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="tournamentName">Tournament Name:</label>
          <input
            type="text"
            id="tournamentName"
            name="tournamentName"
            value={formData.tournamentName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="priceAmount">Price Amount:</label>
          <input
            type="number"
            id="priceAmount"
            name="priceAmount"
            value={formData.priceAmount}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="entryFees">Entry Fees:</label>
          <input
            type="number"
            id="entryFees"
            name="entryFees"
            value={formData.entryFees}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="lastDateToApply">Last Date to Apply:</label>
          <input
            type="date"
            id="lastDateToApply"
            name="lastDateToApply"
            value={formData.lastDateToApply}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="tournamentId">Tournament ID:</label>
          <input
            type="text"
            id="tournamentId"
            name="tournamentId"
            value={formData.tournamentId}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="teamLimit">Team Limit:</label>
          <input
            type="number"
            id="teamLimit"
            name="teamLimit"
            value={formData.teamLimit}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="organization_id">Organization ID:</label>
          <input
            type="text"
            id="organization_id"
            name="organization_id"
            value={formData.organization_id}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="overs">Overs:</label>
          <input
            type="number"
            id="overs"
            name="overs"
            value={formData.overs}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="ballType">Ball Type:</label>
          <select
            id="ballType"
            name="ballType"
            value={formData.ballType}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="">Select Ball Type</option>
            <option value="stumper">Stumper</option>
            <option value="leather">Leather</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create Tournament
        </button>

        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
      </form>
    </div>
  );
}

export default CreateTournamentForm;
