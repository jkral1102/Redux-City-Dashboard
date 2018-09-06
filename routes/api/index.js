const router = require("express").Router();
const noteRoutes = require("./notes");
//import axios from 'axios'

router.use("/notes", noteRoutes);



module.exports = router;
