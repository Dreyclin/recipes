import React from 'react'


const Nav = () => {
  return (
    <nav className=''>
      <ul className='hidden gap-4 sm:flex'>
        <li className='nav-item text-lg chosen_link'><a href="/">Рецепти</a></li>
        <li className='nav-item text-lg'><a href="/">Обрані</a></li>
      </ul>
      <div className="w-10 sm:hidden">
        <img src="assets/images/burger.png" alt="" />
      </div>
    </nav>
  )
}

export default Nav