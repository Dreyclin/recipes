import React from 'react'

const Item = () => {
  return (
    <div className='item'>
      <div className="recipe_image_container">
        <img className='recipe_image' src="assets/images/test-image.jpg" alt="" />
      </div>
      <div className="desc_container">
        <h3 className='title_text'>Chicken breast</h3>
        <p className='desc_text text-[#939393] overflow-hidden text-ellipsis whitespace-nowrap'>Very tasty chicken</p>
      </div>
      <div className="recipe_btns_container">
        <button className='recipe_btn'>Обрати</button>
        <button className='recipe_btn'>Детальніше</button>
      </div>
    </div>
  )
}

export default Item