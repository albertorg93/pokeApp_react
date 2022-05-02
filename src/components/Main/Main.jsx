import React, { Component } from 'react'
// import ProductList from './ProductList'
// import Chefs from './Chefs'
// import Contact from './Contact'
// import Delivery from './Devivery'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
// import Topics from './Topics'
import Card from './Card'

export class Main extends Component {
  render() {
    return (
      <main>
          <img className='logoinicial' src={logopoke} alt="logopokemon"/>
          <Routes>
          {/* <Route element={<ProductList/>} path='/'/>
          <Route element={<Chefs/>} path='/listachefs'/>
          <Route element={<Delivery/>} path='/delivery'/>
          <Route element={<Topics/>} path='/topics'/>
          <Route element={<Contact/>} path='/contact'/> */}
          <Route element={<Card/>} path='/card'/>

          </Routes>
          
      </main>
    )
  }
}

export default Main