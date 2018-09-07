const router = require("express").Router();
const noteRoutes = require("./notes");
//import axios from 'axios'

const axios = require('axios')


router.get("/events:id", function(req, res) {
  // fetch('http://api.eventful.com/json/events/search?app_key=' + apiKey + 'h3LjwpmzbpDcs6wx&location=' + searchTerm + '&date=Future',
  let searchTerm = req.params.id
  axios.get('http://api.eventful.com/json/events/search?app_key=h3LjwpmzbpDcs6wx&location=' + searchTerm + '&date=Future')

  .then(response => res.json(response.data))
  //.then(res => console.log(res))

  })

router.use("/notes", noteRoutes);



module.exports = router;
