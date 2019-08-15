const express = require('express');
const routes = express.Router();


//const UserController = require('./controllers/UserController');


routes.get('/', (req, res) => {
	return res.json({message:"working"});
});

module.exports = routes;
