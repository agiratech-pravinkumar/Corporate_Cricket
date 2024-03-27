// Home.js

import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/home.css"; // Import the CSS file

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "http://localhost:3700/tournaments/getallmatches"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        setMatches(data); // Set matches in state
      } catch (error) {
        console.error("Error fetching matches:", error.message);
      }
    };

    fetchMatches();
  }, []);

  return (
    <Layout>
      <body className="bg">
      <h1 className="page-title">MATCHES AROUND YOU:</h1>
      <div className="match-container">
        {matches.map((match, index) => (
          <Card
            key={index}
            className={`matchCard ${
              match.winner ? "completed" : "upcoming"
            }`}
            style={{ backgroundColor: match.winner ? "#ffff" : "" }}
          >
            <CardContent>
              {match.tossWinner && match.choice && (
                <Typography
                  variant="body1"
                  className="toss-info"
                  style={{ fontWeight: "bold", color: "#ff5722" }}
                >
                  TOSS WON BY  {match.tossWinner} CHOOSE TO {match.choice}
                </Typography>
              )}
              <Typography
                variant="h6"
                component="h2"
                className="tournament-id"
              >
                Tournament ID: {match.tournamentId}
              </Typography>
              <Typography variant="body1" className="match-date">
                Match Date:{" "}
                {new Date(match.matchDate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" className="team-info">
                Team {match.team1} vs Team {match.team2}
              </Typography>
              <Typography variant="body1" className="score-info">
                Score: {match.runsTeam1} - {match.runsTeam2}
              </Typography>
            </CardContent>
            <div className="team-runs">
              {match.winner ? (
                <span style={{ fontWeight: "bold", color: "#000000" }}>
                  {`Team ${
                    match.runsTeam1 > match.runsTeam2
                      ? match.team1
                      : match.team2
                  } won by ${Math.abs(
                    match.runsTeam1 - match.runsTeam2
                  )} runs`}
                </span>
              ) : (
                <span className="upcoming">Upcoming</span>
              )}
            </div>
          </Card>
        ))}
      </div>
      </body>
    </Layout>
  );
};

export default Home;
