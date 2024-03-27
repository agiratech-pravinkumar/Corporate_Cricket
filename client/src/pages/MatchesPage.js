import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import MatchCard from '../components/Layout/MatchCard'; // Import the MatchCard component
import "../styles/testing.css";
import PoinsTable from '../components/Layout/PoinsTable';

function MatchesPage() {
  const { tournamentId } = useParams();
  const [matches, setMatches] = useState([]);
  const [completedMatches, setCompletedMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3700/tournaments/matches/${tournamentId}`)
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error('Error fetching matches:', error);
      });
  }, [tournamentId]);

  useEffect(() => {
    // Filter matches into completed and upcoming categories
    const completed = matches.filter(match => match.winner);
    const upcoming = matches.filter(match => !match.winner);
    setCompletedMatches(completed);
    setUpcomingMatches(upcoming);
  }, [matches]);

  return (
    <Layout>
      <h1>ALL MATCHES FOR :{tournamentId}</h1>
      <div className="content-wrapper">
        {/* Map through completed matches and render MatchCard for each */}
        {completedMatches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
        {/* Map through upcoming matches and render MatchCard for each */}
        {upcomingMatches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
        
      </div>
      <PoinsTable tournamentId={tournamentId} />
    </Layout>
  );
}

export default MatchesPage;
