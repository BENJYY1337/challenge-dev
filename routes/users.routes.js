const router = require("express").Router();
const usersControllers = require('../controllers/users.controllers')

router.get("/", usersControllers.readUser)
router.post("/", usersControllers.createUser)

module.exports = router;
