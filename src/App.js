import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import About from './components/About'


 
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

