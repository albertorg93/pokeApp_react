import React, { Component } from 'react'
import Nav from './Nav'
import logo from '../../assets/logopoke.png'
export class Header extends Component {
  render() {
    return (
      <header className='header'>
         <img src={logo} alt='logo'></img>
        <Nav/>
 
        </header>
    )
  }
}
export default Header