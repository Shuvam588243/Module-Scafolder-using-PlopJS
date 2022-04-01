//Requiring Modules
const router = require('express').Router();

//Requiring Controllers
const { Ticket } = require('../controllers/TicketController.js');

//Routing
/*
route : 
method :
body :
params :
query :
*/
router.get('/', Ticket );