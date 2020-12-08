const UserRoute = require('express').Router();

const CreateUser = require('../controllers/Controller.Insert');
const GetUser = require('../controllers/Controller.Get');
const UpdateUser = require('../controllers/Controller.Update');
const DeleteUser = require('../controllers/Controller.Delete');


UserRoute.post('/user', CreateUser);
UserRoute.get('/user', GetUser);
UserRoute.put('/user', UpdateUser);
UserRoute.delete('/user', DeleteUser);


module.exports = UserRoute;