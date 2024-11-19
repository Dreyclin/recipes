import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex justify-between items-center pb-16'>
        <h1 className='title_text'>Recipe</h1>
        <Nav />
    </div>
  )
}

export default Header