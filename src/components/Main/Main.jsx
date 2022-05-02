import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'
import Contact from './Contact'
import Delivery from './Devivery'
import { Route,Routes } from 'react-router-dom'
import Topics from './Topics'
import Card from './Card'

export class Main extends Component {
  render() {
    return (
      <main>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logopokemon" style={{width: "500px"}}/>
          <Routes>
          <Route element={<ProductList/>} path='/'/>
          <Route element={<Chefs/>} path='/listachefs'/>
          <Route element={<Delivery/>} path='/delivery'/>
          <Route element={<Topics/>} path='/topics'/>
          <Route element={<Contact/>} path='/contact'/>
          <Route element={<Card/>} path='/card'/>

          </Routes>
          
      </main>
    )
  }
}

export default Main