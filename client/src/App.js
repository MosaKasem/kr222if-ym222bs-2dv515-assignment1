import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import './App.css'

const style = {

}

const App = () => {
  return (
    <div className='container mt-5'>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
