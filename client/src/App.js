import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import Similarity from './components/Similarity.js'
import Weighted from './components/WeightedScore.js'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container mt-5'>
        <h1 className="display-4">Movie recommendations</h1>
        <p className="lead">This website is dedicated to all moviewatchers all over the world</p>
        <Home />
        <Switch>
          <Route path='/similarity' exact component={Similarity} />
          <Route path='/weighted' exact component={Weighted} />
        </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App
