import React from 'react'
import img from '../images/troll-face.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={img} alt="img"  className='header-img'/>
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-project '>React - Project</h4>
    </header>
  )
}

export default Header
