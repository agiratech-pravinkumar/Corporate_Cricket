import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from './NavBar';

function MatchesPage({ tournamentId }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await Axios.get(`http://localhost:3700/tournaments/matches/${tournamentId}`);
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [tournamentId]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Matches for Tournament ID: {tournamentId}</h1>
      {loading ? (
        <p>Loading matches...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {matches.map((match, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '15px', width: '300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ textAlign: 'center' }}>Match {index + 1}</h2>
              <p><strong>Tournament ID:</strong> {match.tournamentId}</p>
              <p><strong>Match ID:</strong> {match.matchId}</p>
              <p><strong>Team 1:</strong> {match.team1}</p>
              <p><strong>Team 2:</strong> {match.team2}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MatchesPage;
