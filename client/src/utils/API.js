import axios from "axios";

export default {
  // Gets all articles
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // // Gets article with a given id
  // getArticle: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // // Deletes article with a given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // Save article or comment to db
  saveNote: function(data) {
    return axios.put("/api/notes", data);
  },
  // // Save comment to db
  // postComment: function(id, comment) {
  //   return axios.put("/api/articles/" + id,  {commentBody: comment});
  // }
};
