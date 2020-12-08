const UserRoute = require('express').Router();

const CreateUser = require('../controllers/Controller.Insert');
const GetUser = require('../controllers/Controller.Get');
const DeleteUser = require('../controllers/Controller.Delete');

UserRoute.post('/user', CreateUser);
UserRoute.get('/user', GetUser);
UserRoute.delete('/user', DeleteUser);

module.exports = UserRoute;