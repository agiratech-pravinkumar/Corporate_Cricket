const express = require("express");

const tournamentController = require("../controllers/tournamentController");

const router = express.Router();

router.post("/create_tournament", tournamentController.createTournament);

router.get("/tournaments", tournamentController.getAllTournaments);

router.get("/matches/:tournamentId",tournamentController.getAllMatchesForTournament);


router.post("/Jointournaments/", tournamentController.joinTournament);

router.get(
  "/tournaments/:tournamentId",
  tournamentController.getTournamentById
);

//matchesToMail

//router.get('/match/:tournamentId',tournamentController.match);

router.post("/matches/:tournamentId", tournamentController.generateMatches);

router.post("/announce/:tournamentId", tournamentController.sendMatches);

router.put('/matches/:matchId/update-result', tournamentController.updateMatchResult);


module.exports = router;
