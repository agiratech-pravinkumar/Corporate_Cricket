const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  tournamentId: {
    type: String, 
    required: true
  },
  matchId: {
    type: String,
    required: true
  },
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  winner: {
    type: String,
    default: null
  },
  loser: {
    type: String,
    default: null
  },
  runsTeam1: {
    type: Number,
    default: 0
  },
  runsTeam2: {
    type: Number,
    default: 0
  },
  pointsTeam1: {
    type: Number,
    default: 0
  },
  pointsTeam2: {
    type: Number,
    default: 0
  }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
