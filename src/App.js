import React from 'react'
import './App.css'
import CharacterData from './components/CharacterData'
import EpisodeData from './components/EpisodeData'
import HomePage from './components/HomePage'
import Information from './components/Information'
import SocialFooter from './components/SocialFooter'
import logo from './logo.svg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App () {
  return (

    <Router>    

      <div>
        <ul id="lista">
          <li>
            <img id="hp"src={logo} alt="logo"/>
          </li>
          <li>
            <Link id="link" to='/'>Home</Link>   
          </li>
          <li>
            <Link id="link" to='/character'>Characters</Link> 
          </li>
          <li>
            <Link id="link" to='/episode'>Episodes</Link> 
          </li>
          <li>
            <Link id="link" to='/info'>Information</Link>
          </li>
        </ul>

        <br />
        <br />

        <Switch>
          <Route exact path='/'> 
            <Home /> 
          </Route>
          <Route path='/character'> 
            <Character />
          </Route>
          <Route path='/episode'> 
            <Episode />
          </Route>
          <Route path='/info'>
            <Info />
          </Route>
        </Switch>

      </div>
    </Router>

  )
}

function Episode () {   
  return (
    <div>
      <h3>20 Main episodes</h3>
      <hr />
      <EpisodeData />
    </div>
  )
}

function Character () {   
  return (
    <div>
      <h3>20 Main characters</h3>
      <hr />
      <CharacterData />
    </div>
  )
}

function Home(){    
  return (
    <div>
      <HomePage />
    </div>
  )
}

function Info(){
  return(
    <div>
      <Information />
      <SocialFooter />
    </div>
  )
}