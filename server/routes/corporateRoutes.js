const express = require('express');

const corporateAuth = require('../controllers/corporateAuth'); 

const teamController=require('../controllers/teamController');

const middleware=require('../middleware/auth');

const router = express.Router();



router.post('/register',corporateAuth.registerForm);


router.post('/login',corporateAuth.loginCheck);




router.get('/home/:organization_id',/*middleware.verifyToken,*/ corporateAuth.organization);



router.post('/createteam/:organizationId/',teamController.createTeam);



// Route for getting all teams of one organization
router.get('/teams/:organizationId', teamController.teamsById);

router.get('/allTeams/', teamController.getAllTeams);





module.exports = router;
