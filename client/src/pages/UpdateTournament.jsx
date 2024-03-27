import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Layout from "../components/Layout/Layout";
import axios from "axios";
function UpdateTournament() {
  const [matchId, setMatchId] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [overs, setOvers] = useState("");
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [runsTeam1, setRunsTeam1] = useState("");
  const [runsTeam2, setRunsTeam2] = useState("");
  const [pointsTeam1, setPointsTeam1] = useState("");
  const [pointsTeam2, setPointsTeam2] = useState("");
  const [tossWinner, setTossWinner] = useState("");
  const [choice, setChoice] = useState("");

  useEffect(() => {
    fetchMatchId();
  }, []);

  const fetchMatchId = () => {
    axios
      .get("http://localhost:3700/tournaments/matches")
      .then((response) => {
        const matchIds = response.data.map((match) => match.matchId);
        setMatchId(matchIds[0]);
      })
      .catch((error) => {
        console.error("Error fetching match IDs:", error);
      });
  };

  const handleUpdate = () => {
    axios
      .post("http://localhost:3700/tournaments/matches/update-result", {
        matchId: matchId,
        tournamentId: tournamentId,
        team1: team1,
        team2: team2,
        matchDate: matchDate,
        overs: overs,
        winner: winner,
        loser: loser,
        runsTeam1: runsTeam1,
        runsTeam2: runsTeam2,
        pointsTeam1: pointsTeam1,
        pointsTeam2: pointsTeam2,
        tossWinner: tossWinner,
        choice: choice,
      })
      .then((response) => {
        console.log("Update successful:", response);
        // Optionally, perform any other actions after successful update
      })
      .catch((error) => {
        console.error("Error updating match result:", error);
        // Optionally, handle error cases
      });
  };

  return (
    <Layout>
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Update Match Result</h2>

                <MDBInput
                  label="Tournament ID"
                  id="tournamentId"
                  type="text"
                  value={tournamentId}
                  onChange={(e) => setTournamentId(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Match ID"
                  id="matchId"
                  type="text"
                  value={matchId}
                  onChange={(e) => setMatchId(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Team 1"
                  id="team1"
                  type="text"
                  value={team1}
                  onChange={(e) => setTeam1(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Team 2"
                  id="team2"
                  type="text"
                  value={team2}
                  onChange={(e) => setTeam2(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Match Date"
                  id="matchDate"
                  type="text"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Overs"
                  id="overs"
                  type="text"
                  value={overs}
                  onChange={(e) => setOvers(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Winner"
                  id="winner"
                  type="text"
                  value={winner}
                  onChange={(e) => setWinner(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Loser"
                  id="loser"
                  type="text"
                  value={loser}
                  onChange={(e) => setLoser(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Runs Team 1"
                  id="runsTeam1"
                  type="text"
                  value={runsTeam1}
                  onChange={(e) => setRunsTeam1(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Runs Team 2"
                  id="runsTeam2"
                  type="text"
                  value={runsTeam2}
                  onChange={(e) => setRunsTeam2(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Points Team 1"
                  id="pointsTeam1"
                  type="text"
                  value={pointsTeam1}
                  onChange={(e) => setPointsTeam1(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Points Team 2"
                  id="pointsTeam2"
                  type="text"
                  value={pointsTeam2}
                  onChange={(e) => setPointsTeam2(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Toss Winner"
                  id="tossWinner"
                  type="text"
                  value={tossWinner}
                  onChange={(e) => setTossWinner(e.target.value)}
                  wrapperClassName="mb-4"
                />
                <MDBInput
                  label="Choice"
                  id="choice"
                  type="text"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                  wrapperClassName="mb-4"
                />

                <MDBBtn className="w-100 mb-4" size="md" onClick={handleUpdate}>
                  Update
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              className="w-100 rounded-4 shadow-4"
              alt="Match"
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
}

export default UpdateTournament;    
