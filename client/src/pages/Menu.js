import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Axios from "axios";
import T20 from "../images/t120.png";
import Agira from "../images/Agira.jpg";
import Cognizant from "../images/t20.png";
import MasalaDosa from "../images/cricket-championship-tournament-background-with-vector-illustration_30996-7204.png";
import Paneer from "../images/cricket-match-concept-with-stadium-background_30996-1593.avif";
import Gujrati from "../images/t120.png";
import JoinTournamentForm from "./JoinTournamentForm";

const Menu = () => {
  const [tournament, setTournament] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false); 

  useEffect(() => {
    Axios.get("http://localhost:3700/tournaments/tournaments/")
      .then((res) => setTournament(res.data))
      .catch((err) => {
        console.log(`${err} is going on`);
      });
  }, []);

  const images = [T20, Agira, Cognizant, MasalaDosa, Paneer, Gujrati];

  const handleJoinTournament = (tournamentId, teamLimit) => {
  
    setShowJoinForm(true);
  };

  const handleDetails = async (tournamentId) => {
    try {
      const response = await Axios.get(
        `http://localhost:3700/tournaments/tournaments/${tournamentId}`
      );
      setSelectedTournament(response.data);
      const index =
        tournament.findIndex((item) => item.tournamentId === tournamentId) %
        images.length;
      setSelectedImage(images[index]);
    } catch (error) {
      console.error("Error fetching tournament details:", error);
      // Handle error display or other actions upon failed fetch
    }
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90%", overflowX: "auto" }}>
          <TableContainer component={Paper}>
            <Table aria-label="tournament table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#3f51b5" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Tournament ID
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Tournament Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Teams
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Ball Type
                  </TableCell>{" "}
                  {/* Added Ball Type header */}
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Overs
                  </TableCell>{" "}
                  {/* Added Overs header */}
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tournament.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:hover": { backgroundColor: "#e8eaf6" } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.tournamentId}
                    </TableCell>
                    <TableCell>{item.tournamentName}</TableCell>
                    <TableCell>{item.teams.join(", ")}</TableCell>
                    <TableCell>{item.ballType}</TableCell>{" "}
                    {/* Display Ball Type */}
                    <TableCell>{item.overs}</TableCell> {/* Display Overs */}
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() =>
                          handleJoinTournament(
                            item.tournamentId,
                            item.teamLimit
                          )
                        }
                        disabled={item.teams.length === item.teamLimit}
                      >
                        Join Tournament
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleDetails(item.tournamentId)}
                        style={{ marginLeft: 10 }}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {selectedTournament && (
          <Card sx={{ maxWidth: "90%", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component="img"
                src={selectedImage}
                alt={selectedTournament.tournamentName}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {Object.entries(selectedTournament)
                    .filter(
                      ([key]) =>
                        ![
                          "_id",
                          "__v",
                          "refereeId",
                          "OrganizationEmail",
                        ].includes(key)
                    )
                    .map(([key, value]) => (
                      <p key={key}>
                        <strong>
                          {key === "ballType"
                            ? "Ball Type"
                            : key === "overs"
                            ? "Overs"
                            : key}
                          :{" "}
                        </strong>{" "}
                        
                        {key === "teams" ? (
                          <span
                            style={{
                              color:
                                value.length === selectedTournament.teamLimit
                                  ? "red"
                                  : "green",
                            }}
                          >
                            {value.length === selectedTournament.teamLimit
                              ? "Team is full"
                              : `${
                                  selectedTournament.teamLimit - value.length
                                } teams left`}
                          </span>
                        ) : (
                          value
                        )}
                      </p>
                    ))}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
       
        {showJoinForm && <JoinTournamentForm />}
      </Box>
    </Layout>
  );
};

export default Menu;
