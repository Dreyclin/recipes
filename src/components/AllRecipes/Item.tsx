import React from 'react'
import { Link } from 'react-router-dom'

interface ItemProps {
  id: number,
  meal: string,
  image: string,
  description: string
}

const Item: React.FC<ItemProps> = ({id, meal, image, description}) => {
  return (
    <div className='item'>
      <div className="recipe_image_container">
        <img className='recipe_image' src={image} alt="" />
      </div>
      <div className="desc_container">
        <h3 className='title_text'>{meal}</h3>
        <p className='desc_text text-[#939393] overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
      </div>
      <div className="recipe_btns_container last_item">
        <button className='recipe_btn' onClick={() => {}}>Обрати</button>
        <Link to={`/details/${id}`} className='recipe_btn'>Детальніше</Link>
      </div>
    </div>
  )
}

export default Item