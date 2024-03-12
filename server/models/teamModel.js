const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    playerId: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const teamSchema = new mongoose.Schema({
    organization_id: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    coachName: {
        type: String,
        required: true
    },
    captainName: {
        type: String,
        required: true
    },
    players: [playerSchema]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
