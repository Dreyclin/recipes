import React from 'react'

const Pagination = () => {
  return (
    <div className='desc_text pagination_container'>
      <button className='pagination_item'>&lt;</button>
      <div className="flex gap-4">
        <button className='pagination_item pagination_item_active'>1</button>
        <button className='pagination_item'>2</button>
        <button className='pagination_item'>3</button>
      </div>
      <button className='pagination_item'>&gt;</button>
    </div>
  )
}

export default Pagination