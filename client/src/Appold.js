import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import API from './utils/API'
import axios from 'axios'
import Posts from './Components/Posts.js'


class App extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      note: '',
      saved: []
    };

    this.saveNote = this.saveNote.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  

  // ORDER OF EVENTS: 
  // type note
  // save to db
  // get request notes 

  handleChange = (val, type) => {
   
    this.setState({
      [type]: val
    })
  }


  // POST: Save a note to db
  saveNote = (data) => {
    axios.post('/api/notes', {
      Note: data
    })
    .then(function (res) {
      console.log('Posted note to db:', res.body);
    })
    .catch(function (err) {
      console.log(err);
    });
  }
    //console.log("Saved article:" + article.title);
  //   API.saveNote(note)
  //     .then(res => {
  //       console.log("Saved note to db: " + res.note);
  //       this.setState({
  //         saved: [...this.state.saved, res.data]
  //       });
  //       console.log(this.state.saved)
  //     })
  //     .catch(err => console.log(err));
  // };

  // GET: all saved articles
  getNotes() {
    //console.log(article);
   API.getNotes()
      .then(res => {
        this.setState({
          saved: res.data
        })
        console.log("All Saved Notes in db: " + res.data)
      })
      .catch(err => console.log(err));
  };

  // // DELETE + id: Delete an article from db then set state to a get request of all books???
  // deleteNote = (id) => {
  //   API.deleteNote(id)
  //     .then(this.getNotes())
  //     .catch(err => console.log(err));
  // };

  // // POST: A comment to a specific article id
  // postComment = (id, comment, username) => {
  //   var newComment = {
  //     comment: comment,
  //     username: username
  //   }

  //   document.getElementById('commentInput').value = "";
  //   document.getElementById('usernameInput').value = "";

  //   API.postComment(id, newComment)
  //     .then(res => {
  //       console.log(res)

  //       this.getNotes()
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
   let renderSaved =
      this.state.saved.map(i =>
        <div>
          {/* <span>Title: {i.title}</span> */}
          <span>Note: {i}</span>
        </div> 
      );

    return (
      <div id="App">

        <Navbar />

        <div id='body'>
          {renderSaved}
        </div>

        <div>
         
          New Note:
          Title:
          <input 
              placeholder='title' 
              //value={this.state.title} 
              onChange={ (e) => {this.handleChange(e.target.value, 'title')}}>
          </input>
          <input 
              placeholder='note' 
              //value={this.state.note} 
              onChange={ (e) => {this.handleChange(e.target.value, 'note')}}>
          </input>
          <div onClick={ () => {this.saveNote(this.state.note)}} type="submit" value="Submit" >Submit</div>
        </div>
  <Posts />
      </div>
    )
  }
}


export default App;