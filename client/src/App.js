import React, { Component } from 'react'
import './App.css'

//import API from './utils/API'
//import axios from 'axios'
// Import provider so redux and react can interact
import { Provider } from 'react-redux'
import store from './store.js'
import Main from './Components/Main'


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div id="App">
          <Main />
        </div>
      </Provider>
    )
  }
}


export default App;
