const router = require("express").Router();
const notesController = require("../../controllers/notesController.js");
//import axios from 'axios'


router.get("/events", function(req, res) {
  // res.json(
  //   {
  //   event: 'concert'
  // });
  //res.send('Get request to events')
  //console.log('app.get route called for events');
 
  // let searchInput = document.getElementById("searchInput").value; 
  // let searchTerm = searchInput.replace(/ /g, '+');
  // const apiKey = 'h3LjwpmzbpDcs6wx';
  // &keywords=books

  // fetch('http://api.eventful.com/json/events/search?app_key=' + apiKey + 'h3LjwpmzbpDcs6wx&location=' + searchTerm + '&date=Future',
  fetch('http://api.eventful.com/json/events/search?app_key=h3LjwpmzbpDcs6wx&location=denver&date=Future')
      // headers: {
      //     'Access-Control-Allow-Origin': '*'
      // }
  //.then(data => {res.json(data); console.log(' server fetch eventful data' + data + res)})
  //.then(res => json.stringify(res.body))
  .then(response => response.json()).then(data => console.log(data));
//   .then(res.send())
//   .then(console.log('server api call made: ' + res))
//  // .then(console.log(res))
//   .catch(function (error) {
//     console.log(error);
  })



// Matches with "/api/notes"
router.route("/")
  .get(notesController.findAll)
  .post(notesController.create)
  

  

// // Matches with "/api/notes/:id"
// router.route("/:id")
//   .get(notesController.findById)
//   .put(notesController.update)
//   .delete(notesController.remove);


module.exports = router;

