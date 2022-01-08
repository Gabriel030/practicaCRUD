const userController = require("../controllers/userController")
const express = require("express")
const router = express.Router()


router.get("/users/list", userController.list);
router.get("/search",userController.search )
module.exports = router ; 
