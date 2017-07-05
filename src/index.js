import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import SearchBar from './components/SearchBar'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' exact component={App} />
      <Route path='/search' component={SearchBar} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'))
