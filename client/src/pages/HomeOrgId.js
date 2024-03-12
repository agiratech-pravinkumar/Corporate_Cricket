import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import CreateTournamentForm from "./CreateTournamentForm";

export default function HomeWithOrgId() {
  const { organization_id } = useParams();
  const [profileVisible, setProfileVisible] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [organizationName, setOrganizationName] = useState('');
  const [createTournamentClicked, setCreateTournamentClicked] = useState(false);
  const [selectedTournamentId, setSelectedTournamentId] = useState(null); // Track selected tournament ID

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await Axios.get(`http://localhost:3700/home/${organization_id}`);
        console.log('API Response:', response.data);
        setProfileData(response.data);
        setOrganizationName(response.data.organization_name);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [organization_id]);

  const handleProfileClick = () => {
    setProfileVisible(!profileVisible);
  };

  const handleCreateTournamentClick = () => {
    setCreateTournamentClicked(prevState => !prevState);
  };

  const handleViewTournamentClick = (tournamentId) => {
    setSelectedTournamentId(tournamentId); // Set selected tournament ID
  };

  const handleViewMatchesClick = (tournamentId) => {
    // Navigate to the matches page using the tournament ID
    const matchesUrl = `http://localhost:3700/tournaments/matches/${tournamentId}`;
    console.log("Matches URL:", matchesUrl);
    // Redirect to matches page (You can use <Link> component for internal navigation)
    window.location.href = matchesUrl;
  };

  return (
    <>
      <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h1>Corporate Cricket</h1>
          </Link>
          <div>
            <button style={{ marginRight: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }} onClick={handleProfileClick}>
              Profile
            </button>
            <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }} onClick={handleCreateTournamentClick}>
              Create Tournament
            </button>
          </div>
        </div>
      </nav>

      <div className="home" style={{ display: "flex", justifyContent: "center" }}>
        <div className="headerContainer" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "20px" }}>Welcome, {organizationName}</h1>
          <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }} onClick={handleProfileClick}>Toggle Profile</button>
          {profileVisible && profileData && (
            <div className="profileTableContainer" style={{ marginTop: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>Profile Information</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid #ddd", backgroundColor: "#ffff" }}>Organization Name:</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <span style={{ fontWeight: "bold", color: "yellow" }}>{profileData.organization_name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid #ddd", backgroundColor: "#ffff" }}>Email:</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <span style={{ fontWeight: "bold", color: "yellow" }}>{profileData.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Organization ID:</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <span style={{ fontWeight: "bold", color: "yellow" }}>{profileData.organization_id}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Tournaments Created:</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      {profileData.tournaments.length > 0 ? (
                        <ul style={{ margin: "0", padding: "0" }}>
                          {profileData.tournaments.map((tournamentId) => (
                            <li key={tournamentId} style={{ listStyleType: "none", marginBottom: "5px" }}>
                              <span style={{ fontWeight: "bold", color: "yellow" }}>{tournamentId}</span>
                              <button style={{ marginLeft: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }} onClick={() => handleViewTournamentClick(tournamentId)}>View Tournament</button>
                              <button style={{ marginLeft: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }} onClick={() => handleViewMatchesClick(tournamentId)}>View Matches</button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "No tournaments created"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {createTournamentClicked && <CreateTournamentForm tournamentData={{ organization_id }} />}
    </>
  );
}
