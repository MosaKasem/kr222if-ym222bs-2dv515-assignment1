import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import EuclideanSimilarity from './components/euclidean/Similarity.js'
import EuclideanWeighted from './components/euclidean/WeightedScore.js'
import PearsonSimilarity from './components/pearson/Similarity.js'
import PearsonWeighted from './components/pearson/WeightedScore.js'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container mt-5'>
          <div className='wrapperopacity'>
            <h1 className="display-4">Movie recommendations</h1>
            <p className="lead">This website is dedicated to all moviewatchers all over the world</p>
            <Home />
            <Switch>
            <Route path='/euclideansim' exact component={EuclideanSimilarity} />
            <Route path='/euclideanweight' exact component={EuclideanWeighted} />
            <Route path='/pearsonsim' exact component={PearsonSimilarity} />
            <Route path='/pearsonweight' exact component={PearsonWeighted} />
            </Switch>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App
