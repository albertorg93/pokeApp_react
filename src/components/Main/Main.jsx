import React, { Component } from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Card from './Card'

export class Main extends Component {
  render() {
    return (
      <main>
          <img className='logoinicial' src={logopoke} alt="logopokemon"/>
          <Routes>
          <Route element={<Card/>} path='/card'/>
          </Routes>
          
      </main>
    )
  }
}

export default Main