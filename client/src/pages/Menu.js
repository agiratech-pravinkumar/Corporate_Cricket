import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
} from "@mui/material"; 
import Axios from "axios";


import JoinTournamentForm from "./JoinTournamentForm";

const Menu = () => {
  const [tournament, setTournament] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  useEffect(() => {
    Axios.get("http://localhost:3700/tournaments/tournaments/")
      .then((res) => setTournament(res.data))
      .catch((err) => {
        console.log(`${err} is going on`);
      });
  }, []);

  const handleJoinTournament = (tournamentId, teamLimit) => {
    setShowJoinModal(true);
  };

  const handleDetails = async (tournamentId) => {
    try {
      const response = await Axios.get(
        `http://localhost:3700/tournaments/tournaments/${tournamentId}`
      );
      setSelectedTournament(response.data);
      setShowDetailsModal(true);
    } catch (error) {
      console.error("Error fetching tournament details:", error);
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
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Overs
                  </TableCell>{" "}
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Start Date
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Last Date
                  </TableCell>
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
                    <TableCell>{item.overs}</TableCell>
                    <TableCell>
                      {new Date(item.startDate).toLocaleDateString("en-GB")}
                    </TableCell>
                    <TableCell>
                      {new Date(item.endDate).toLocaleDateString("en-GB")}
                    </TableCell>
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
          <Modal
            open={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            aria-labelledby="tournament-details-modal"
            aria-describedby="tournament-details"
          >
            <Box
              sx={{
                position: "absolute",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography variant="h5" gutterBottom component="div">
                {Object.entries(selectedTournament)
                  .filter(
                    ([key]) =>
                      ![
                        "_id",
                        "__v",
                        "refereeId",
                        "Organization",
                        "organizationEmail",
                        "matchesGenerated",
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

              <Button
                variant="contained"
                onClick={() => setShowDetailsModal(false)}
                style={{ marginLeft: 10 }}
              >
                Close
              </Button>
            </Box>
          </Modal>
        )}

        {showJoinForm && <JoinTournamentForm />}

        <Modal
          open={showJoinModal}
          onClose={() => setShowJoinModal(false)}
          aria-labelledby="join-tournament-modal"
        >
          <Box
            sx={{
              position: "relative",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                color: "rgba(0, 0, 0, 0.54)",
              }}
              onClick={() => setShowJoinModal(false)}
            >
              <CloseIcon />
            </IconButton>
            <JoinTournamentForm />
          </Box>
        </Modal>
      </Box>
    </Layout>
  );
};

export default Menu;
