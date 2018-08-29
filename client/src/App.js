import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import API from './utils/API'
import axios from 'axios'
import Posts from './Components/Posts.js'
//import PostForm from './Components/PostForm.js'
// Import provider so redux and react can interact
import { Provider } from 'react-redux'
import store from './store.js'


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

  render() {
    // let renderSaved =
    //   this.state.saved.map(i =>
    //     <div>
    //       <span>Note: {i}</span>
    //     </div>
    //   );

    return (
      <Provider store={store}>
        <div id="App">
          <Navbar />
         
          <Posts />
        </div>
      </Provider>
    )
  }
}


export default App;
