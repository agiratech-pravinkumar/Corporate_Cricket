import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function JoinTournamentForm() {
  const navigate = useNavigate();
  const [tournamentId, setTournamentId] = useState('');
  const [teamName, setTeamName] = useState('');
  const [organizationEmail, setOrganizationEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3700/tournaments/Jointournaments', { tournamentId, teamName, organizationEmail })
      .then((res) => {
        alert('Successfully joined the tournament');
        console.log(`Data Saved ${res.data}`);
        navigate('/menu'); // Redirect after successful join
      })
      .catch((err) => {
        console.log(`Error occurred during joining tournament: ${err}`);
        alert('Failed to join the tournament. Please try again.');
      });
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="text">Join Tournament</div>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
              type="text"
              placeholder="Tournament ID"
              value={tournamentId}
              onChange={(e) => setTournamentId(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="text"
              placeholder="Team Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="email"
              placeholder="Organization Email"
              value={organizationEmail}
              onChange={(e) => setOrganizationEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Join Tournament</button>
          <div className="link">
            Not a member?
            <Link to="/register">Register now</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinTournamentForm;
